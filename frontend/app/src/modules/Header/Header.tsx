import React from 'react';
import { Wrapper, Logo, Navigation, AuthNav } from '../../core';
import './Header.scss';

const Header: React.FC = () => {

  return (
    <React.Fragment>
      <header className="header">
        <Wrapper>
          <Logo />
          <Navigation />
          <AuthNav />
        </Wrapper>
      </header>
    </React.Fragment>
  );
};


export { Header };
