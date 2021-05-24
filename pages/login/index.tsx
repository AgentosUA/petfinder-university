import Head from 'next/head';

import { Container, Layout, MainSearch, Preloader } from '@components';

import styles from './index.module.scss';
import { Login } from '@modules';
import { useSelector } from 'react-redux';
import { State } from '@store';
import Router from 'next/router';


export default function LoginPage() {
  const { general: { isLoggedIn } } = useSelector((state: State) => state)

  if (isLoggedIn) {
    Router.push('/')
  }

  return (
    <Layout>
      <Head>
        <title>Авторизація | Petfinder</title>
      </Head>
      <MainSearch />
      <Container>
        {isLoggedIn ? <Preloader /> : <Login redirect='/' />}
      </Container>
    </Layout>
  )
};
