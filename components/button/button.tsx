import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { InputProps } from 'react-select';
import styles from './button.module.scss';
import { buttonProps } from './button.props';

const Button = ({
  onClick,
  children,
  theme = 'dark',
  disabled,
  link,
  type = 'button',
  className,
  fullWidth = false,
}: buttonProps & React.HTMLProps<buttonProps>) => {
  const ButtonComponent = () => (
    <button
      className={classNames(styles.button, styles[theme], {
        [styles.fullWidth]: fullWidth,
        [className]: className,
      })}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );

  if (link) {
    return (
      <Link href={link}>
        <ButtonComponent />
      </Link>
    );
  }

  return <ButtonComponent />;
};

export { Button };
