import Head from 'next/head';
import { Layout, MainSearch } from '@components';
import { Signup } from '@modules';

export default function SignupPage() {
  
  return (
    <Layout>
      <Head>
        <title>Реєстрація | Petfinder</title>
      </Head>
      <MainSearch />
      <Signup />
    </Layout>
  )
};
