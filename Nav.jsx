import React from 'react';
import { Link } from 'react-scroll';
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <ul className='navmenu'>
        <li className='nav-item'>
          <Link to="hero" smooth={true} duration={500}>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to="shop" smooth={true} duration={500}>Shop</Link>
        </li>
        <li className='nav-item'>
          <Link to="products" smooth={true} duration={500}>Products</Link>
        </li>
        <li className='nav-item'>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
