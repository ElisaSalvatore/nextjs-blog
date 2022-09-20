import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

//fetch data from the file system
import { getSortedPostsData } from '../lib/posts'

//get data using getStaticProps 
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home( {allPostsData} ){
  return (
    <Layout home>
      <Head>
        <title> {siteTitle} </title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
            Hello, I'm Elisa. I'm backend developer and you can contact me on{' '}
            <a href="https://github.com/ElisaSalvatore">Github</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* passing props and display them */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <ul className={utilStyles.list}>

          {allPostsData.map(({id, date, title}) => (
            <li key={id} className={utilStyles.listItem}>
              Title: {title}
              <br/>
              ID: {id}
              <br/>
              Date: {date}
            </li>
          ))}

        </ul>

      </section>
    </Layout>
  )
}