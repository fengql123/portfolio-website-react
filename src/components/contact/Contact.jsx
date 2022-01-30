import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './contact.scss'

const Contact = () => {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
        emailjs.sendForm('service_4i15n03', 'template_4ydl3kr', e.target, 'user_KR6t62EbpddGs4TR09537')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    

    return (
        <div className='contacts' id="contact">
            <div className="left">
                <img src="assets/shake.jpg" alt=""/>
            </div>
            <div className="right">
                <h2>Send me an Email!</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email' name="user_email"/>
                    <textarea placeholder='Message' name="message"></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
