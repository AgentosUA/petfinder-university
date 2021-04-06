import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { State } from '../../../../store/store';
import { Button } from '../../../../core/Button';
import styles from './AuthNav.scss';
import { logout } from '../../../../store/general';

export const AuthNav: React.FC = () => {
  const dispatch = useDispatch();
  const { general: { isLoggedIn } } = useSelector((state: State) => state);

  const onLogout = () => {
    dispatch(logout());
  }

  if (isLoggedIn) {
    return (
      <div className={styles.authNav}>
        <Link to="/profile">Профіль</Link>
        <Button onClick={onLogout}>Вихід</Button>
      </div>
    );
  }

  return <div className={styles.authNav}>
    <Link to="/login">Увійти</Link>
    <Link to="/signup">Реєстрація</Link>
  </div>
}

