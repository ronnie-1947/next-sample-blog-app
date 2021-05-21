import {Fragment} from 'react'
import Head from 'next/head'
import ContactForm from '../components/contact-page/contact-form'

const Contact = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactForm/>
        </Fragment>
    )
}

export default Contact
