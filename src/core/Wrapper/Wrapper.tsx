import React from 'react';
import styles from './Wrapper.scss';

type WrapperProps = {
  display?: 'block' | 'flex'
}

export const Wrapper: React.FC<WrapperProps> = ({display, children}) => (
<div className={`${styles.wrapper}`}>
  {children}
</div>
);
