/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import React, { useMemo, useState } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: 'md' | 'lg';
  variants?: 'default' | 'primary' | 'secondary' | 'outlined' | 'contained';
  radius?: 'md' | 'lg' | 'full';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  size,
  variants,
  children,
  disabled,
  fullWidth,
  className,
  radius = 'lg',
  onClick,
  ...props
}) => {
  const [animate, setAnimate] = useState(false);

  const variantStyle = useMemo(() => {
    switch (variants) {
      case 'default':
        return 'bg-gray-200 shadow-primary hover:shadow-primaryInner';
      case 'primary':
        return 'bg-blue-500 text-white hocus:bg-blue-700 active:bg-blue-800';
      case 'secondary':
        return 'bg-red-500 hocus:bg-red-700  active:bg-red-800';
      case 'outlined':
        return 'border border-gray-200 shadow-lg';
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

  const radiusStyle = useMemo(() => {
    switch (radius) {
      case 'lg':
        return 'rounded-xl';
      case 'md':
        return 'rounded-lg';
      case 'full':
        return 'rounded-full';
      default:
        return '';
    }
  }, [radius]);

  return (
    <button
      type={type || 'button'}
      className={clsx(
        'reset-button relative flex adjust-flex-center overflow-hidden transition-all px-5 sm:px-8 focus:ring-0',
        animate && 'animate-tick',
        radiusStyle,
        variantStyle,
        sizeStyle,
        fullWidth && 'w-full',
        disabled &&
          'bg-gray-300 shadow-inner !text-gray-800 cursor-not-allowed opacity-70 hover:!bg-gray-700 hover:!text-gray-400',
        className,
      )}
      onClick={(e) => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
        onClick && onClick(e);
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonDot: React.FC<ButtonProps> = ({ ...props }) => (
  <div
    className={
      'relative w-fit hover:delay-1000 hover:text-white hover:before:left-[50%] hover:before:rotate-180 hover:after:delay-1000 hover:after:scale-150 before-after:content-[""] before-after:absolute before-after:rounded-full before-after:bg-blue-800  before-after:z-0 before:translate-y-[-75%] before:w-2 before:h-2 before-after:top-[50%] before:ease-in-out before:duration-1000 before:shadow-lg before:left-0  after:w-10 after:h-10 after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:scale-0 after:ease-in after:duration-300'
    }
  >
    <Button {...props} />
  </div>
);

export default Button;
