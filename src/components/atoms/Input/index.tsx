import clsx from 'clsx';
import React, { forwardRef, useMemo } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'number' | 'email' | 'password';
  id?: string;
  error?: boolean;
  sizes?: 'md' | 'lg';
  onShowError?: (value: boolean) => void;
}

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type = 'text', error, sizes, disabled, className, onShowError, ...props },
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
    <div className={clsx('a-input relative')}>
      <input
        ref={ref}
        type={type}
        className={clsx(
          'reset-input relative block bg-transparent border transition-all w-full rounded-full px-3 focus:ring-0',
          error
            ? 'text-red-600 border-red-500 focus:border-red-600 placeholder:text-red-400'
            : 'text-gray-800 border-gray-700 focus:border-blue-600 placeholder:text-gray-600 focus:placeholder:text-gray-500/75',
          sizeStyle,
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
};
const Input = forwardRef(InputRef);

export default Input;
