import Head from 'next/head';
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from 'react';
import { Container, Layout, MainSearch, Post } from '@components';

import styles from './index.module.scss';

import axios from 'axios';

Search.getInitialProps = ({ query }) => {
  return { query }
}

export default function Search({ query: { id } }) {
  const [post, setPost] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios({
        url: `${process.env.API}/posts/${id}`,
        method: 'GET',
      });
      console.log(data);
      setPost(data);
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
  }, [id])

  return (
    <Layout>
      <Head>
        <title>Petfinder | Знайти свою тваринку!</title>
      </Head>
      <MainSearch />
      <Container>
        {isLoading ?
          <div className={styles.preloader}><img src='loading_light.gif' alt='Preloader' /></div>
          : (
            <Fragment>
              {Boolean(!post) && <h3 className={styles.title}>Такого оголошення не існує!</h3>}
              <div className={styles.posts}>
                {post && <Post key={post._id} id={post._id} name={post.name} type={post.type} gender={post.gender} status={post.status} city={post.city} date={post.date} imgUrl={post.image} />}
              </div>
            </Fragment>
          )}
      </Container>
    </Layout>
  )
};
