import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import styles from './Logo.scss';

export const Logo: React.FC = () => {
  return <div className={styles.headerLogo}>
    <Link to="/" ><img src={logo} alt="logo" /></Link>
  </div>
}

