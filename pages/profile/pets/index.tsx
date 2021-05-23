import Head from 'next/head';
import { Container, Layout, MainSearch } from '@components';
import { Profile } from 'modules/profile/profile';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Petfinder | Знайди свою тваринку!</title>
      </Head>
      <MainSearch />
      <Container>
        <Profile />
      </Container>
    </Layout>
  )
}
