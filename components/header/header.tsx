import styles from './header.module.scss';
import Link from 'next/link';

import { NavLinks, AuthLinks, Logo, Sidebar } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarVisible, State } from '@store';

const Header = () => {
  const dispatch = useDispatch();
  // const { desktop, mobile } = useMediaPoints(true);
  const { isSidebarVisible } = useSelector((state: State) => state.general);

  const onMenuClick = () => {
    dispatch(setSidebarVisible(true));
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.nav}>
          <NavLinks />
        </div>
        <div className={styles.auth}>
          <AuthLinks />
        </div>
      </div>

      {/* {mobile && !isSidebarVisible && (
        <div className={styles.wrapper}>
          {!isSidebarVisible && (
            <Fragment>
              <FontAwesomeIcon
                icon={faBars}
                onClick={onMenuClick}
                className={styles.bar}
              />
            </Fragment>
          )}
          <div>
            <Logo />
          </div>
        </div>
      )} */}
    </header>
  );
};

export { Header };
