import React from 'react';

import Wrapper from '../Wrapper/Wrapper';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import MainLinks from '../Navigation/MainLinks.js';
import AuthLinks from '../Navigation/AuthLinks.js';
import './Header.css';

const Header = (props) => {
  return (
    <header className="main-header">
      <Wrapper>
        <Logo alt="logo" sideButton sidebarHandler={props.sidebarHandler} />
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
