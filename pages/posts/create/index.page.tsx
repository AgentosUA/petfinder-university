import { Container, Layout } from '@components';
import { Create, Login, MainSearch } from 'modules';
import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Search() {
  // const { isLoggedIn } = useSelector((state: State) => state.general);

  return (
    <Layout>
      <Head>
        <title>Створити оголошення | Petfinder</title>
      </Head>
      <MainSearch />
      <Container>{true ? <Create /> : <Login />}</Container>
    </Layout>
  );
}
