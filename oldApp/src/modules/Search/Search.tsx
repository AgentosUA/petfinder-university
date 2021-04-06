import React, { useState } from 'react';
import { PostCard } from './components';
import { Section } from '../../core';
import styles from './Search.module.scss';

const Search: React.FC = () => {
  const [loading, setLoading] = useState(false)



  return (
    <Section display='block'>
      <h1 className={styles.searchTitle}>{loading ? 'Завантаження...' : 'Результати пошуку'}</h1>
      <div className={styles.posts}>
        <PostCard
          imgUrl='https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9'
          city='Луцьк'
          date='30.01.2021'
          name='Мангуст'
          status='Знайдено'
          type='Коти'
        />
        <PostCard
          imgUrl='https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9'
          city='Луцьк'
          date='30.01.2021'
          name='Мангуст'
          status='Знайдено'
          type='Коти'
        />
        <PostCard
          imgUrl='https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9'
          city='Луцьк'
          date='30.01.2021'
          name='Мангуст'
          status='Знайдено'
          type='Коти'
        />
        <PostCard
          imgUrl='https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9'
          city='Луцьк'
          date='30.01.2021'
          name='Мангуст'
          status='Знайдено'
          type='Коти'
        />
      </div>

    </Section>
  );
};

export { Search };
