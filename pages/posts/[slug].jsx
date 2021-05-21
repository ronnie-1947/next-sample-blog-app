import {Fragment} from 'react'
import Head from 'next/head'
import PostContent from '../../components/posts/post-detail/post-content'

import {getPostData} from '../../lib/posts-util'


const SinglePostPage = ({post}) => {
    return (
    <Fragment>
        <Head>
            <title>{post.slug}</title>
        </Head>
        <PostContent post={post}/>
    </Fragment>
    )
}

export default SinglePostPage


export function getServerSideProps(context){
    const {params} = context
    const  {slug} = params
    
    const postData = getPostData(slug)

    return {
        props: {
            post: postData
        }
    }
}

