import Head from 'next/head';
import Router from "next/router";
import { Fragment, useEffect, useState } from 'react';
import { Container, Layout, MainSearch, Post } from '@components';

import styles from './login.module.scss';

import axios from 'axios';
import { Button } from '@core';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { login } from '@store';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type LoginProps = {
  redirect?: string;
}

export const Login = ({ redirect }: LoginProps) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().required('Введіть пошту!').email('Невірний формат пошти!'),
    password: Yup.string().required('Введіть пароль!')
  })

  const { handleSubmit, handleChange, isSubmitting, errors, setErrors, values, isValid } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async ({ email, password }) => {
      try {
        const { data: { token, expiresIn } } = await axios({
          method: 'POST',
          url: `${process.env.API}/auth/login`,
          data: {
            email,
            password: String(password)
          }
        })

        dispatch(login({ token, expiresIn }))
        if (redirect) {
          Router.push(redirect);
        }

      } catch (error) {
        if (error?.response?.status === 400) {
          setErrors({ email: 'Невірна пошта або пароль!' });
          return;
        } else {
          setErrors({ email: 'Сталась критична помилка, спробуйте ще раз!' });
        }
      }
    }
  });

  return (
    !isSubmitting ? (<Fragment><h2 className={styles.title}>Авторизація</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {!isValid && <ul className={styles.error}>
          {Object.entries(errors).map(([key, value]) => {
            return <li>{value}</li>
          })}
        </ul>}
        <input type='text' name='email' placeholder='Пошта' onChange={handleChange} value={values.email} />
        <input type='password' name='password' placeholder='Пароль' onChange={handleChange} value={values.password} />
        <Button type='submit' disabled={isSubmitting}>Увійти</Button>
        <div className={styles.help}>
          <Link href='/restore-password'>Забули пароль?</Link>
          <Link href='/signup'>Немає облікового запису?</Link>
        </div>
      </form></Fragment>) : <img src='loading_light.gif' alt='preloader' className={styles.preloader} />
  )


};
