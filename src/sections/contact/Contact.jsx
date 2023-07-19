import React from 'react'
import contact from './contact.css'
import {SiMinutemailer} from 'react-icons/si'
import {FaFacebookMessenger} from 'react-icons/fa'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Contact = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a4jnzni', 'template_1ldym8v', form.current, 'C97dnPjNiyiH2p0Go')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <header id="contact">
      <div className='container contact__container '  data-aos="fade-in">
        <div className='contact__options'>
          <article className='contact__option'>
            <SiMinutemailer className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:chitklaus@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messager</h4>      
            <a href="https://m.me/chitklaus.lee" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://wa.me/14373290310" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
         <input type="text" name = "name" placeholder='Your Full Name'required />
         <input type="email" name = "email" placeholder='Your Email' required/>
         <textarea name="message" rews="7" placeholder='Your Message' required/>
         <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </header>
  )
}
export default Contact