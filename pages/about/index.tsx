import Head from 'next/head';
import { Container, Layout, MainSearch } from '@components';

import styles from './index.module.scss'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Petfinder | Знайди свою тваринку!</title>
      </Head>
      <MainSearch />
      <Container>
        <h1 className={styles.title}>Pet Finder Project</h1>
        <div className={styles.logo}>
          <img src="/logo.png" width="150" title="hover text" />
        </div>
        <div className={styles.paragraph}>
          <b>Pet Finder Project</b> - це студентський проект, мета якого є реалізувати централізовану базу даних оголошень про зниклих тварин. <br />
          Проект включає у собі Веб-додаток для швидкого створення та пошуку оголошення про зниклу тварину, а також можливістю відслідковувати власну тварину за допомогою GPS-нашийника на базі Arduino
        </div>
        <hr />
        <h2 className={styles.subtitle}>Ціль</h2>
        <div className={styles.paragraph}>
          Ціль нашого проекту - надати користувачам з України централізовану та зручну у використанні базу даних зниклих та знайдених тварин.
          Ключовими аспектами проекту є:
          - Розміщення оголошень про зниклих / знайдених тварин
          - Пошук по GPS-нашийнику
          - Пошук по фільтру (тип тварини, стать, коли зник, т.д.)
        </div>
        <hr />
        <h2 className={styles.subtitle}>Список технологій</h2>
        <h3>Backend:</h3>
        <ul>
          <li>Typescript</li>
          <li>NestJS</li>
          <li>MongoDB</li>
        </ul>
        <h3>Frontend:</h3>
        <ul>
          <li>Typescript</li>
          <li>NextJS</li>
        </ul>
        <hr />
        <h3>Нашийник:</h3>
        <ul>
          <li>C</li>
          <li>Arduino</li>
          <li>GPS Module (NEO-7M GPS NEO7MV2)</li>
        </ul>
        <hr />
        <h3>Розробники:</h3>
        <ul>
          <li>Oleh Stepaniuk (Software) - REST API, React App</li>
          <li>Andriy Koper (Hardware) - Нашийник</li>
          <li>Denis Stoliarchuk (Mentor) - початкові поради та підтримка</li>
          <li>Volodymyr Shevchyk (Mentor) - початкові поради та підтримка</li>
        </ul>
      </Container>
    </Layout>
  )
}
