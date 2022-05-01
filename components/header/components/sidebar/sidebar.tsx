import Link from 'next/link';
import React from 'react';

import { Logo } from '../logo';
import { AuthLinks } from '../auth-links';
import { NavLinks } from '../nav-links';

import styles from './sidebar.module.scss';
import { useDispatch } from 'react-redux';
import { setSidebarVisible } from '@store';

const Sidebar = () => {
  const dispatch = useDispatch();

  const onMenuClick = () => {
    dispatch(setSidebarVisible(false));
  }
  return (
    <div className={styles.sidebar} onClick={onMenuClick}>
      {/* <FontAwesomeIcon icon={faTimes} onClick={onMenuClick} className={styles.icon} /> */}
      <Logo />
      <NavLinks />
      <br />
      <AuthLinks />
    </div>
  )
};

export { Sidebar };
