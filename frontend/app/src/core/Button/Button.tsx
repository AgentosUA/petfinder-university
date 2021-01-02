import React from 'react';
import './Button.scss';

type ButtonProps = {
  
  text: string,
  theme?: string,
}

type spreadProps = JSX.IntrinsicElements["button"];

export const Button: React.FC<ButtonProps & spreadProps> = (props, { text, theme }) => {
  return (<button {...props} className={`button ${theme ? theme : 'primary'}`}>{text}</button>);
}
