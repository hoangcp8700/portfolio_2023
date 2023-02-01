import clsx from 'clsx';
import React, { forwardRef } from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  id?: string;
  error?: boolean;
  onShowError?: (value: boolean) => void;
  variants?: 'contained' | 'rounded';
}

const TextAreaRef: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  { disabled, className, error, variants, onShowError, ...props },
  ref,
) => (
  <div className='relative'>
    <textarea
      ref={ref}
      className={clsx(
        'reset-input relative block bg-transparent border transition-all w-full resize-none px-3 focus:ring-0',
        variants === 'contained' ? 'rounded-xl' : 'rounded-full pl-6',
        error
          ? 'text-red-600 border-red-500 focus:border-red-600 placeholder:text-red-400 pr-6'
          : 'text-gray-800 border-gray-700 focus:border-blue-600 placeholder:text-gray-600 focus:placeholder:text-gray-500/75',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
      disabled={disabled}
      {...props}
    />
    {error && (
      <div
        className='absolute right-4 top-[50%] translate-y-[-50%] w-4 h-4 cursor-pointer'
        onMouseEnter={() => onShowError && onShowError(true)}
        onMouseLeave={() => onShowError && onShowError(false)}
      >
        <div className='animate-scale w-full h-full bg-red-500 rounded-full' />
      </div>
    )}
  </div>
);
const TextArea = forwardRef(TextAreaRef);

export default TextArea;
