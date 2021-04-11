import styles from './main-search.module.scss';

const MainSearch = () => {

  return (
    <div className={styles.mainSearch}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Pet finder</h2>
        <p className={styles.subtitle}>Пошук ваших улюбленців</p>
      </div>
    </div>
  )
};

export { MainSearch };
