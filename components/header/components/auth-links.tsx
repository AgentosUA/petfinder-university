// import {  } from '@store';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import Router from 'next/router';

import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from 'store/auth';

const AuthLinks = observer((props) => {
  // const dispatch = useDispatch();
  const { isLoggedIn } = auth;

  const onLogOutClick = () => {
    auth.logout();
    Router.push('/');
  };

  if (isLoggedIn) {
    return (
      <Fragment>
        <Link href='/profile'>Мій профіль</Link>
        <a onClick={onLogOutClick}>Вихід</a>
        <Link href='/test'>Тест</Link>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Link href='/login'>Увійти</Link>
      <Link href='/signup'>Реєстрація</Link>
      <Link href='/test'>Тест</Link>
    </Fragment>
  );
});

export { AuthLinks };
