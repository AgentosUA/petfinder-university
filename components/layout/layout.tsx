import { Fragment } from 'react';
import { Header, Footer } from '..';
import styles from './layout.module.scss';
const Layout = ({ children }) => {
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
