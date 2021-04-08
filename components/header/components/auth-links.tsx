import Link from 'next/link';

import { Fragment } from 'react';

const AuthLinks = () => (
  <Fragment>
    <Link href='/'>Увійти</Link>
    <Link href='/profile'>Реєстрація</Link>
  </Fragment>
);

export { AuthLinks };
