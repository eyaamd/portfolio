import React from "react";
import './Header.css'
import logo from '../../assets/logo.png'
import Nav from '../Navbar/Nav'
const Header = () => {
  return (
    <div>
      <header>
     
          <img src={logo} alt="" className="logo" />
     
        <Nav />
        <div className="nav-icon"></div>
        <div className="bx bx-menu" id="menu-icon"></div>
      </header>
    </div>
  );
};

export default Header;
