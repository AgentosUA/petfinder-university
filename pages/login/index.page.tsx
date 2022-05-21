import Head from 'next/head';

import { Container, Layout, Preloader } from '@components';
import styles from './index.module.scss';
import { Login, MainSearch } from '@modules';
import { useSelector } from 'react-redux';
// import { State } from '@store';
import { auth } from 'store/auth/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const { isLoggedIn } = auth;

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn]);

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
  );
}
