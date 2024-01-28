import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="" className="logo">Chevrier.G</a>
      </div>
      <div className="burger-container">
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`nav-links ${showMenu ? 'show' : ''}`}>
        <ul>
          <li><a className="active" href="#nav-pres">A PROPOS DE MOI</a></li>
          <li><a href="#nav-compet">COMPETENCES</a></li>
          <li><a href="#nav-projet">PORTFOLIO</a></li>
          <li><a href="/media/cv.pdf">MON CV</a></li>
          <li><a className="#nav-footer" href="#nav-footer">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
  
  

}

export default Navbar;
