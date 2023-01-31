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
        return 'h-[40px] sm:h-[48px]';
      default:
        return 'h-[40px]';
    }
  }, [sizes]);

  return (
    <input
      ref={ref}
      type={type}
      className={clsx(
        'reset-input block bg-transparent border transition-all w-full rounded-full px-3 focus:ring-0',
        error
          ? 'text-red-500 border-red-500 focus:border-red-600 placeholder:text-red-500/50 '
          : 'text-gray-800 border-gray-700 focus:border-blue-600 placeholder:text-gray-600 focus:placeholder:text-gray-500/75',
        sizeStyle,
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
      disabled={disabled}
      {...props}
    />
  );
};
const Input = forwardRef(InputRef);

export default Input;
