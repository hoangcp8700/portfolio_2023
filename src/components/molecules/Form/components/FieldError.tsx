import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { useFormContext, Message } from 'react-hook-form';

export interface FieldErrorProps {
  name: string;
  component?: React.ReactElement;
  message?: Message;
}

const FieldError: React.FC<FieldErrorProps> = ({ name, component = <p />, message }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <ErrorMessage
      errors={errors}
      name={name}
      as={component}
      message={message}
      render={({ message: messageRender }) => messageRender}
    />
  );
};

export default FieldError;
