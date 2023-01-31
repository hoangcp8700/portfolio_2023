import clsx from 'clsx';
import React, { forwardRef, useMemo } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'number' | 'email' | 'password';
  id: string;
  error?: string;
  sizes?: 'md' | 'lg';
}

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type = 'text', error, sizes, disabled, className, ...props },
  ref,
) => {
  const sizeStyle = useMemo(() => {
    switch (sizes) {
      case 'lg':
        return 'h-[48px] sm:h-[56px]';
      case 'md':
        return 'h-[48px] sm:h-[48px]';
      default:
        return 'h-[40px]';
    }
  }, [sizes]);

  return (
    <div className='relative'>
      <input
        ref={ref}
        type={type}
        className={clsx(
          'reset-input block text-gray-800 bg-transparent border !border-gray-700 placeholder:text-gray-600 transition-all w-full rounded-full px-3 focus:placeholder:text-gray-500/75 focus:border-blue-600',
          error && '!text-red-500 !border-red-500',
          sizeStyle,
          disabled && 'cursor-not-allowed opacity-50',
          className,
        )}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};
const Input = forwardRef(InputRef);

export default Input;
