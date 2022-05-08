import Head from 'next/head';
import { Container, Layout,  Preloader } from '@components';
import { Profile, Posts } from 'modules/profile';
import { Fragment, useEffect, useState } from 'react';
import { profileService } from '@api';
import { getProfile, State } from '@store';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
import Router from 'next/router';
import { Pets } from 'modules/profile/pets';

enum TabNames {
  profile = 'profile',
  posts = 'posts',
  pets = 'pets'
}

export default function Home() {
  const { counter: profileCounter } = useSelector(
    (state: State) => state.profile
  );
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [pets, setPets] = useState([]);
  const [posts, setPosts] = useState([]);

  const [selectedTab, setSelectedTab] = useState(TabNames.profile);

  const { isLoggedIn } = useSelector((state: State) => state.general);

  useEffect(() => {
    if (!isLoggedIn) {
      Router.push('/');
      return;
    }

    const fetch = async () => {
      try {
        const [{ name, pets, posts, role, phone }, statusCode] =
          await profileService.profile();
        setName(name);
        setPhone(phone);
        setRole(role);
        setPets(pets);
        setPosts(posts);
      } catch (error) {}
    };

    fetch();
    setIsLoading(false);
  }, [selectedTab, profileCounter]);

  return (
    <Layout>
      <Head>
        <title>Особистий кабінет</title>
      </Head>
      {/* {// <MainSearch />
} */}
      <Container>
        {isLoading ? (
          <Preloader />
        ) : (
          <Fragment>
            <h2 className={styles.title}>Особистий кабінет</h2>
            <nav className={styles.nav}>
              <button
                className={
                  selectedTab === TabNames.profile ? styles.selected : ''
                }
                onClick={() => setSelectedTab(TabNames.profile)}
              >
                Профіль
              </button>
              <button
                className={
                  selectedTab === TabNames.posts ? styles.selected : ''
                }
                onClick={() => setSelectedTab(TabNames.posts)}
              >
                Оголошення
              </button>
              {/* <button
                className={selectedTab === TabNames.pets ? styles.selected : ''}
                onClick={() => setSelectedTab(TabNames.pets)}>
                Улюбленці
              </button> */}
            </nav>
            {selectedTab === TabNames.profile && (
              <Profile name={name} posts={posts} pets={pets} phone={phone} />
            )}
            {selectedTab === TabNames.posts && <Posts posts={posts} />}
            {selectedTab === TabNames.pets && <Pets />}
          </Fragment>
        )}
      </Container>
    </Layout>
  );
}
