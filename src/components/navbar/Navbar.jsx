import React, { useState } from 'react';
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">

      <a href="#" className="nav__brand">
        <h3>Chevrier.G</h3>
      </a>
      <div className="nav_full">
      <ul className={active}>
        <li className="nav__item">
          <a href="#nav-pres" className="nav__link">
            A propos de moi
          </a>
        </li>
        <li className="nav__item">
          <a href="#nav-compet" className="nav__link">
            Compétences
          </a>
        </li>
        <li className="nav__item">
          <a href="#nav-projet" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="/media/cv.pdf" className="nav__link">
            Mon CV
          </a>
        </li>
        <li className="nav__item">
          <a href="#nav-footer" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
