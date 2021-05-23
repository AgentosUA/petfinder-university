
import React from 'react';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames';
import styles from './pagination.module.scss';

const Pagination = ({ currentPage = 1, totalCount, currentLimit, type, city, date, status, gender }) => {
  return (
    <div className={styles.pagination}>
      {Boolean((Number(currentPage) !== 1)) && (
        <div className={styles.navigate} onClick={() => Router.push(`/search?page=${Number(currentPage) - 1}&type=${type}&status=${status}&city=${city}&date=${date}`)}>
          <FontAwesomeIcon icon={['fas', 'arrow-left']} className={styles.link} />
        </div>
      )}
      <div className={classNames(styles.current, styles.navigate)}>{currentPage}</div>
      {Boolean((Number(currentPage) * currentLimit + 1 < totalCount)) && (
        <div className={styles.navigate} onClick={() => Router.push(`/search?page=${Number(currentPage) + 1}&type=${type}&status=${status}&city=${city}&date=${date}`)}>
          <FontAwesomeIcon icon={['fas', 'arrow-right']} className={styles.link} />
        </div>
      )}
    </div>
  )
}

export { Pagination };