import Head from 'next/head';
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from 'react';
import { Container, Layout, MainSearch, Post } from '@components';

import styles from './index.module.scss';

import axios from 'axios';
import { Button } from '@core';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { login } from '@store';

export default function Search() {
  const dispatch = useDispatch();

  const onLogin = () => {
    // TODO - dispatch login action
  }

  return (
    <Layout>
      <Head>
        <title>Petfinder | Знайти свою тваринку!</title>
      </Head>
      <MainSearch />
      <Container>
        <h2 className={styles.title}>Авторизація</h2>
        <form className={styles.form}>
          <input type='text' name='email' placeholder='Пошта' />
          <input type='password' name='password' placeholder='Пароль' />
          <Button onClick={onLogin}>Увійти</Button>
          <div className={styles.help}>
            <Link href='/restore-password'>Забули пароль?</Link>
            <Link href='/signup'>Немає облікового запису?</Link>
          </div>
        </form>

      </Container>
    </Layout>
  )
};
