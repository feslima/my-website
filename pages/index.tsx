import type { NextPage } from 'next';
import Head from 'next/head';
import Profile from '../components/profile';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Felipe Lima</title>
        <meta name="description" content="Felipe's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Profile />
    </div>
  );
};

export default Home;
