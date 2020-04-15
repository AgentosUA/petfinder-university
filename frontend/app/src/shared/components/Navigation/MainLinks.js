import React from 'react';

import { NavLink } from 'react-router-dom';

const MainLinks = () => {
  return (
    <React.Fragment>
      <NavLink className="navigation__link" to="/">
        Головна
      </NavLink>
      <NavLink className="navigation__link" to="/search?type=all&gender=all&status=escaped">
        Зниклі
      </NavLink>
      <NavLink className="navigation__link" to="/search?type=all&gender=all&status=founded">
        Знайдені
      </NavLink>
      <NavLink className="navigation__link" to="/about">
        Про нас
      </NavLink>
    </React.Fragment>
  );
};

export default MainLinks;
