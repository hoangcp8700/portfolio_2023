import React from 'react';

interface ButtonProps {}

const Button: React.FC<ButtonProps> = () => (
  <button className='a-button' type='button'>
    <span>span123</span>
    <p>text</p>
    <div className='a-button-background' />
  </button>
);

export default Button;
