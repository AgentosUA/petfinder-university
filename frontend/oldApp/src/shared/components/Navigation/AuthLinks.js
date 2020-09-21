import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';

const AuthLinks = () => {
  const auth = useContext(AuthContext);
  let links;
  if (auth.isLoggedIn) {
    links = (
      <React.Fragment>
        <NavLink className="navigation__link" to="/profile">
          Профіль
        </NavLink>
        <button className="navigation__link" onClick={auth.logout}>
          Вихід
        </button>
      </React.Fragment>
    );
  } else {
    links = (
      <React.Fragment>
        <NavLink className="navigation__link" to="/login">
          Увійти
        </NavLink>
        <NavLink className="navigation__link" to="/signup">
          Реєстрація
        </NavLink>
      </React.Fragment>
    );
  }
  return links;
};

export default AuthLinks;
