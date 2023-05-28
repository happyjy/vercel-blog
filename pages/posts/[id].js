import Layout from '../../components/Layout';
import Head from 'next/head';
// import { getAllPostIds, getPostData } from '../../lib/posts';
import { getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/Date';
import { useRouter } from 'next/router';

// http://localhost:3000/posts/ssg-ssr
// http://localhost:3000/posts/pre-rendering

// http://localhost:3000/posts/first-post
// http://localhost:3000/posts/second-post

export async function getStaticPaths() {
  // const paths = getAllPostIds();
  const paths = [
    {
      params: {
        id: 'ssg-ssr',
      },
    },
  ];
  console.log('--- getStaticPaths > paths: ', paths);
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  console.log('--- getStaticProps > params: ', params);
  console.log('--- getStaticProps > postData: ', postData);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  console.log('--- [id].js > postData: ', postData);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
