import Head from 'next/head';
// import { useEffect, useState } from 'react';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/Date';
import { getSortedPostsData } from '../lib/posts';

/* SSG 구현 */
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log('allPostsData: ', allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

// export async function getStaticProps() {
//   const response = await fetch('http://localhost:3000/api/posts');
//   const json = await response.json();

//   return {
//     props: {
//       allPostsData: json.allPostsData,
//     },
//   };
// }

/* 
  ⭐️ SSR을 사용해야 하는 이유
    - localhost:3000/api/posts에 접근하려면 서버를 띄워야 하기 때문이다. 
    - 그래서 SSG 즉, build할때는 "getStaticProps"이 서버를 띄우지 않았기 때문에 api에 접근 할 수 없다. 
*/
// export async function getServerSideProps() {
//   try {
//     console.log('🔴 index.js > getServerSideProps: ', getServerSideProps);
//     const response = await fetch('http://localhost:3000/api/posts');
//     console.log('🔴 index.js > response: ', response);
//     const json = await response.json();
//     console.log('🔴 index.js > json: ', json);
//   } catch (error) {
//     console.log('🔴🔴🔴🔴🔴🔴🔴🔴');
//     console.error('error: ', error);
//   }

//   return {
//     props: {
//       allPostsData: json.allPostsData,
//     },
//   };
// }

/* SSR 구현 */
// export async function getServerSideProps() {
//   const allPostsData = getSortedPostsData();
//   console.log('getServerSideProps > allPostsData: ', allPostsData);
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// export default function Home(/* { allPostsData } */) {
export default function Home({ allPostsData }) {
  console.info('🔴 index.js');
  // const [allPostsData, setAllPostsData] = useState([]);

  // useEffect(() => {
  //   fetch('/api/posts')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('data.PostsData: ', data.allPostsData);
  //       setAllPostsData(data.allPostsData);
  //     });
  // }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I love coding ♡</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>
          <Link href="/posts/first-post">첫번째글</Link>
        </p>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData?.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
