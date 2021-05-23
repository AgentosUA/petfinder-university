import Head from 'next/head';

import { Container, Layout, MainSearch } from '@components';

import styles from './index.module.scss';
import { Login } from '@modules';


export default function LoginPage() {
  return (
    <Layout>
      <Head>
        <title>Авторизація | Petfinder</title>
      </Head>
      <MainSearch />
      <Container>
        <Login />
      </Container>
    </Layout>
  )
};
