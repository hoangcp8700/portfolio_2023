import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import clsx from 'clsx';

import FieldError from './FieldError';

export interface FormControlProps {
  className?: string;
  showError?: boolean;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (props: any) => React.ReactElement;
}

const FormControl: React.FC<FormControlProps> = ({
  name,
  showError = true,
  className,
  render,
  ...rest
}): JSX.Element => {
  const { control } = useFormContext();

  return (
    <div className={clsx('m-formControl', className)}>
      <Controller
        {...rest}
        control={control}
        name={name}
        render={({ field, fieldState, formState }) => (
          <>
            {render({ field, fieldState, formState })}
            {showError && <FieldError name={name} />}
          </>
        )}
      />
    </div>
  );
};

export default FormControl;
