import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
// import { BiSolidUser } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css'; // Import your CSS file for styling
import favIcon from '../Images/Pet_Care.png';

function Navigation() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={favIcon} alt="PetImage" className="logo" />
          </Link>
        </div>
        <div className="menu-container">
          <div className="menu-item">
            <IoLocationSharp className="icon" />
            <h4 className="menu-text">Contact</h4>
          </div>
          <div className="menu-item">
            <Link to="/register" className="menu-link">
              {/* <BiSolidUser className="icon" /> */}
              Sign Up
            </Link>
          </div>
          <div className="menu-item" onClick={() => { console.log('Clicked'); setShow(!show); }}>
            <div className="hamburger">
              <h3>MENU</h3>
              <GiHamburgerMenu className="hamburger-icon" />
            </div>
          </div>
        </div>
      </nav>
      {show && (
        <div className="mobile-menu">
          <Link to="/companionCare" className="menu-link">
            Companion Care
          </Link>
          <Link to="enquiries-and-appointment/:petID" className="menu-link">
            Enquiries and Appointments
          </Link>
          <Link to="" className="menu-link">
          Pet Health Plans
          </Link>
          <Link to="" className="menu-link">
          Pet Advice
          </Link>
          <Link to="" className="menu-link">
          Services
          </Link>
          <Link to="" className="menu-link">
          Pet Symptom Checker
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navigation;
