import styles from './header.module.scss';
import Link from 'next/link';
import * as logo from '../../public/logo.png'
import { useMediaPoints } from '../../shared/hooks';
import { Fragment } from 'react';
import { NavLinks, AuthLinks, Logo } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const { desktop } = useMediaPoints();

  return (
    <header className={styles.header}>
      {desktop && (
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Logo logo={logo} />
          </div>
          <div className={styles.nav}>
            <NavLinks />
          </div>
          <div className={styles.auth}>
            <AuthLinks />
          </div>
        </div>
      )}

      {!desktop && (
        <div className={styles.wrapper}>
          <div className={styles.nav}>
            <FontAwesomeIcon icon={faBars} />
            <NavLinks />
          </div>
          <div className={styles.auth}>
            <AuthLinks />
          </div>
          <div className={styles.logo}>
            <Logo logo={logo} />
          </div>
        </div>
      )}

    </header>
  );
};

export { Header };
