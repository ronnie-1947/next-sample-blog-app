import Image from 'next/image'
import styles from './hero.module.css'

const Hero = () => {
    return (
        <section className={styles.hero}>

            <div className={styles.image}>
                <Image
                    src="/images/site/profile.jpg"
                    alt="Author img"
                    height="400"
                    width="400"
                />
            </div>
            <h1>Hi, I'm Ronny</h1>
            <p>I blog about web development . Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, deserunt!</p>
        </section>
    )
}

export default Hero
