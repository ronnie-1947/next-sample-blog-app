import {Fragment} from 'react'
import Head from 'next/head'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'


export default function Home({posts}) {
  return (
    <Fragment>
      <Head>
        <title>Ronny's Blog</title>
      </Head>
      <Hero/>
      <FeaturedPosts posts={posts} />
    </Fragment>
  )
}


export function getStaticProps(){

  const FeaturedPosts = getFeaturedPosts()
  
  return {
    props: {
      posts: FeaturedPosts
    },
    revalidate: 60*30
  }
}