import { Container, Layout, MainSearch } from '@components';
import { State } from '@store';
import { Create, Login } from 'modules';
import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Search() {
  const { isLoggedIn } = useSelector((state: State) => state.general);

  return (
    <Layout>
      <Head>
        <title>Створити оголошення | Petfinder</title>
      </Head>
      {// <MainSearch />
}
      <Container>{isLoggedIn ? <Create /> : <Login />}</Container>
    </Layout>
  );
}
