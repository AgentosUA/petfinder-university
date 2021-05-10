import Link from 'next/link';

import { Fragment } from 'react';

const AuthLinks = () => (
  <Fragment>
    <Link href='/login'>Увійти</Link>
    <Link href='/signup'>Реєстрація</Link>
  </Fragment>
);

export { AuthLinks };
