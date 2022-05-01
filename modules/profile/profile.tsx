import Head from 'next/head';
import { Container, Layout, MainSearch, Button } from '@components';
import { Fragment, useEffect, useState } from 'react';
import { profileService } from '@api';

import styles from './profile.module.scss';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { logout, State } from '@store';

const Profile = ({
  name,
  posts = [],
  pets = [],
  imageUrl = '',
  phone = ''
}) => {
  const dispatch = useDispatch();

  const onLogOutClick = () => {
    dispatch(logout());
    Router.push('/');
  };

  return (
    <Fragment>
      <div className={styles.user}>
        <img src={imageUrl || '/avatar.png'} alt='avatar' />
        <div className={styles.description}>
          <h3 className={styles.username}>{name}</h3>
          <p>
            <b>Телефон: </b>
            {phone}
          </p>
          <p>
            <b>Оголошень: </b>
            {posts.length}
          </p>
          <p>
            <b>Улюбленців: </b>
            {pets.length}
          </p>
        </div>
        {/* <Button theme='light'>Редагувати</Button> */}
        <Button onClick={onLogOutClick}>Вийти</Button>
      </div>
    </Fragment>
  );
};

export { Profile };
