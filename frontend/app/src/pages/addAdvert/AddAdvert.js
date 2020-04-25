import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import Wrapper from '../../shared/components/Wrapper/Wrapper';
import Section from '../../shared/components/Section/Section';
import Button from '../../shared/components/UI/Button/Button';
import Form from '../../shared/components/UI/Form/Form';

import 'react-datepicker/dist/react-datepicker.css';

const AddAdvert = (props) => {
  const [startDate, setStartDate] = useState(null);

  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [repassword, setRePassword] = useState(null);

  const setInputDataToState = (e) => {
    const dataType = e.target.name;
    switch (dataType) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'repassword':
        setRePassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const PostSignUp = async (e) => {
    e.preventDefault();
    console.log('Logged in!');
    const data = JSON.stringify({
      email,
      password,
    });
    const res = await axios.post('http://localhost:5000/login', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
  };

  return (
    <main className="container">
      <Wrapper>
        <Section title="Створити оголошення" className="search-container" flex>
          <Form className="login-form">
            <label htmlFor="type">Тип тваринки</label>
            <select name="type" id="" onChange={setInputDataToState}>
              <option value="all">Тип (усі)</option>
              <option value="cat">Коти</option>
              <option value="dog">Собаки</option>
              <option value="other">Інші</option>
            </select>
            <label htmlFor="gender">Стать</label>
            <select name="gender" id="" onChange={setInputDataToState}>
              <option value="all">Стать (усі)</option>
              <option value="he">Він</option>
              <option value="she">Вона</option>
            </select>
            <label htmlFor="status">Статус</label>
            <select name="status" id="" onChange={setInputDataToState}>
              <option value="all">Статус (усі)</option>
              <option value="escaped">Зниклі</option>
              <option value="founded">Знайдені</option>
            </select>
            <label htmlFor="date">Дата зникнення/знаходження</label>
            <DatePicker
              selected={startDate}
              placeholderText="Коли зник / знайшли"
              dateFormat="dd/MM/yyyy"
              htmlFor="date"
              isClearable
              strictParsing
              todayButton="Сьогодні"
              onChange={(date) => setStartDate(date)}
            />
            <Button
              styles="main"
              type="submit"
              text="Увійти"
              submit={PostSignUp}
            />
          </Form>
        </Section>
      </Wrapper>
    </main>
  );
};

export default AddAdvert;
