import React from 'react';
import { useFormContext } from 'react-hook-form';

export interface FieldSubmitProps {
  isDisabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const FieldSubmit: React.FC<FieldSubmitProps> = ({ children, className, isDisabled }) => {
  const { formState } = useFormContext();
  const { isSubmitting, isDirty, isValid, isSubmitted } = formState;

  const disabled = isDisabled || isSubmitting || (!isDirty && !isValid && isSubmitted);
  const hasErrors = isDirty && !isValid && isSubmitted && !isSubmitting;

  console.log('🚀 ~ file: FIeldSubmit.tsx:13 ~ formState', formState, hasErrors);

  return (
    <button type='submit' disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default FieldSubmit;
