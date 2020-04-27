import React from 'react';

import Button from '../../../shared/components/UI/Button/Button';

const AdvertItem = (props) => {
  return (
    <div className="profile-adverts__item">
      <div className="profile__left-block">
        <h3 className="profile-block__title">{props.name}</h3>
        <img className="advert__avatar" src={props.image} alt={props.name} />
        <Button
          classNames="button-second user__edit"
          text="Редагувати"
          onClick={props.editAdvertHandler}
        />
        <Button
          classNames="button-second user__edit"
          text="Видалити"
          onClick={props.deleteAdvertHandler}
        />
      </div>
      <div className="item__description">
        <span>Тип:</span>
        <span>{props.type}</span>
        <span>Стать:</span>
        <span>{props.gender}</span>
        <span>Статус:</span>
        <span>{props.status}</span>
        <span>Опис:</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default AdvertItem;
