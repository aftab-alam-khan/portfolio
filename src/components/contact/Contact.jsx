import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'

import "./contact.css"
import { ThemeContext } from '../../context';

function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        const { user_name, user_subject, user_email, message } = formRef.current;
        console.log('user_name : ', user_name.value)
        console.log('user_subject : ', user_subject.value)
        console.log('user_email : ', user_email.value)
        console.log('message : ', message.value)
        alert("Response Submited, thank you!")
        // setDone(true);

        // emailjs.sendForm(
        //     "service_rrvnzco",
        //     "template_3v5nih4",
        //     formRef.current,
        //     "user_DrriDPTGKO2Zj4RDXCA6W"
        //     )
        //     .then((result) => {
        //         console.log(result.text);
        //         setDone(true);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title"> Let's discuss your project </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91-8056270237
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            choice0787@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            114, Gahala, Tejgarh, Mariahu, Jaunpur, Uttar Pradesh, India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Name' name='user_name' required/>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Subject' name='user_subject' required/>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Email' name='user_email' required/>
                        <textarea style={{ backgroundColor: darkMode && "#333" }} name="message" rows="5" placeholder='Message' required></textarea>
                        <button>Submit</button>
                        {/* {done && alert("Response Submited, thank you!")} */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact