import React from 'react';
import './Navbar.css';

const Navbar = (props) => {

  return (
    <nav className="navbar">  
      
      
      
      <ul className="nav-links">
      <img src='https://www.cybermindworks.com/images/cmwlogo.svg'></img>
        <li><a href="/">Home</a></li>
        <li><a href="/">Find Jobs</a></li>
        <li><a href="/">Find Talents</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Testimonials</a></li>
        <li><button onClick={props.openModal} className="create-job-btn">Create Jobs</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
