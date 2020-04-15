import React from 'react';

import Wrapper from '../Wrapper/Wrapper';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import MainLinks from '../Navigation/MainLinks.js';
import AuthLinks from '../Navigation/AuthLinks.js';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <Wrapper>
        <Logo alt="logo" />
        <Navigation>
          <MainLinks />
        </Navigation>
        <Navigation>
          <AuthLinks />
        </Navigation>
      </Wrapper>
    </header>
  );
};

export default Header;
