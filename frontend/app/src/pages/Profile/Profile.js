import React, { useState, useEffect, useContext } from 'react';
import Wrapper from '../../shared/components/Wrapper/Wrapper';
import SearchBlock from '../../shared/components/SearchBlock/SearchBlock';
import Section from '../../shared/components/Section/Section';
import axios from 'axios';
import AdvertItem from './components/AdvertItem';

import { AuthContext } from '../../shared/context/auth-context';

import './Profile.css';
import Button from '../../shared/components/UI/Button/Button';

const Profile = () => {
  const [adverts, setAdverts] = useState(null);
  const [username, setUsername] = useState('Завантажую...');

  const deleteAdvertHandler = (e) => {
    const advertId = e.target.id;
    console.log(advertId);
    console.log(e.target.parentNode);
    // try {
    //   const advertId = e.target.id;
    //   console.log(advertId);
    //   let response = await axios.delete('http://localhost:5000/advert/' + advertId);
    //   const data = response.data;
    //   const adverts = data.adverts.map((item) => {
    //     return (
    //       <AdvertItem
    //         key={item._id}
    //         id={item._id}
    //         name={item.name}
    //         image={item.images}
    //         status={item.status}
    //         gender={item.gender}
    //         type={item.type}
    //         onDelete={deleteAdvertHandler}
    //       />
    //     );
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const fetchProfile = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem('userData')).userId;
      let response = await axios.get('http://localhost:5000/profile/' + userId);
      const data = response.data;
      const adverts = data.adverts.map((item) => {
        return (
          <AdvertItem
            key={item._id}
            name={item.name}
            image={item.images}
            status={item.status}
            gender={item.gender}
            type={item.type}
            delete={deleteAdvertHandler}
          />
        );
      });
      setAdverts(adverts);
      setUsername(data.username);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  const auth = useContext(AuthContext);

  return (
    <main className="container">
      <SearchBlock />
      <Wrapper>
        <Section title="Профіль" flex>
          <div className="profile__user">
            <h2 className="profile-block__title">{username}</h2>
            <img
              className="user__avatar"
              src="https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
            />
            <Button classNames="button-main user__edit" text="Редагувати" />
            <Button
              classNames="button-main user__edit"
              text="Вихід"
              type="submit"
              submit={auth.logout}
            />
          </div>
          <div className="profile__adverts">
            <h2>Мої оголошення</h2>
            <div className="profile-adverts__list">{adverts}</div>
          </div>
        </Section>
      </Wrapper>
    </main>
  );
};

export default Profile;
