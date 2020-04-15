import React from 'react';

import './CircleCard.css';

const CircleCard = (props) => {
  return (
    <div className="circle-card">
      <h2 className="circle-card__title">{props.title}</h2>
      <div className="circle-card__text">{props.text}</div>
    </div>
  );
};

export default CircleCard;
