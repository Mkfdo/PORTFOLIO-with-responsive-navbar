import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
        
        <ul>
            <li>
                <Link to='/intro'>Home Page</Link>
            </li>
            <li>
                <Link to='/about'>About Me</Link>
            </li>
            <li>
                <Link to='/project'>Projects</Link>
            </li>
            <li>
                <Link to='/contact'>Contact Me</Link>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar