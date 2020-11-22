import React from 'react';
import styles from './Wrapper.module.scss';

export const Wrapper: React.FC = (props) => (<div className={styles.wrapper}>{props.children}</div>);
