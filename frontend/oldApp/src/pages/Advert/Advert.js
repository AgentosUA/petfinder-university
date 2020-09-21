import React, { useState, useEffect } from 'react';
import Wrapper from '../../shared/components/Wrapper/Wrapper';
import SearchBlock from '../../shared/components/SearchBlock/SearchBlock';
import Section from '../../shared/components/Section/Section';

import axios from 'axios';

// import './Advert.css';

const Advert = () => {
  const [title, setTitle] = useState('Завантажуємо');
  const [advert, setAdvert] = useState(null);
  const getAdvert = async () => {
    try {
      setTitle('Завантажуємо...');
      let response = await axios.get(
        'http://localhost:5000/advert/' + window.location.pathname.split('/')[2]
      );
      console.log(response);
      if (response.data.advert) {
        setAdvert(response.data.advert);
        setTitle(response.data.advert.name);
      } else {
        setTitle('Оголошення не знайдено!');
      }
    } catch (err) {
      console.log(err);
      setTitle('Оголошення не знайдено!');
    }
  };
  useEffect(() => {
    getAdvert();
  }, []);

  return (
    <main className="container">
      <SearchBlock />
      <Wrapper>
        <Section title={title}>
          {advert ? (
            <div className="advert">
              <img src={advert.images} alt={advert.name} />
              <h3>{advert.name}</h3>
              <div className="advert__text">
                <p>
                  <span>Тип: </span>
                  {advert.type}
                </p>
                <p>
                  <span>Стать: </span>
                  {advert.gender}
                </p>
                <p>
                  <span>Статус: </span>
                  {advert.status}
                </p>
                <p>
                  <span>Дата: </span>
                  {advert.date}
                </p>
              </div>
            </div>
          ) : null}
        </Section>
      </Wrapper>
    </main>
  );
};

export default Advert;
