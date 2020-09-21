import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import Backdrop from '../UI/Backdrop/Backdrop';

const Sidebar = (props) => {
  if (props.show) {
    const content = (
      <aside className="sidebar">
        <Backdrop onClick={props.onCancel} />
        <header>Меню</header>
        <NavLink className="navigation__link" to="/">
          Головна
        </NavLink>
        <NavLink
          className="navigation__link"
          to="/search?type=all&gender=all&status=escaped"
        >
          Зниклі
        </NavLink>
        <NavLink
          className="navigation__link"
          to="/search?type=all&gender=all&status=founded"
        >
          Знайдені
        </NavLink>
        <NavLink className="navigation__link" to="/about">
          Про нас
        </NavLink>
        <button className="second-button">Закрити</button>
      </aside>
    );
    return ReactDOM.createPortal(
      content,
      document.getElementById('sidebar-hook')
    );
  } else {
    const content = '';
    return ReactDOM.createPortal(
      content,
      document.getElementById('sidebar-hook')
    );
  }
};

export default Sidebar;
