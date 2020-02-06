import React, { Component } from 'react';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

class Header extends Component {
  render() {
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
                  <select name="" id="">
                    <option value="all">Тип (усі)</option>
                    <option value="cats">Коти</option>
                    <option value="dogs">Собаки</option>
                    <option value="other">Інші</option>
                  </select>
                  <select name="" id="">
                    <option value="status">Стать (усі)</option>
                    <option value="escaped">Він</option>
                    <option value="founded">Вона</option>
                  </select>
                  <select name="" id="">
                    <option value="status">Статус (усі)</option>
                    <option value="escaped">Зниклі</option>
                    <option value="founded">Знайдені</option>
                  </select>
                  <input type="number" placeholder="Вік" min="0" max="100" />
                </div>
                <button className="search-button">Застосувати</button>
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
