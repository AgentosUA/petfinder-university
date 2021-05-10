import { AnimalGender, AnimalStatus, AnimalType } from '@models';
import Link from 'next/link';

import styles from './post.module.scss';

const Post = ({ id, name, type, gender, status, city, date, imgUrl }) => {

  const generatedDate = new Date(date);
  const day = generatedDate.getDate();
  const month = generatedDate.getMonth() + 1;
  const year = generatedDate.getFullYear();

  return (
    <div className={styles.post}>
      <img src={imgUrl} className={styles.image} alt='animal' />
      <h3 className={styles.name}>{name}</h3>
      <ul className={styles.details}>
        <li><b>Тип:</b> {AnimalType[type]}</li>
        <li><b>Статус:</b> {AnimalStatus[status]}</li>
        <li><b>Стать:</b> {AnimalGender[gender]}</li>
        <li><b>Місто:</b> {city}</li>
        <li><b>Дата:</b> {String(day).length > 1 ? day : `0${day}`}.{String(month).length > 1 ? month : `0${month}`}.{year}</li>
      </ul>
      <Link href={`/posts/${id}`}>
        <button className={styles.button}>Переглянути</button>
      </Link>
    </div>
  );
};

export { Post };
