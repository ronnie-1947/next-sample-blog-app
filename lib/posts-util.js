import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content', 'posts')

export function getPostData(fileName){

    const postSlug = fileName.replace(/\.md$/, '')
    const filePath = path.join(postsDir, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(fileContent)


    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData
}

export function getAllPosts(){

    const postFiles = fs.readdirSync(postsDir)
    const allPosts = postFiles.map(postFile=>getPostData(postFile))
    const sortedPost = allPosts.sort((a,b)=>a.date>b.date?-1:1)
    return sortedPost
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts()
    
    const featuredPosts = allPosts.filter(post=> post.isFeatured)
    return featuredPosts
}