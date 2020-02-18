import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

class Header extends Component {
  state = {
    type: 'all',
    gender: 'all',
    status: 'all',
    old: 'all'
  };

  setSearchParams(e) {
    const paramName = e.target.name;
    switch (paramName) {
      case 'type':
        this.setState({ type: e.target.value });
        break;
      case 'gender':
        this.setState({ gender: e.target.value });
        break;
      case 'status':
        this.setState({ status: e.target.value });
        break;
      case 'old':
        this.setState({ old: e.target.value });
        break;
      default:
        break;
    }
  }

  render() {
    this.setSearchParams = this.setSearchParams.bind(this);
    return (
      <div>
        <header>
          <div className="wrapper">
            <section className="top-nav">
              <Logo />
              <Navigation />
            </section>
            <section className="header-action">
              <div className="header-title">
                <h2>
                  <span>Pet </span> Finder
                </h2>
                <h3>База ваших улюбленців</h3>
              </div>
              <div className="search-form">
                <div className="search-inputs">
                  <select
                    ref="type"
                    name="type"
                    id=""
                    onChange={this.setSearchParams}
                  >
                    <option value="all">Тип (усі)</option>
                    <option value="cats">Коти</option>
                    <option value="dogs">Собаки</option>
                    <option value="other">Інші</option>
                  </select>
                  <select
                    ref="gender"
                    name="gender"
                    id=""
                    onChange={this.setSearchParams}
                  >
                    <option value="all">Стать (усі)</option>
                    <option value="he">Він</option>
                    <option value="she">Вона</option>
                  </select>
                  <select
                    ref="status"
                    name="status"
                    id=""
                    onChange={this.setSearchParams}
                  >
                    <option value="all">Статус (усі)</option>
                    <option value="escaped">Зниклі</option>
                    <option value="founded">Знайдені</option>
                  </select>
                  <input
                    ref="old"
                    name="old"
                    type="number"
                    placeholder="Вік"
                    min="0"
                    max="100"
                    onChange={this.setSearchParams}
                  />
                </div>

                <NavLink
                  to={
                    '/search?type=' +
                    this.state.type +
                    '&gender=' +
                    this.state.gender +
                    '&status=' +
                    this.state.status +
                    '&old=' +
                    this.state.old
                  }
                  style={{
                    display: 'block',
                    width: '100%',
                    textDecoration: 'none',
                    color: '#fff',
                    margin: 0,
                    padding: 0
                  }}
                >
                  <button className="search-button">Шукати</button>
                </NavLink>
              </div>
              <div className="call-to-action">
                <button>Подати оголошення</button>
                <button>Придбати нашийник</button>
              </div>
            </section>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
