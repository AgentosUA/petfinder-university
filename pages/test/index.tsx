import Head from 'next/head';
import { Container, Layout, Instruction } from '@components';
import { observer } from 'mobx-react-lite';
import { auth } from 'store/auth';

const Test = observer((props) => {
  const { isLoggedIn } = auth;
  return (
    <Layout>
      <Head>
        <title>Petfinder | TEST свою тваринку!</title>
      </Head>
      {
        // <MainSearch />
      }
      <Container>{auth.isLoggedIn}</Container>
      {isLoggedIn && <h3>Logged in</h3>}
      {!isLoggedIn && <h3>Sign in</h3>}
      {/* <button onClick={auth.login}>Log in</button> */}
      <button onClick={auth.logout}>Log out</button>
    </Layout>
  );
});

export default Test;
