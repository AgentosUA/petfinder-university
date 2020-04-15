import React from 'react';

import './Navigation.css';

const Navigation = (props) => {
  return <nav className="header__navigation">{props.children}</nav>;
};

export default Navigation;
