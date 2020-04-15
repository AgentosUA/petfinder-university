import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './logo.png';
import './Logo.css';

const Logo = (props) => {
  return (
    <NavLink className="logo__link" to="/">
      <div className="logo-wrapper">
        <img className="logo" src={logo} alt={props.alt} />
        <h1 className="logo__title">Pet Finder</h1>
      </div>
    </NavLink>
  );
};

export default Logo;
