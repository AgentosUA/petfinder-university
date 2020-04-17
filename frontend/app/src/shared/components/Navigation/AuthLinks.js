import React from 'react';

import { NavLink } from 'react-router-dom';

const AuthLinks = () => {
  return (
    <React.Fragment>
      <NavLink className="navigation__link" to="/login">
        Увійти
      </NavLink>
      <NavLink className="navigation__link" to="/signup">
        Реєстрація
      </NavLink>
    </React.Fragment>
  );
};

export default AuthLinks;
