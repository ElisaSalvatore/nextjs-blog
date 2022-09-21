import Layout from "../../components/layout";
import Date from "../../components/date";

import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';

//module css
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this (after using remark in lib/posts):
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default function Post( {postData} ) {
    // console.log(postData)
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            {/* {postData.id} */}
            <div className={utilStyles.lightText}>
                {/* Replace {postData.date} with this */}
                <Date dateString={postData.date} />
            </div>

            {/* To render contentHtml using dangerouslySetInnerHTML (after usign remark into lib/posts) */}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
}