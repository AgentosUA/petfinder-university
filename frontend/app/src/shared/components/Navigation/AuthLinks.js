import React from 'react';

import { NavLink } from 'react-router-dom';

const AuthLinks = () => {
  return (
    <React.Fragment>
      <NavLink className="navigation__link" to="/">
        Увійти
      </NavLink>
      <NavLink className="navigation__link" to="/search?type=all&gender=all&status=escaped">
        Реєстрація
      </NavLink>
    </React.Fragment>
  );
};

export default AuthLinks;
