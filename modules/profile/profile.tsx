import Head from 'next/head';
import { Container, Layout, MainSearch } from '@components';
import { Fragment } from 'react';

import styles from './profile.module.scss';
import Link from 'next/link';

const Profile = () => {
  return (
    <Fragment>
      <h2 className={styles.title}>Особистий кабінет</h2>
      <nav className={styles.nav}>
        <Link href='/profile'>Профіль</Link>
        <Link href='/profile/posts'>Оголошення</Link>
        <Link href='/profile/pets'>Улюбленці</Link>
      </nav>
    </Fragment>
  )
}

export { Profile };