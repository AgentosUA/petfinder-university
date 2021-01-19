import React from 'react';
import './Button.scss';

type ButtonProps = {
  theme?: 'primary' | 'secondary',
  type?: 'button' | 'submit' | 'reset' | undefined,
  uppercase?: boolean
}

export const Button: React.FC<ButtonProps> = ({ theme, children, type, uppercase }) => {
  return (
    <button
      type={type}
      className={`button ${theme ? theme : 'primary'} ${uppercase && 'uppercase'}`}>
      {children}
    </button>
  );
}
