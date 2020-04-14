import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  // const [adverts, setAdverts] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [type, setType] = useState('all');
  const [gender, setGender] = useState('all');
  const [status, setStatus] = useState('all');

  const setSearchParams = (e) => {
    const paramName = e.target.name;
    switch (paramName) {
      case 'type':
        setType(e.target.value);
        break;
      case 'gender':
        setGender(e.target.value);
        break;
      case 'status':
        setStatus(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
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
                <select name="type" id="" onChange={setSearchParams}>
                  <option value="all">Тип (усі)</option>
                  <option value="cat">Коти</option>
                  <option value="dog">Собаки</option>
                  <option value="other">Інші</option>
                </select>
                <select name="gender" id="" onChange={setSearchParams}>
                  <option value="all">Стать (усі)</option>
                  <option value="he">Він</option>
                  <option value="she">Вона</option>
                </select>
                <select name="status" id="" onChange={setSearchParams}>
                  <option value="all">Статус (усі)</option>
                  <option value="escaped">Зниклі</option>
                  <option value="founded">Знайдені</option>
                </select>
              </div>

              <NavLink
                to={'/search?type=' + type + '&gender=' + gender + '&status=' + status}
                style={{
                  display: 'block',
                  width: '100%',
                  textDecoration: 'none',
                  color: '#fff',
                  margin: 0,
                  padding: 0,
                }}
              >
                <button className="search-button">Шукати</button>
              </NavLink>
            </div>
            <div className="call-to-action">
              <NavLink to="/advert/add">
                <button>Подати оголошення</button>
              </NavLink>
              <button>Придбати нашийник</button>
            </div>
          </section>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
