import type { NextPage } from 'next';
import Head from 'next/head';
import { BlogLayout } from '../../components/layout';

const Blog: NextPage = () => {
  return (
    <BlogLayout>
      <div className="divide-y divide-feslima-400 divide-solid flex justify-center flex-col">
        <Head>
          <title>Felipe Lima</title>
          <meta name="description" content="Felipe's Personal Website" />
          <link rel="icon" href="/images/favicon.svg" />
        </Head>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Hello World!</h1>
            <p>
              Here you can find a few things that I either find interesting or
              currently working. I find that, at least for me, writing about
              some topic is a better way to fixate knowledge.
            </p>
          </div>

          <ul>
            <a
              href="/blog/sqlalchemy-doctor"
              rel="noopener noreferrer"
              target="_blank"
              className="text-feslima-purple-800 font-bold no-underline hover:underline before:content-['>']"
            >
              Tracking and examining your SQL queries health with SQLAlchemy
            </a>
          </ul>
        </div>
      </div>
    </BlogLayout>
  );
};

export default Blog;
