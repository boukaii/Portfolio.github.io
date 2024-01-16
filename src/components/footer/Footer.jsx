import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import "./Footer.css"

function Footer() {
  return (
    <div id="nav-footer">
      <h2 className='titre-footer'>Me contacter</h2>
      <div className='global-footer'>
        <div className='link-footer'>
            <h3>DÉVELOPPEUR INFORMATIQUE </h3>
            <p>Développeur Back-end ,
            <br />
            je suis actuellement à la recherche d'opportunités <br /> d'emploi sur Lyon et ses alentours.</p> 
        </div>

        <div className="link-footer">
          <h3 className='contact'>Coordonnées</h3>   
            <p><a><FaEnvelope className='icons_mail'/> guillaume27121993@gmail.com</a></p>
            <a><FaPhone className='icons'/> (+33) 6.10.01.52.00</a>
        </div>
        
        <div className="link-footer">
          <h3>Réseaux sociaux</h3>
          <div className="social-icons">
            <a className='lien-icons' href="https://linkedin.com/in/guillaume-chevrier-pro-3720a021b" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='icons1'/>
            </a>
            <a className='lien-icons' href="https://github.com/boukaii" target="_blank" rel="noopener noreferrer">
              <FaGithub className='icons1'/>
            </a>
          </div>
        </div>
      </div>

      <div class="footerBottom">
        <hr />
        <p>&copy; 2024 - Chevrier Guillaume.Tous droits réservés</p>
      </div>
    </div>
  );
}

export default Footer;