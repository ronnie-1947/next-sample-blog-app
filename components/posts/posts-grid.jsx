import styles from './posts-grid.module.css'
import PostItem from './post-item'

const PostsGrid = ({posts}) => {
    return (
        <ul className={styles.grid}>
            {
                posts.map(post=><PostItem key={post.slug} {...post}/>)
            }
        </ul>
    )
}

export default PostsGrid
