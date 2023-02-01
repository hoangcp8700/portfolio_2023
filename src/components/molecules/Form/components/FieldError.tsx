import Typography from '@components/atoms/Typography';
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';
import React from 'react';
import { useFormContext, Message } from 'react-hook-form';

export interface FieldErrorProps {
  name: string;
  component?: React.ReactElement;
  message?: Message;
  className?: string;
}

const FieldError: React.FC<FieldErrorProps> = ({
  name,
  component = <Typography type='p' className='sm:text-md text-sm text-red-500' />,
  message,
  className,
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className={clsx('ml-2 mt-1', className)}>
      <ErrorMessage
        errors={errors}
        name={name}
        as={component}
        message={message}
        render={({ message: messageRender }) => messageRender}
      />
    </div>
  );
};

export default FieldError;
