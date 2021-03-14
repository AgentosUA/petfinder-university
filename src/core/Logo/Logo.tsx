import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { useMediaPoints } from '../../hooks';
import styles from './Logo.scss';

export const Logo: React.FC = ({ children }) => {
  const { desktop } = useMediaPoints();

  return <div className={styles.logo}>
    <Link to="/" ><img src={logo} alt="logo" />
      {desktop && <h3 className={styles.text}>{children}</h3>}
    </Link>
  </div>
}

