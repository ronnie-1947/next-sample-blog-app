import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

import PostHeader from './post-header'
import styles from './post-content.module.css'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

const PostContent = ({post}) => { 

    const imgPath = `/images/posts/${post.slug}/${post.image}`
    const customRenderers = {
        // img(img){
        //     return <Image src={`/images/posts/${post.slug}/${img.src}`} alt={img.alt} width={600} height={400}/>
        // },
        p(para){
            const {node} = para
            if(node.children[0].tagName==='img'){

                const img = node.children[0]
                return (
                <div className={styles.image}>
                    <Image src={`/images/posts/${post.slug}/${img.properties.src}`} alt={img.alt} width={600} height={400}/>
                </div>)
            }
        return <p>{para.children}</p>
        },
        code(code){
            
            return (
            <SyntaxHighlighter 
                style={atomDark}
                children={code.children}
            />)
        }
    }

    return (
        <article className={styles.content}>
            <PostHeader title={post.title} image={imgPath} />
            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent
