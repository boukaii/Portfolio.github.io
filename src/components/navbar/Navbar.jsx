import React from 'react';
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="" className="logo">Chevrier.G</a>
        <div className="nav-links">
            <ul>
              <li><a className="active" href="#nav-pres">A PROPOS DE MOI</a></li>
              <li><a href="#nav-compet">COMPETENCES</a></li>
              <li><a href="#nav-projet">PORTFOLIO</a></li>
              <li><a href="{% static 'media/cv.pdf' %}">MON CV</a></li>
              <li><a className="#nav-footer" href="#nav-footer">CONTACT</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
