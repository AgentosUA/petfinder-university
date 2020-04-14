import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Advert from '../../components/Advert/Advert';

const SearchPage = (props) => {
  const [adverts, setAdverts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [type, setType] = useState('all');
  const [gender, setGender] = useState('all');
  const [status, setStatus] = useState('all');
  const [error, setError] = useState({ status: false, message: '' });
  const [query, setQuery] = useState(window.location.search);

  const getAdverts = async () => {
    if (!isLoaded || query !== window.location.search) {
      try {
        console.log(query);
        console.log(window.location.search);
        let response = await axios.get('/adverts' + query);
        if (response.status === 200) {
          setIsLoaded(true);
          const data = response.data.adverts.map((item) => {
            console.log(item.images[0]);
            return (
              <Advert
                key={item._id}
                src={item.images[0]}
                name={item.name}
                breed={item.breed}
                description={item.description}
              />
            );
          });
          setAdverts(data);
        } else {
          setIsLoaded(true);
        }
      } catch (err) {
        console.log(err);
        setError(true);
      }
    }
  };

  useEffect(() => {
    getAdverts();
  }, [query]);

  const setSearchParams = (e) => {
    const paramName = e.target.name;
    switch (paramName) {
      case 'type':
        setType(e.target.value);
        setQuery(window.location.search);
        break;
      case 'gender':
        setGender(e.target.value);
        setQuery(window.location.search);
        break;
      case 'status':
        setStatus(e.target.value);
        setQuery(window.location.search);
        break;
      default:
        break;
    }
  };

  const title = () => {
    if (!isLoaded) {
      return 'Завантажуємо..';
    }

    if (isLoaded && !error.status) {
      return 'Результати пошуку';
    }
    if (isLoaded && adverts.length < 1) {
      console.log('LOL');
      return 'Не знайдено жодного оголошення';
    }
  };

  return (
    <main>
      <div className="wrapper">
        <section className="search">
          <h2>{title()}</h2>
          <nav>
            <a href="/">Назад</a>
            <a href="/">2</a>
            <a href="/">3</a>
            <a href="/">4</a>
            <a href="/">Вперед</a>
          </nav>
          <div className="search-block">
            <div className="search-result">{adverts}</div>
            <div className="search-filter">
              <h3>Фільтр</h3>
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
                <input
                  name="old"
                  type="number"
                  placeholder="Вік"
                  min="0"
                  max="100"
                  onChange={setSearchParams}
                />
              </div>
              <NavLink to={'/search?type=' + type + '&gender=' + gender + '&status=' + status}>
                <button className="search-button">Шукати</button>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SearchPage;
