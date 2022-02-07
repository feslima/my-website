import type { NextPage } from 'next';
import Head from 'next/head';
import Portfolio from '../components/portfolio';
import Presentation from '../components/presentation';
import Profile from '../components/profile';
import Resume from '../components/resume';

const Home: NextPage = () => {
  return (
    <div className="divide-y divide-gray-400 divide-solid flex justify-center flex-col">
      <Head>
        <title>Felipe Lima</title>
        <meta name="description" content="Felipe's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Profile />
      <Presentation />
      <Resume />
      <Portfolio />
    </div>
  );
};

export default Home;
