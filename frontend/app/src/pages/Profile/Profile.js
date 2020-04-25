import React from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from '../../shared/components/Wrapper/Wrapper';
import SearchBlock from '../../shared/components/SearchBlock/SearchBlock';
import Section from '../../shared/components/Section/Section';

import './Profile.css';
import Button from '../../shared/components/UI/Button/Button';

const Profile = () => {
  return (
    <main className="container">
      <SearchBlock />
      <Wrapper>
        <Section title="Профіль" flex>
          <div className="profile__user">
            <h2 className="profile-block__title">Іван Іванов</h2>
            <img
              className="user__avatar"
              src="https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
            />
            <Button classNames="button-main user__edit" text="Редагувати" />
            <Button classNames="button-main user__edit" text="Вийти" />
          </div>
          <div className="profile__adverts">
            <h2>Мої оголошення</h2>
            <div className="profile-adverts__list">
              <div className="profile-adverts__item">
                <div className="profile__left-block">
                  <h3 className="profile-block__title">Name</h3>
                  <img
                    className="advert__avatar"
                    src="https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
                    alt="avatar"
                  />
                  <Button
                    classNames="button-second user__edit"
                    text="Редагувати"
                  />
                  <Button
                    classNames="button-second user__edit"
                    text="Видалити"
                  />
                </div>
                <div className="item__description"></div>
              </div>
            </div>
          </div>
        </Section>
      </Wrapper>
    </main>
  );
};

export default Profile;
