import Head from 'next/head';
import Router from "next/router";
import { Fragment, useEffect, useState } from 'react';
import { Container, Layout, MainSearch, Post } from '@components';

import styles from './index.module.scss';

import axios from 'axios';
import { Button } from '@core';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { login } from '@store';
import { Form, useFormik } from 'formik';
import * as Yup from 'yup';

export default function Search() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().required('Введіть пошту!').email('Невірний формат пошти!'),
    password: Yup.string().required('Введіть пароль!')
  })

  const { handleSubmit, handleChange, isSubmitting, errors, setErrors, values } = useFormik({
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
        Router.push('/');
      } catch (error) {
        console.log(error);
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
    <Layout>
      <Head>
        <title>Petfinder | Знайти свою тваринку!</title>
      </Head>
      <MainSearch />
      <Container>
        <h2 className={styles.title}>Авторизація</h2>
        <form className={styles.form} onClick={handleSubmit}>
          <span className={styles.error}>{errors.email} {errors.password}</span>
          <input type='text' name='email' placeholder='Пошта' onChange={handleChange} value={values.email} />
          <input type='password' name='password' placeholder='Пароль' onChange={handleChange} value={values.password} />
          <Button type='submit' disabled={isSubmitting}>Увійти</Button>
          <div className={styles.help}>
            <Link href='/restore-password'>Забули пароль?</Link>
            <Link href='/signup'>Немає облікового запису?</Link>
          </div>
        </form>
      </Container>
    </Layout>
  )
};
