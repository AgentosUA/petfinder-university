import classNames from 'classnames';
import Link from 'next/link';
import React from 'react'
import { InputProps } from 'react-select';
import styles from './button.module.scss';

type buttonProps = {
  onClick?: any,
  children: React.ReactNode,
  disabled?: boolean,
  theme?: 'dark' | 'light'
  link?: string,
  type?: 'submit' | 'button' | 'reset',
}

const Button = ({ onClick, children, theme = 'dark', disabled, link, type }: buttonProps & React.HTMLProps<buttonProps>) => {
  if (link) {
    return (
      <Link href={link}>
        <button
          className={classNames(styles.button, theme === 'light' ? styles.light : styles.dark)}
          onClick={onClick}
          disabled={disabled}
          type={type || 'button'}
        >
          {children}
        </button>
      </Link>
    )
  }

  return (
    <button
      className={classNames(styles.button, theme === 'light' ? styles.light : styles.dark)}
      onClick={onClick}
      disabled={disabled}
      type={type || 'button'}
    >
      {children}
    </button>
  )
}

export { Button }