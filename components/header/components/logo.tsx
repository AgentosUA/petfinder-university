import Link from 'next/link';

import { Fragment } from 'react';

const Logo = (logo) => (
  <Fragment>
    <Link href='/'><img src={logo} alt='logo' /></Link>
  </Fragment>
);

export { Logo };
