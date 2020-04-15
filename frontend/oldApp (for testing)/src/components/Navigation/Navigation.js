import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from '../Wrapper/Wrapper';

class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <nav className="main-nav">
          <NavLink to="/">Головна</NavLink>
          <NavLink to="/search?type=all&gender=all&status=escaped&old=all">Зниклі</NavLink>
          <NavLink to="/search?type=all&gender=all&status=founded&old=all">Знайдені</NavLink>
          <NavLink to="/about">Про нас</NavLink>
        </nav>
        <nav className="profile-nav">
          {/* <!-- <img src="img/ava.jpg" class="avatar" /> --> */}
          <NavLink to="/login" className="login-btn">
            Увійти
          </NavLink>
          <NavLink to="/signup" className="signup-btn">
            Реєстрація
          </NavLink>
        </nav>
      </Wrapper>
    );
  }
}

export default Navigation;
