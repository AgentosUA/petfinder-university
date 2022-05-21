import Head from 'next/head';
import { Layout } from '@components';
import { MainSearch, Signup } from '@modules';

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
