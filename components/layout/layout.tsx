import { login, logout, startup, State } from '@store';
import { Fragment, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cookieCutter from 'cookie-cutter'
import { Header, Footer } from '..';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: State) => state.general);

  useEffect(() => {
    const token = Number(cookieCutter.get('token'));
    const expiresIn = Number(cookieCutter.get('expiresIn'));
    const currentTime = +new Date() / 1000;
    const timeLeft = (expiresIn - currentTime) * 1000;

    if (isNaN(timeLeft)) return;

    dispatch(login({ token, expiresIn }));

    const logoutTimer = setTimeout(() => {
      dispatch(logout());
    }, timeLeft)

    return () => {
      clearTimeout(logoutTimer);
    }
  }, [isLoggedIn]);

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export { Layout };
