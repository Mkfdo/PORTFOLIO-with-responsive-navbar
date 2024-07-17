import React from 'react'
import './Intro.css';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span><br />
            <span className='introText'>I'm <span className='introName'>Mithila</span> <br />Full Stack Developer</span>
            <p className='introPara'>I'm a skilled Full stack developer in creating visually appealing and user friendly websites.</p>
            <Link><button className='btn'><b>Hire Me</b></button></Link>
        </div>
    </section>
  )
}

export default Intro