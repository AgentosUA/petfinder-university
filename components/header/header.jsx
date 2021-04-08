import styles from './header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img />
      </div>
      <div className={styles.nav}>
        <Link href='/'>asdasd</Link>
      </div>
      <div className={styles.auth}></div>
    </header>
  );
};

export { Header };
