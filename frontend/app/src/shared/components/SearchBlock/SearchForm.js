import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../UI/Button/Button';
import './SearchForm.css';

const Form = () => {
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
      <NavLink to={`/search?type=${type}&gender=${gender}&status=${status}`}>
        <Button text="Шукати" styles="main" />
      </NavLink>
    </form>
  );
};

export default Form;
