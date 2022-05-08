import Head from 'next/head';
import Router from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { Container, Layout, Post } from '@components';

import styles from './login.module.scss';

import axios from 'axios';
import { Button } from '@core';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authService } from '@api';
import { auth } from 'store/auth';
import { observer } from 'mobx-react-lite';

type LoginProps = {
  redirect?: string;
};

export const Login = observer(({ redirect }: LoginProps) => {
  // const dispatch = useDispatch();
  const { isLoggedIn } = auth;

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Введіть пошту!')
      .email('Невірний формат пошти!'),
    password: Yup.string().required('Введіть пароль!')
  });

  const {
    handleSubmit,
    handleChange,
    isSubmitting,
    errors,
    setErrors,
    values,
    isValid
  } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (data) => auth.login({ ...data, setErrors })
  });

  useEffect(() => {
    if (isLoggedIn) {
      Router.push(redirect);
    }
  }, [isLoggedIn]);

  return !isSubmitting ? (
    <Fragment>
      <h2 className={styles.title}>Авторизація</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {!isValid && (
          <ul className={styles.error}>
            {Object.entries(errors).map(([key, value]) => {
              return <li key={key}>{value}</li>;
            })}
          </ul>
        )}
        <input
          type='text'
          name='email'
          placeholder='Пошта'
          onChange={handleChange}
          value={values.email}
        />
        <input
          type='password'
          name='password'
          placeholder='Пароль'
          onChange={handleChange}
          value={values.password}
        />
        <Button fullWidth type='submit' disabled={isSubmitting}>
          Увійти
        </Button>
        <div className={styles.help}>
          {/* <Link href='/restore-password'>Забули пароль?</Link> */}
          <Link href='/signup'>Немає облікового запису?</Link>
        </div>
      </form>
    </Fragment>
  ) : (
    <img src='loading_light.gif' alt='preloader' className={styles.preloader} />
  );
});
