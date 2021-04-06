import React from 'react';

import styles from './Input.scss';

type InputProps = {
  name: string,
  type: 'text' | 'number' | 'phone' | 'textarea' | 'password',
  theme?: 'dark' | 'light'
  placeholder?: string,
  onChange?: any
}

const Input: React.FC<InputProps> = ({ name, theme, type, placeholder, onChange }) => {
  if (type === 'textarea') return <textarea name={name} className={theme === 'dark' ? styles.dark : styles.light} />

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder || ''}
      className={theme === 'dark' ? styles.dark : styles.light}
      autoComplete='on'
      onChange={onChange}
      />
  );
};

export { Input };
