import Head from 'next/head';
import { Container, Layout, MainSearch, Instruction } from '@components';
import { observer } from 'mobx-react-lite';
import { timer } from 'store/test';

const Test = observer((props) => {
  return (
    <Layout>
      <Head>
        <title>Petfinder | TEST свою тваринку!</title>
      </Head>
      <MainSearch />
      <Container>{timer.secondsPassed}{JSON.stringify(props)}</Container>
      <button onClick={timer.increaseTimer}>Test</button>
    </Layout>
  );
});

export default Test;
