import React, {useState} from 'react'
import styles from './contact-form.module.css'

import Notification from '../ui/notification'

const ContactForm = () => {
    
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')
    const [notification, setNotification] = useState(false)
    
    const sendMessageHandler = async (e)=>{
        e.preventDefault()

        setNotification('pending')

        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({email:enteredEmail, name:enteredName, message:enteredMessage}),
            headers: {
                'Content-Type':'application/json'
            }
        })

        const data = await response.json()

        if(!response.ok){
            setNotification('error')
            throw new Error(data.message || 'Something went wrong!')
        }

        setEnteredEmail('')
        setEnteredName('')
        setEnteredMessage('')
        setNotification('success')
    }

    let noti

    if(notification === 'pending'){
        noti = {
            status: 'pending',
            title: 'Sending message',
            message: 'Your message is on its way'
        }
    }
    if(notification === 'success'){
        noti = {
            status: 'success',
            title: 'Success!',
            message: 'Sent message successfully'
        }
    }
    if(notification === 'error'){
        noti = {
            status: 'error',
            title: 'error!',
            message: 'Error occoured'
        }
    }

    return (
        <section className={styles.contact}>
            <h1>How can I help you?</h1>
            <form className={styles.form} onSubmit={sendMessageHandler}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input
                            type='email'
                            id='email'
                            required
                            value={enteredEmail}
                            onChange={(event) => setEnteredEmail(event.target.value)}
                        />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor='name'>Your Name</label>
                        <input
                            type='text'
                            id='name'
                            required
                            value={enteredName}
                            onChange={(event) => setEnteredName(event.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.control}>
                    <label htmlFor='message'>Your Message</label>
                    <textarea
                        id='message'
                        rows='5'
                        required
                        value={enteredMessage}
                        onChange={(event) => setEnteredMessage(event.target.value)}
                    ></textarea>
                </div>

                <div className={styles.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {notification && (
                <Notification
                    status={noti.status}
                    title={noti.title}
                    message={noti.message}
                />
            )}
        </section>
    )
}

export default ContactForm
