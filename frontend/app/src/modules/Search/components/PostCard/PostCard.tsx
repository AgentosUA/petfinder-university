import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../core';

import styles from './PostCard.module.scss';

type PostCardProps = {
  imgUrl: string;
  name: string;
  status: string;
  type: string;
  city: string;
  date: string;
}

const PostCard: React.FC<PostCardProps> = ({ imgUrl, name, status, type, city, date }) => {
  return (
    <div className={styles.PostCard}>
      <div className={styles.PostCardImg}>
        <img src={imgUrl} alt={name} />
      </div>
      <div className={styles.PostCardName}>
        <h3>{name}</h3>
      </div>
      <div className={styles.PostCardDescription}>
        <p><b>Статус:</b> {status}</p>
        <p><b>Тип:</b> {type}</p>
        <p><b>Місто:</b> {city}</p>
        <p><b>Дата:</b> {date}</p>
      </div>
      <Link to='/' className={styles.PostCardButton}>Переглянути</Link>
    </div>
  );
};

export { PostCard };
