import { Fragment, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cookieCutter from 'cookie-cutter';
import { Sidebar } from 'components/header/components';
import { Header, Footer } from '..';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  // const dispatch = useDispatch();
  // const { isLoggedIn, isSidebarVisible } = useSelector((state: State) => state.general);

  // useEffect(() => {
  //   const token = cookieCutter.get('token');
  //   const expiresIn = Number(cookieCutter.get('expiresIn'));
  //   const currentTime = +new Date() / 1000;
  //   const timeLeft = (expiresIn - currentTime) * 1000;

  //   if (isNaN(timeLeft) || timeLeft <= 0) return;

  //   dispatch(login({ token, expiresIn }));

  //   const logoutTimer = setTimeout(() => {
  //     dispatch(logout());
  //   }, timeLeft)

  //   return () => {
  //     clearTimeout(logoutTimer);
  //   }
  // }, [isLoggedIn]);

  return (
    <Fragment>
      <Header />
      {/* {isSidebarVisible && <Sidebar />} */}
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export { Layout };
