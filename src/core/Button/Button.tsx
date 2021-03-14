import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Button.scss';

type ButtonProps = {
  theme?: 'primary' | 'secondary',
  type?: 'button' | 'submit' | 'reset' | undefined,
  uppercase?: boolean,
  to?: string
  onClick?: any
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ theme, children, type, uppercase, to, onClick, disabled }) => {

  return (
    to ? <NavLink to={to} className={`${styles.button} ${theme ? styles[theme] : styles.primary} ${uppercase && styles.uppercase}`}>
      {children}
    </NavLink>
      : <button
        disabled={disabled || false}
        onClick={onClick}
        type={type}
        className={`${styles.button} ${theme ? styles[theme] : styles.primary} ${uppercase && styles.uppercase}`}>
        {children}
      </button>
  );
}
