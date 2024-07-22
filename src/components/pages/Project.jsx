import React from 'react'
import { Link } from 'react-router-dom';
import './Project.css';

const Project = () => {
  return (
    <section id='project'>
        <h1 className='projectTitle'><b><i>My Projects</i></b></h1>
        <span className='projectDesc'>This is the Project I have done.</span>
        <div className='projectBars'>
            <div className='projectBar'>
                <div className='projectBarText'>
                    <h3>01. Login & Signup Form using React</h3><br/>
                    <Link to="https://github.com/Mkfdo/sign-in-attempt-3">Github Login form CLICK Here</Link>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project