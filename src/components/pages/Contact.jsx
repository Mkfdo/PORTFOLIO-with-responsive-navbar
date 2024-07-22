import React from 'react'
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id='contactPage'>
        <div className="m_title">
          <span><b><h1><i>Contact Me</i></h1></b></span>
        </div>
        <div className="title">
            <h3>Please fill out the form below to discuss any work opportunities.</h3>
        </div>

        <div className="input">
          <input type="email" id="email" className="field" placeholder="Enter your email"/>
          <input type="text" id="name" className="field" placeholder="Enter your name"/>
          <textarea className='field' name='field' rows="5" placeholder='Enter your message'></textarea>
          <Link><button className="submitBtn" type ="submit" value='send'><b>Submit</b></button></Link>
        </div>
     </section>
  )
}

export default Contact    
          
        
        
   
    
      
          
        
        
      
        
    
