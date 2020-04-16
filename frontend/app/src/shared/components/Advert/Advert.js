import React, { Component } from 'react';

import './Advert.css';

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
      status = 'Зникі';
      break;
    case 'founded':
      status = 'Знайдені';
      break;
    default:
      status = 'Невідомо';
      break;
  }
  return (
    <div className="advert">
      <img src={props.src} alt={props.name} />
      <h3>{props.name}</h3>

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
        <span>Опис: </span>
        {props.description}
      </p>
      <br />
    </div>
  );
};

export default Advert;
