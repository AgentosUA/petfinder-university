import styles from './wrapper.module.scss'

const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};

export { Wrapper };
