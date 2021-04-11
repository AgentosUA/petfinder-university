import Link from 'next/link';
import { Fragment } from 'react';

import styles from './logo.module.scss';
import logo from '../../../../assets/images/logo.png';


const Logo = () => (
  <div className={styles.logo}>
    <Link href='/'><img src={logo} alt='logo' /></Link>
  </div>
);

export { Logo };
