import styles from './header.module.scss';
import Link from 'next/link';
import { useMediaPoints } from '../../shared/hooks';
import { Fragment } from 'react';
import { NavLinks, AuthLinks, Logo, Sidebar } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarVisible, State } from '@store';

const Header = () => {
  const dispatch = useDispatch();
  const { desktop } = useMediaPoints();
  const { isSidebarVisible } = useSelector((state) => state.general)

  const onMenuClick = () => {
    dispatch(setSidebarVisible(true));
  }

  return (
    <header className={styles.header}>
      {desktop && (
        <div className={styles.wrapper}>
          <Logo />
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
          {!isSidebarVisible && <FontAwesomeIcon icon={faBars} onClick={onMenuClick} />}
          {isSidebarVisible && <Sidebar />}
          <Logo />
        </div>
      )}
    </header>
  );
};

export { Header };
