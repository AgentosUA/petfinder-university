import React from 'react';
import { Wrapper, Logo } from '../../core';
import { AuthNav, Navigation } from './components';
import styles from './Header.scss';

const Header: React.FC = () => {

  return (
    <React.Fragment>
      <header className={styles.header}>
        <Wrapper>
          <Logo>Pet Finder</Logo>
          <Navigation />
          <AuthNav />
        </Wrapper>
      </header>
    </React.Fragment>
  );
};


export { Header };
