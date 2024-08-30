import React from "react";
import "./Header.css";
import fond from "../../images/fond.png";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Header() {

    const [text] = useTypewriter({
        words: [
            'Bonjour, je suis Chevrier Guillaume\nDéveloppeur Full Stack'
        ],
        loop: 0,
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <div className='header' style={{ backgroundImage: `url(${fond})` }}>
            <div className="contenue">
                <h1>
                    {/* Affichage du texte en une seule chaîne */}
                    {text.replace('\n', '\n')}<Cursor />
                </h1>
                <br />
                <br />
                <a href="#nav-pres" className="btn-procjet">En savoir plus sur moi</a>
            </div>
        </div>
    );
}

export default Header;
