import { Fragment } from 'react';
import { Header, Footer } from '../';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export { Layout };
