import Head from 'next/head';
import { useRouter } from "next/router";
import { Container, Layout } from '../../components';
import { MainSearch } from '@home';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const router = useRouter();
  
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  const fetchPosts = async () => {
    try {
      const { data } = await axios({
        url: 'http://localhost:3000/posts',
        method: 'POST',
        data: {
          page: 1,
          limit: 99999
        }
      });

      setPosts(data);
      // setIsLoading(false);
      console.log(router.query);
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <Layout>
      <Head>
        <title>Petfinder | Знайти свою тваринку!</title>
      </Head>
      <MainSearch />
      <Container>
        {isLoading ? <img src='loading_light.gif' alt='Loading logo gif' /> : (

          posts.map((item) => {
            return <li>{item.name}</li>
          })

        )}

      </Container>
    </Layout>
  )
}

