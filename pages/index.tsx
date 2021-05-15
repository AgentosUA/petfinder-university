import Head from 'next/head';
import { Container, Layout, MainSearch } from '@components';

export default function Home() {
  return (
      <Layout>
        <Head>
          <title>Petfinder | Знайди свою тваринку!</title>
        </Head>
        <MainSearch />
        <Container>
        </Container>
      </Layout>
    )
}
