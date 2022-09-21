import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';

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

            {postData.title}
            <br/>
            {postData.id}
            <br/>
            {postData.date}
            <br/>
            {/* To render contentHtml using dangerouslySetInnerHTML (after usign remark into lib/posts) */}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
}