import React from 'react';
import './styles.css'

import { AiOutlinePhone } from 'react-icons/ai'

const Navbar: React.FC = () => {
  const phoneNumber = '+16284440206';
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  }

  return (
    <nav className="main-container">
    <div className="image-container">
      <a href="/">
        <img src="assets/logo-kairos.png" alt="Logo" />
      </a>
    </div>
    <div>
      <ul className="nav-items">
        <div className='dropdown'>
          <button className='dropbtn'>Services</button>
            <div className='dropdown-content'>
              <a href='flooring'>Flooring</a>
              <a href='painting'>Painting</a>
              <a href='gutter'>Gutter Guard & Cleaning</a>
              <a href='pressurewashing'>Pressure Washing</a>
            </div>
        </div>
        <li className='get-quote-nav'>
          <a href="quote">Get Quote</a>
        </li>
        <li>
          <button onClick={handleCallClick} className='button-container'>
            <div className='icon-and-text'>
            <AiOutlinePhone className="phone-icon"/>
            <span className='text-button'>CALL US</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;