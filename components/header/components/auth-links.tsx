import { logout, State } from '@store';
import Link from 'next/link';
import Router from 'next/router';

import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AuthLinks = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: State) => state.general)

  const onLogOutClick = () => {
    dispatch(logout());
    Router.push('/');
  }

  if (isLoggedIn) {
    return (
      <Fragment>
        <Link href='/profile'>Мій профіль</Link>
        <a onClick={onLogOutClick}>Вихід</a>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Link href='/login'>Увійти</Link>
      <Link href='/signup'>Реєстрація</Link>
    </Fragment>
  )
};

export { AuthLinks };
