import React from 'react';
import { useFormContext } from 'react-hook-form';

export interface ErrorMessageProps {
  className?: string;
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  className,
  message = 'Please check required fields and errors in this form.',
}) => {
  const { formState } = useFormContext();
  const { errors } = formState;
  let errorMessage: JSX.Element | string = '';

  console.error('Error message all', errors);
  if (Object.entries(formState.errors).length > 0) {
    // errorMessage = errors._ ? errors._.message : message;
    errorMessage = message;
  }

  if (!errorMessage || (typeof errorMessage === 'string' && errorMessage.length === 0)) {
    return null;
  }
  return <div className={className}>{message}</div>;
};
export default ErrorMessage;
