import Link from 'next/link';

import { Fragment } from 'react';

const NavLinks = () => (
  <Fragment>
    <Link href='/'>Головна</Link>
    <Link href='/search?type=all&gender=all&status=escaped&city=all&date=all'>Зниклі</Link>
    <Link href='/search?type=all&gender=all&status=founded&city=all&date=all'>Знайдені</Link>
    <Link href='/about'>Притулки</Link>
    <Link href='/about'>Про проект</Link>
  </Fragment>
);

export { NavLinks };
