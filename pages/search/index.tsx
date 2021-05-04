import Head from 'next/head';
import { Container, Layout } from '../../components';
import { MainSearch } from '@home';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Petfinder | Знайти свою тваринку!</title>
      </Head>
      <MainSearch />
      <Container>
      
      </Container>
    </Layout>
  )
}
