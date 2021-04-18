import Link from 'next/link';
import React from 'react'
import styles from './button.module.scss';

type buttonProps = {
  onClick?: any,
  children: React.ReactNode,
  disabled?: boolean,
  theme?: 'dark' | 'light'
  link?: string
}

const Button = ({ onClick, children, theme, disabled, link }: buttonProps) => {
  return (
    <Link href={link || '/'}>
      <button
        className={styles.button}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </Link>
  )
}

export { Button }