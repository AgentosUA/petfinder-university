import React, { useState, useEffect, useContext } from 'react';
import DatePicker from 'react-datepicker';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Wrapper from '../../shared/components/Wrapper/Wrapper';
import Section from '../../shared/components/Section/Section';
import Advert from '../../shared/components/Advert/Advert';
import Button from '../../shared/components/UI/Button/Button';

import { AuthContext } from '../../shared/context/auth-context';

import 'react-datepicker/dist/react-datepicker.css';
import './Search.css';
import Pagination from './Pagination';

const Search = ({ match, location }) => {
  let urlParams = new URLSearchParams(window.location.search);

  const [startDate, setStartDate] = useState(null);

  const [adverts, setAdverts] = useState(null);
  const [type, setType] = useState('all');
  const [gender, setGender] = useState('all');
  const [status, setStatus] = useState('all');
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(1);
  const [currentPage, setCurrentPage] = useState(urlParams.get('page'));
  const [title, setTitle] = useState('Завантажуємо');

  const getAdverts = async () => {
    try {
      setTitle('Завантажуємо...');
      setCurrentPage(urlParams.get('page'));
      setAdverts(null);
      let response = await axios.get(
        'http://localhost:5000/adverts' + window.location.search
      );

      if (response.data.adverts.length > 0) {
        const data = response.data.adverts.map((item) => {
          return (
            <Advert
              key={item._id}
              id={item._id}
              src={item.images}
              status={item.status}
              type={item.type}
              gender={item.gender}
              name={item.name}
              date={item.date}
            />
          );
        });
        setLimit(response.data.limit);
        setAdverts(data);
        setTitle('Результати пошуку');
        setTotalCount(response.data.count);
      } else {
        setTitle('За вашим запитом нічого не знайдено');
      }
    } catch (error) {
      setTitle('За вашим запитом нічого не знайдено');
    }
  };

  useEffect(() => {
    getAdverts();
  }, [location, currentPage]);

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

  const auth = useContext(AuthContext);

  let askToCreate;

  if (auth.isLoggedIn) {
    askToCreate = (
      <React.Fragment>
        {adverts != null && adverts.length > 0 ? (
          <Section
            title="Не знайшли кого шукали?"
            subtitle="Час створити оголошення!"
            flex
          >
            <NavLink to="/adverts/new">
              <Button text="Додати оголошення" styles="second" />
            </NavLink>
          </Section>
        ) : (
          ''
        )}
      </React.Fragment>
    );
  } else {
    askToCreate = (
      <React.Fragment>
        {adverts != null && adverts.length > 0 ? (
          <Section
            title="Не знайшли кого шукали?"
            subtitle="Увійдіть, щоб створити оголошення!"
            flex
          >
            <NavLink to="/login">
              <Button text="Вхід" styles="second" />
            </NavLink>
            <NavLink to="/signup">
              <Button text="Реєстрація" styles="second" />
            </NavLink>
          </Section>
        ) : (
          ''
        )}
      </React.Fragment>
    );
  }

  return (
    <main className="container">
      <Wrapper>
        <Section title={title} className="search-container" flex>
          <div className="search-results">{adverts}</div>
          <div className="filter-block">
            <div className="search-inputs">
              <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                status={status}
                gender={gender}
                type={type}
                limit={limit}
              />
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
                to={`/search?status=${status}&gender=${gender}&type=${type}&page=${currentPage}`}
              >
                <button className="search-button">Шукати</button>
              </NavLink>
            </div>
          </div>
        </Section>
        {askToCreate}
      </Wrapper>
    </main>
  );
};

export default Search;
