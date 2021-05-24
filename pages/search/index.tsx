import Head from 'next/head';
import React, { Fragment, useEffect, useState } from 'react';
import { Container, Layout, MainSearch, Post } from '@components';

import styles from './index.module.scss';

import axios from 'axios';
import { Pagination } from '@modules';

Search.getInitialProps = ({ query }) => {
  return { query }
}

export default function Search({ query: { type, gender, status, city, date, page } }) {
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const [currentLimit, setCurrentLimit] = useState(0)

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const { data: { posts, totalCount, limit } } = await axios({
        url: `${process.env.API}/posts?page=${currentPage}&type=${type}&status=${status}&city=${city}&date=${date}&gender=${gender}`,
        method: 'GET',
      });

      setPosts(posts);
      setCurrentLimit(limit)
      setTotalCount(totalCount);
      setIsLoading(false);

    } catch (error) {
      // TODO: Popup with error
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setCurrentPage(page);
    fetchPosts();
  }, [type, gender, status, city, date, currentPage, page])

  return (
    <Layout>
      <Head>
        <title>Petfinder | Знайди свою тваринку!</title>
      </Head>
      <MainSearch />
      <Container>
        {isLoading ?
          <div className={styles.preloader}><img src='loading_light.gif' alt='Preloader' /></div>
          : (
            <Fragment>
              {<h3 className={styles.title}>{posts.length ? `Оголошень: ${totalCount}` : 'Нічого не знайдено!'}</h3>}
              {Boolean(posts.length) && (<Pagination city={city} currentLimit={currentLimit} date={date} gender={gender} status={status} type={type} totalCount={totalCount} currentPage={currentPage} />)}
              <div className={styles.posts}>
                {
                  posts.map(({ _id, name, type, gender, status, city, date, image }) => {
                    return <Post key={_id} id={_id} name={name} type={type} gender={gender} status={status} city={city} date={date} imgUrl={image} />
                  })
                }
              </div>
            </Fragment>
          )}
      </Container>
    </Layout>
  )
};
