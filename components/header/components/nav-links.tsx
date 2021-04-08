import Link from 'next/link';

import { Fragment } from 'react';

const NavLinks = () => (
  <Fragment>
    <Link href='/'>Головна</Link>
    <Link href='/search'>Зниклі</Link>
    <Link href='/search'>Знайдені</Link>
    <Link href='/about'>Про проект</Link>
  </Fragment>
);

export { NavLinks };
