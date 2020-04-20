import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Wrapper from '../../shared/components/Wrapper/Wrapper';
import Section from '../../shared/components/Section/Section';
import Advert from '../../shared/components/Advert/Advert';
import Button from '../../shared/components/UI/Button/Button';

import 'react-datepicker/dist/react-datepicker.css';
import './Search.css';

const Search = (props) => {
  const [startDate, setStartDate] = useState(null);

  const [adverts, setAdverts] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [type, setType] = useState('all');
  const [gender, setGender] = useState('all');
  const [status, setStatus] = useState('all');
  const [title, setTitle] = useState('Завантажуємо');
  const defaultQuery = `?status=${status}&gender=${gender}&type=${type}`;
  const [query, setQuery] = useState(defaultQuery);

  const getAdverts = async () => {
    if (!adverts || !isLoaded) {
      try {
        setTitle('Завантажуємо...');
        setIsLoaded(false);
        let response = await axios.get('/adverts' + window.location.search);
        if (response.data.adverts.length) {
          setIsLoaded(true);
          const data = response.data.adverts.map((item) => {
            return (
              <Advert
                key={item._id}
                src={item.images[0]}
                status={item.status}
                gender={item.gender}
                name={item.name}
                breed={item.breed}
                description={item.description}
              />
            );
          });
          setAdverts(data);
          setTitle('Результати пошуку');
        } else {
          setIsLoaded(true);
          setTitle('За вашим запитом нічого не знайдено');
        }
      } catch (err) {
        console.log(err);
        setIsLoaded(true);
        setTitle('За вашим запитом нічого не знайдено');
      }
    }
  };

  useEffect(() => {
    setQuery(defaultQuery);
  }, [type, gender, status]);

  useEffect(() => {
    if (!isLoaded) {
      getAdverts();
    }
  }, [adverts]);

  const setSearchParams = (e) => {
    const paramName = e.target.name;
    switch (paramName) {
      case 'type':
        setType(e.target.value);
        setQuery(defaultQuery);
        break;
      case 'gender':
        setGender(e.target.value);
        setQuery(defaultQuery);
        break;
      case 'status':
        setStatus(e.target.value);
        setQuery(defaultQuery);
        break;
      default:
        setQuery(defaultQuery);
        break;
    }
  };
  return (
    <main className="container">
      <Wrapper>
        <Section title={title} className="search-container" flex>
          <div className="search-results">{adverts}</div>
          <div className="filter-block">
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
              <DatePicker
                selected={startDate}
                placeholderText="Оберіть дату"
                dateFormat="dd/MM/yyyy"
                isClearable
                strictParsing
                todayButton="Сьогодні"
                onChange={(date) => setStartDate(date)}
              />
              <NavLink
                to={'/search' + query}
                onClick={() => {
                  setAdverts([]);
                  setIsLoaded(false);
                }}
              >
                <button className="search-button">Шукати</button>
              </NavLink>
            </div>
          </div>
        </Section>
        {adverts != null && adverts.length > 0 ? (
          <Section title="Не знайшли кого шукали?" subtitle="Час створити оголошення!" flex>
            <NavLink to="/adverts/new">
              <Button text="Додати оголошення" styles="second" />
            </NavLink>
          </Section>
        ) : (
          ''
        )}
      </Wrapper>
    </main>
  );
};

export default Search;
