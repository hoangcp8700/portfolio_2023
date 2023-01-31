import React from 'react';
import clsx from 'clsx';

export interface FieldLabelProps {
  label?: string;
  name: string;
  required?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const FieldLabel: React.FC<FieldLabelProps> = ({ label, className, name, required, children }): JSX.Element => (
  <div className={clsx('m-fieldLabel', className)}>
    <label htmlFor={name}>{children || <span>{label}</span>}</label>
    {label && required && <span className='text-red-600 ml-1'>*</span>}
  </div>
);

export default FieldLabel;
