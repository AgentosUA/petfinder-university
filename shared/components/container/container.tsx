import React from 'react';
import classnames from 'classnames';
import styles from './container.module.scss';

const Container = ({ children, theme = 'light' }) => {
  return (
    <section
      className={classnames(
        styles.container,
        theme === 'dark' ? styles.dark : styles.light
      )}
    >
      {children}
    </section>
  );
};

export { Container };
