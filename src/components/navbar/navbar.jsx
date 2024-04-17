import React from 'react';
import './navbar.css';
import logo from '../../assets/images/connectLogo-removebg-preview.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Add your logo image or component here */}
        <img src={logo} alt="Logo" style={{ width: '120px', height: 'auto' }} />
      </div>
      <ul className="navbar-items">
        <li className="navbar-item">
          <Link to="/">Home</Link>
         
        </li>
        <li className="navbar-item">
          <Link to='/about'>About</Link>
          
        </li>
       
        <li className="navbar-item">
          <Link to='/schools'>Schools</Link>
         
        </li>
         <li className="navbar-item">
          <Link to='/adminlogin'>Dashboard</Link>
          
        </li> 
        <li className="navbar-item">
          <Link to='profile'>Profile</Link>
          
        </li>
        <li className="navbar-item">
          <Link to='/signup'>Sign Up</Link>
          
        </li>
        <li className="navbar-item">
          <Link to ='/login'>Login</Link>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;