'use client';

import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { submitSignup } from '../../lib/api';
import { validateName, validateEmail, sanitizeFormData } from '../../lib/validation';

// UI Components
import Input from '../ui/Input';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import Form from '../ui/Form';
import LoadingSpinner from '../ui/LoadingSpinner';
import SuccessMessage from '../ui/SuccessMessage';

type FormState = 'idle' | 'validating' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  newsletter_consent: boolean;
}

export default function SignupForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      newsletter_consent: false,
    },
  });

  const watchedValues = watch();

  // Real-time validation
  const validateField = useCallback((field: keyof FormData, value: string) => {
    if (field === 'name') {
      const result = validateName(value);
      return result.isValid ? undefined : result.error;
    }
    if (field === 'email') {
      const result = validateEmail(value);
      return result.isValid ? undefined : result.error;
    }
    return undefined;
  }, []);

  // Handle field changes with real-time validation
  const handleFieldChange = useCallback((field: keyof FormData, value: string) => {
    setValue(field, value);
    
    if (formState === 'error') {
      setFormState('idle');
      setErrorMessage('');
    }

    const fieldError = validateField(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: fieldError || '',
    }));
  }, [formState, setValue, validateField]);

  const onSubmit = async (data: FormData) => {
    setFormState('submitting');
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const sanitizedData = sanitizeFormData(data);
      const response = await submitSignup(sanitizedData);

      if (response.success) {
        setFormState('success');
        setSuccessMessage('Thank you for signing up! We\'ll be in touch soon.');
        reset();
        setErrors({});
      } else {
        setFormState('error');
        setErrorMessage(response.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const isFormValid = !errors.name && !errors.email && watchedValues.name && watchedValues.email;

  return (
    <div className="max-w-md mx-auto">
      <Form onSubmit={handleSubmit(onSubmit)} error={errorMessage}>
        <div className="space-y-6">
          {/* Name Field */}
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.name}
            {...register('name')}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            disabled={formState === 'submitting'}
            required
          />

          {/* Email Field */}
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
            error={errors.email}
            {...register('email')}
            onChange={(e) => handleFieldChange('email', e.target.value)}
            disabled={formState === 'submitting'}
            required
          />

          {/* Newsletter Consent */}
          <Checkbox
            label="Subscribe to our newsletter for updates and exclusive content"
            {...register('newsletter_consent')}
            disabled={formState === 'submitting'}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={formState === 'submitting'}
            disabled={!isFormValid || formState === 'submitting'}
            className="w-full"
          >
            {formState === 'submitting' ? 'Signing up...' : 'Sign Up'}
          </Button>
        </div>
      </Form>

      {/* Success Message */}
      {formState === 'success' && (
        <div className="mt-6">
          <SuccessMessage message={successMessage} />
        </div>
      )}

      {/* Loading State */}
      {formState === 'submitting' && (
        <div className="mt-6 text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-2 text-gray-600">Processing your signup...</p>
        </div>
      )}
    </div>
  );
} 