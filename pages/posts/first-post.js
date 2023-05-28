import Layout from '../../components/Layout';
import Head from 'next/head';

// http://localhost:3000/posts/first-post

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>첫번째 글</title>
      </Head>
      <h1>첫번째 글</h1>
    </Layout>
  );
}
