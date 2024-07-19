import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../components/pages/assets/logo.png'
import './Navbar.css';


export const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link to='/intro' className='desktopMenuListItem'>Home Page</Link>
            <Link to='/about' className='desktopMenuListItem'>About Me</Link>
            <Link to='/project' className='desktopMenuListItem'>Projects</Link> 
            <Link to='/contact' className='desktopMenuListItem'>Contact Me</Link>
        </div>
        
    </nav>
  );
};

export default Navbar    
            
                    
                
        
    