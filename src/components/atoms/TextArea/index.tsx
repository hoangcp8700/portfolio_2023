import clsx from 'clsx';
import React, { forwardRef } from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  id: string;
  label?: string;
  labelClass?: string;
}

const TextAreaRef: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  { id, label, required, disabled, className, labelClass, ...props },
  ref,
) => (
  <div className='a-textarea'>
    {label && (
      <div className={clsx('text-base mb-2', labelClass)}>
        <label htmlFor={id}>{label}</label>
        {required && <span className='ml-1 text-red-500 font-medium'>*</span>}
      </div>
    )}
    <div className='relative'>
      <textarea
        ref={ref}
        className={clsx(
          'reset-input bg-white bg-clip-border border border-solid !border-gray-300 resize-none w-full rounded-lg p-3 focus:border-blue-600',
          disabled && 'cursor-not-allowed opacity-50',
          className,
        )}
        disabled={disabled}
        {...props}
      />
    </div>
  </div>
);
const TextArea = forwardRef(TextAreaRef);

export default TextArea;
