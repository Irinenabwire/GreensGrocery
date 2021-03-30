import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {FaSpa, FaUser } from 'react-icons/fa';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (

    <>
      <nav className='navbar'>

        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
       GreensKiosk
            <FaSpa className='FaSpar' />
             </Link>
            <DropdownButton className="Dropdown btn btn-light"  title="Categories">
        <Dropdown.Item href="#/action-1">Vegetables</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Fruits</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Tuber</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cereals</Dropdown.Item>
        </DropdownButton>
         

          <Link
                to='/sign-up' href="/home"
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
              {button && <Button href="/home" type="button" className='btn btn-danger'>SIGN UP <FaUser className='FaUser' /></Button>} 
            
          {/* <Button href="/home" variant="btn-success">SIGN UP<FaUser /></Button> */}
          <div className='menu-icon' onClick={handleClick}>
         
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

        
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
        

            </li>
           
           
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
              to='/cart'
              className='nav-links'
              onClick={closeMobileMenu}
              >
              <a href="Cart.js">
  <i class="fas fa-shopping-cart fa-lg bg-danger mt-4"></i>
  <span class="badge rounded-pill badge-notification bg-danger">1</span>
</a>
</Link>
</li>
            
          </ul>
       
        </div>
      </nav>
    </>
  );
}

export default Navbar;
