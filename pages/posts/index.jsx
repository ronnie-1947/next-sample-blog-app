import {Fragment} from 'react'
import Head from 'next/head'

import AllPosts from '../../components/posts/all-posts'
import { getFeaturedPosts } from '../../lib/posts-util'


const index = ({posts}) => {
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
            </Head>
            <AllPosts posts={posts} />
        </Fragment>
    )
}

export default index


export function getStaticProps() {

    const FeaturedPosts = getFeaturedPosts()
    
    return {
        props: {
            posts: FeaturedPosts
        }
    }
}