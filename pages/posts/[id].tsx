import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import {
  Container,
  Layout,
  MainSearch,
  Button,
  AnimalDescriptionList
} from '@components';

import styles from './index.module.scss';

import axios from 'axios';
import { postsService } from '@api';
import { AnimalGender, AnimalStatus, AnimalType } from '@models';

Search.getInitialProps = ({ query }) => {
  return { query };
};

export default function Search({ query: { id } }) {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showContacts, setShowContacts] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const [data, statusCode] = await postsService.getPostById(id);

      // _id,
      //   name,
      //   type,
      //   gender,
      //   status,
      //   city,
      //   date,
      //   imgUrl

      setPost(data);
      setIsLoading(false);
    } catch (error) {
      // TODO: Popup with error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [id]);

  const generatedDate = new Date(post?.date);
  const day = generatedDate.getDate();
  const month = generatedDate.getMonth() + 1;
  const year = generatedDate.getFullYear();

  return (
    <Layout>
      <Head>
        <title>Petfinder | Знайди свою тваринку!</title>
      </Head>
      <MainSearch />
      <Container>
        {isLoading ? (
          <div className={styles.preloader}>
            <img src='loading_light.gif' alt='Preloader' />
          </div>
        ) : (
          <Fragment>
            {Boolean(!post) && (
              <h3 className={styles.title}>Такого оголошення не існує!</h3>
            )}
            <div className={styles.post}>
              <div className={styles.contacts}>
                <img src={post.image} className={styles.image} alt='animal' />
                {showContacts ? (
                  <Fragment>
                    <p>
                      {post.creator.name}
                      <br />
                      {post.creator.phone}
                    </p>
                  </Fragment>
                ) : (
                  <Button fullWidth onClick={() => setShowContacts(true)}>
                    Контакти автора
                  </Button>
                )}
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{post.name}</h3>
                <AnimalDescriptionList
                  day={day}
                  month={month}
                  year={year}
                  gender={post.gender}
                  status={post.status}
                  city={post.city}
                  type={post.type}
                />
                <p>
                  <b>Опис:</b>
                </p>
                <p className={styles.description}>{post.description}</p>
              </div>
            </div>
          </Fragment>
        )}
      </Container>
    </Layout>
  );
}
