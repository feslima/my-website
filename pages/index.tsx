import type { NextPage } from 'next';
import Head from 'next/head';
import Profile from '../components/profile';

const Home: NextPage = () => {
  return (
    <div className="divide-y divide-gray-400 divide-solid flex justify-center flex-col">
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
