import React from 'react';

import Button from '../UI/Button/Button';

import './Advert.css';
import { NavLink } from 'react-router-dom';

const Advert = (props) => {
  let breed;
  if (props.breed) {
    breed = (
      <p>
        <span>Порода: </span>
        {props.breed}
      </p>
    );
  }
  let gender;
  let status;
  let type;
  switch (props.gender) {
    case 'he':
      gender = 'Він';
      break;
    case 'she':
      gender = 'Вона';
      break;
    default:
      gender = 'Невідомо';
      break;
  }

  switch (props.status) {
    case 'escaped':
      status = 'Зниклі';
      break;
    case 'founded':
      status = 'Знайдені';
      break;
    default:
      status = 'Невідомо';
      break;
  }

  switch (props.type) {
    case 'cat':
      type = 'Коти';
      break;
    case 'dog':
      type = 'Собаки';
      break;
    default:
      type = 'Невідомо';
      break;
  }
  return (
    <div className="advert">
      <img src={props.src} alt={props.name} />
      <h3>{props.name}</h3>
      <div className="advert__text">
        <p>
          <span>Тип: </span>
          {type}
        </p>
        <p>
          <span>Стать: </span>
          {gender}
        </p>
        <p>
          <span>Статус: </span>
          {status}
        </p>
        {breed}
        <p>
          <span>Дата: </span>
          {props.date}
        </p>
      </div>
      <NavLink to={`/advert/${props.id}`} className="">
        <Button styles="main" text="Переглянути" className="test" />
      </NavLink>
    </div>
  );
};

export default Advert;
