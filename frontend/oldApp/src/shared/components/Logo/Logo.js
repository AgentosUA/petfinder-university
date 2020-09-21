import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from './logo.png';
import './Logo.css';

const Logo = (props) => {
  let sidebarButton;
  if (props.sideButton) {
    sidebarButton = (
      <FontAwesomeIcon
        icon={faBars}
        className="menu-icon mobile-show"
        onClick={props.sidebarHandler}
      />
    );
  } else {
    sidebarButton = '';
  }
  return (
    <NavLink className="logo__link" to="/">
      <div className="logo-wrapper">
        {sidebarButton}
        <img className="logo" src={logo} alt={props.alt} />
        <h1 className="logo__title">Pet Finder</h1>
      </div>
    </NavLink>
  );
};

export default Logo;
