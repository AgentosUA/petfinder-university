import Head from 'next/head';
import { Container, Layout, MainSearch } from '@components';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Petfinder | Знайди свою тваринку!</title>
      </Head>
      <Container>
        <h2 style={{ textAlign: 'center' }}>Йой! Схоже що такої сторінки не існує!</h2>
        <img src='/loading_light.gif' alt='search logo' style={{ margin: '0 auto', display: 'block', textAlign: 'center', width: '250px' }} />
      </Container>
    </Layout>
  )
}
