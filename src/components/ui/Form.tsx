import React from 'react';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ onSubmit, error, children, className = '', ...props }) => {
  return (
    <form onSubmit={onSubmit} className={`space-y-6 ${className}`} {...props}>
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
      {children}
    </form>
  );
};

export default Form; 