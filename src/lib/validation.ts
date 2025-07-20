// Error message constants
export const VALIDATION_MESSAGES = {
  NAME_REQUIRED: 'Name is required',
  NAME_TOO_SHORT: 'Name must be at least 2 characters long',
  NAME_INVALID: 'Name can only contain letters, spaces, and hyphens',
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Please enter a valid email address',
  EMAIL_ALREADY_EXISTS: 'This email is already registered',
} as const;

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Name validation regex (letters, spaces, hyphens only)
const NAME_REGEX = /^[a-zA-Z\s\-]+$/;

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateName(name: string): ValidationResult {
  const trimmedName = name.trim();
  
  if (!trimmedName) {
    return { isValid: false, error: VALIDATION_MESSAGES.NAME_REQUIRED };
  }
  
  if (trimmedName.length < 2) {
    return { isValid: false, error: VALIDATION_MESSAGES.NAME_TOO_SHORT };
  }
  
  if (!NAME_REGEX.test(trimmedName)) {
    return { isValid: false, error: VALIDATION_MESSAGES.NAME_INVALID };
  }
  
  return { isValid: true };
}

export function validateEmail(email: string): ValidationResult {
  const trimmedEmail = email.trim();
  
  if (!trimmedEmail) {
    return { isValid: false, error: VALIDATION_MESSAGES.EMAIL_REQUIRED };
  }
  
  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return { isValid: false, error: VALIDATION_MESSAGES.EMAIL_INVALID };
  }
  
  return { isValid: true };
}

export function sanitizeFormData(data: {
  name: string;
  email: string;
  newsletter_consent?: boolean;
}) {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    newsletter_consent: !!data.newsletter_consent,
  };
}

export function validateFormData(data: {
  name: string;
  email: string;
  newsletter_consent?: boolean;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  
  const nameValidation = validateName(data.name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error!;
  }
  
  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error!;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
} 