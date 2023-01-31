import Typography from '@components/atoms/Typography';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { useFormContext, Message } from 'react-hook-form';

export interface FieldErrorProps {
  name: string;
  component?: React.ReactElement;
  message?: Message;
}

const FieldError: React.FC<FieldErrorProps> = ({
  name,
  component = <Typography type='p' className='sm:text-lg text-md text-red-600' />,
  message,
}) => {
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
