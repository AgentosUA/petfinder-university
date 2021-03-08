import React from 'react';
import styles from './Wrapper.module.scss';

type WrapperProps = {
  display?: 'block' | 'flex'
}

export const Wrapper: React.FC<WrapperProps> = ({display, children}) => (
<div className={`${styles.wrapper} ${display === 'block' ? styles.wrapperBlock : styles.wrapperFlex}`}>
  {children}
</div>
);
