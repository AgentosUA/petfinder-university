import Head from 'next/head';
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from 'react';
import { Container, Layout, MainSearch, Post } from '@components';

import styles from './index.module.scss';

import axios from 'axios';
import { useSelector } from 'react-redux';
import { State } from '@store';

Search.getInitialProps = ({ query }) => {
  return { query }
}

export default function Search({ query: { type, gender, status, city, date, page } }) {
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const { data: { posts, totalCount } } = await axios({
        url: `${process.env.API}/posts?page=${page || 1}&type=${type}&status=${status}&city=${city}&date=${date}`,
        method: 'GET',
        data: {
          page: 1,
          limit: 99999
        }
      });

      setPosts(posts);
      setTotalCount(totalCount);
      setIsLoading(false);

    } catch (error) {
      // TODO: Popup with error
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [type, gender, status, city, date])

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
              {Boolean(!posts.length) && <h3 className={styles.title}>Нічого не знайдено!</h3>}
              {Boolean(posts.length) && <h3 className={styles.title}>Оголошень: {totalCount}</h3>}
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
