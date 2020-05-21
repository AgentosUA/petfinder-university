import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import Wrapper from '../../shared/components/Wrapper/Wrapper';
import Section from '../../shared/components/Section/Section';
import Button from '../../shared/components/UI/Button/Button';
import Form from '../../shared/components/UI/Form/Form';
import ImagePicker from '../../shared/components/UI/ImagePicker/ImagePicker';

import 'react-datepicker/dist/react-datepicker.css';

const AddAdvert = (props) => {
  const [startDate, setStartDate] = useState(null);

  const [type, setType] = useState(null);
  const [name, setName] = useState(null);
  const [gender, setGender] = useState(null);

  const setInputDataToState = (e) => {
    const dataType = e.target.name;
    switch (dataType) {
      case 'type':
        setType(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      case 'gender':
        setGender(e.target.value);
        break;
      default:
        break;
    }
  };

  // const pickedHandler = (e) => {};

  const PostNewAdvert = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.set('type', type);
    formData.set('gender', gender);
    formData.set('name', name);
    formData.append('image', name);
    const myImage = document.getElementById('formImage');
    console.log(myImage.target.value);
    // const res = await axios.post('http://localhost:5000/advert/new', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     'Authorization:':
    //       'Bearer' + JSON.parse(localStorage.getItem('userData')).token,
    //   },
    // });
    // console.log(res);
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
            <label htmlFor="image">Зображення</label>
            <ImagePicker />
            <Button
              styles="main"
              type="submit"
              text="Створити оголошення"
              submit={PostNewAdvert}
            />
          </Form>
        </Section>
      </Wrapper>
    </main>
  );
};

export default AddAdvert;
