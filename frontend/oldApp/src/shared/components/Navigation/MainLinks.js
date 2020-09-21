import React from 'react';

import { NavLink } from 'react-router-dom';

const MainLinks = () => {
  return (
    <React.Fragment>
      <NavLink className="navigation__link mobile-hide" to="/">
        Головна
      </NavLink>
      <NavLink
        className="navigation__link mobile-hide"
        to="/search?type=all&gender=all&status=escaped&page=1"
      >
        Зниклі
      </NavLink>
      <NavLink
        className="navigation__link mobile-hide"
        to="/search?type=all&gender=all&status=founded&page=1"
      >
        Знайдені
      </NavLink>
      <NavLink className="navigation__link mobile-hide" to="/about">
        Про нас
      </NavLink>
    </React.Fragment>
  );
};

export default MainLinks;
