import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { InputProps } from 'react-select';
import styles from './button.module.scss';
import { buttonProps } from './button.props';

const Button = ({
  link,
  onClick,
  children,
  disabled,
  className,
  theme = 'light',
  type = 'button',
  fullWidth = false
}: buttonProps & React.HTMLProps<buttonProps>) => {
  const router = useRouter();

  return (
    <button
      className={classNames(styles.button, styles[theme], {
        [styles.fullWidth]: fullWidth,
        [className]: className
      })}
      onClick={() => {
        if (onClick) onClick();
        if (link) router.push(link);
      }}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export { Button };
