import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <section id='contactPage'>
        <div className='pageTitle'><h1>Contact Me</h1>
            <span className='pageDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm'>
              <input type='text' className='name' placeholder='Your Name' />
              <input type='email' className='email' placeholder='Your Email' />
              <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
              <button type='submit' value='send' className='submitBtn'>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact