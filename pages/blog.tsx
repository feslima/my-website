import type { NextPage } from 'next';
import Head from 'next/head';
import { BlogLayout } from '../components/layout';

const Blog: NextPage = () => {
  return (
    <BlogLayout>
      <div className="divide-y divide-feslima-400 divide-solid flex justify-center flex-col">
        <Head>
          <title>Felipe Lima</title>
          <meta name="description" content="Felipe's Personal Website" />
          <link rel="icon" href="images/favicon.svg" />
        </Head>

        <h1>Hello World!</h1>
      </div>
    </BlogLayout>
  );
};

export default Blog;
