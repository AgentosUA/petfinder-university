import { startup } from '@store';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header, Footer } from '..';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startup());
  })
  
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
