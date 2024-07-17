import React from 'react'
import './About.css'
import profile from '../../components/pages/assets/profile1.jpg'

const About = () => {
  return (
    <section id='about'>
        <h1 className='aboutTitle'><b><i>ABOUT ME</i></b></h1>
        <h2 className='aboutSkills'><b>My Skills</b></h2>
        <span className='aboutDesc'>I am a skilled and passionate Full stack developer in creating visually appealing and user friendly websites. I have a strong understanding of programming and a keen eye for detail. I am proficient in HTML, CSS, as well as JavaScript and React js.</span><br/>
        <h2 className='aboutInterests'><b>My Interests</b></h2>
        <span className='aboutDesc'>"I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence."</span><br/>
        <h2 className='aboutBackground'><b>My Background</b></h2>
        <span className='aboutBackgInfo'>Hello,<br/>I am Mithila Keshini Fernando.<br/>I'm 21 years old and from Sri Lanka.<br/>I am currently going through the BCS HEQ PGD level.</span>
        <img src={profile} alt='profile' className='profile'/>
    </section>
  )
}

export default About