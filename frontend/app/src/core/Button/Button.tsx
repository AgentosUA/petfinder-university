import React from 'react';
import './Button.scss';

type ButtonProps = {

  text: string,
  theme?: 'primary' | 'secondary',
  type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button: React.FC<ButtonProps> = ({ theme, text, type }) => {
  return (<button type={type} className={`button ${theme ? theme : 'primary'}`}>{text}</button>);
}
