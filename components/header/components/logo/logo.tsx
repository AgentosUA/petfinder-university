import Link from 'next/link';
import { Fragment } from 'react';

import styles from './logo.module.scss';

const Logo = () => (
  <div className={styles.logo}>
    <Link href='/'><img src='logo.png' alt='logo' /></Link>
  </div>
);

export { Logo };
