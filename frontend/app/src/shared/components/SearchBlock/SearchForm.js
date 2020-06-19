import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { NavLink } from 'react-router-dom';

import Button from '../UI/Button/Button';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchForm.css';

const Form = () => {
  const [type, setType] = useState('all');
  const [gender, setGender] = useState('all');
  const [status, setStatus] = useState('all');
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    console.log(new Date(startDate).getUTCDate() + 1);
  }, [startDate]);

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
    <form className="header__search__form">
      <select name="type" id={type} onChange={setSearchParams}>
        <option value="all">Тип (усі)</option>
        <option value="cat">Коти</option>
        <option value="dog">Собаки</option>
        <option value="other">Інші</option>
      </select>
      <select name="gender" id={gender} onChange={setSearchParams}>
        <option value="all">Стать (усі)</option>
        <option value="he">Він</option>
        <option value="she">Вона</option>
      </select>
      <select name="status" id={status} onChange={setSearchParams}>
        <option value="all">Статус (усі)</option>
        <option value="escaped">Зниклі</option>
        <option value="founded">Знайдені</option>
      </select>
      <DatePicker
        selected={startDate}
        placeholderText="Оберіть дату"
        dateFormat="dd/MM/yyyy"
        // isClearable
        strictParsing
        todayButton="Сьогодні"
        onChange={(date) => setStartDate(date)}
      />
      <NavLink
        to={`/search?type=${type}&gender=${gender}&status=${status}${
          startDate ? '&date=' + startDate.getUTCDate() + 1 : ''
        }&page=1`}
      >
        <Button type="button" text="Шукати" styles="main" />
      </NavLink>
    </form>
  );
};

export default Form;
