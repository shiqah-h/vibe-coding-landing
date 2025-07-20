import React, { forwardRef } from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, helperText, size = 'md', className = '', id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${React.useId()}`;
    
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    };
    
    const labelSizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };
    
    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={`${sizeClasses[size]} text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ${className}`}
            aria-invalid={!!error}
            aria-describedby={error ? `${checkboxId}-error` : helperText ? `${checkboxId}-helper` : undefined}
            {...props}
          />
        </div>
        <div className="ml-3 text-sm">
          {label && (
            <label htmlFor={checkboxId} className={`font-medium text-gray-700 ${labelSizeClasses[size]}`}>
              {label}
            </label>
          )}
          {error && (
            <p id={`${checkboxId}-error`} className="mt-1 text-red-600" role="alert">
              {error}
            </p>
          )}
          {helperText && !error && (
            <p id={`${checkboxId}-helper`} className="mt-1 text-gray-500">
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox; 