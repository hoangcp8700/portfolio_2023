/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import React, { useMemo, useState } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: 'md' | 'lg';
  variants?: 'default' | 'primary' | 'secondary' | 'outlined' | 'contained';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  size,
  variants = 'outlined',
  children,
  disabled,
  fullWidth,
  className,
  onClick,
  ...props
}) => {
  const [animate, setAnimate] = useState(false);

  const variantStyle = useMemo(() => {
    switch (variants) {
      case 'default':
        return 'bg-gray-200 shadow-primary hover:shadow-primaryInner';
      case 'primary':
        return 'bg-blue-500 hocus:bg-blue-700 active:bg-blue-800';
      case 'secondary':
        return 'bg-red-500 hocus:bg-red-700  active:bg-red-800';
      case 'outlined':
        return 'border border-gray-200';
      case 'contained':
        return 'bg-gray-200 rounded-sm';
      default:
        return '';
    }
  }, [variants]);

  const sizeStyle = useMemo(() => {
    switch (size) {
      case 'lg':
        return 'h-[48px] sm:h-[56px]';
      case 'md':
        return 'h-[48px] sm:h-[48px]';
      default:
        return 'h-[40px]';
    }
  }, [size]);

  return (
    <button
      type={type || 'button'}
      className={clsx(
        'reset-button relative flex adjust-flex-center overflow-hidden transition-all px-5 sm:px-8 rounded-xl shadow-lg focus:ring-0',
        animate && 'animate-tick',
        variantStyle,
        sizeStyle,
        fullWidth && 'w-full',
        disabled && 'bg-gray-300 shadow-inner text-gray-500 cursor-not-allowed opacity-70 hover:!bg-gray-700',
        className,
      )}
      onClick={(e) => {
        setAnimate(!animate);
        onClick && onClick(e);
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
