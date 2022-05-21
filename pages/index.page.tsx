import Head from 'next/head';
import { Container, Layout } from '@components';
import { MainSearch } from 'modules';
// import { Instruction, MainSearch } from '@modules';
import styles from './index.module.scss';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Petfinder | Знайди свою тваринку!</title>
      </Head>
      <MainSearch />
      <Container>
        <section>
          <h2 className={styles.title}>Досить зволікати, настав час шукати!</h2>
          <div className={styles.instructions}>
            <div className={styles.item}>
              <h3>1</h3>
              <p>
                Зареєструйтеся
                <br />
                на сайті
              </p>
            </div>
            <div className={styles.item}>
              <h3>2</h3>
              <p>
                Створіть
                <br />
                оголошення
              </p>
            </div>
            <div className={styles.item}>
              <h3>3</h3>
              <p>Поверніть улюбленця додому 😃</p>
            </div>
          </div>
          <hr />
        </section>
      </Container>
    </Layout>
  );
}
