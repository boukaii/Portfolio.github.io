import React from "react";
import "./Header.css"
import fond from "../../images/fond.png";


function Header(){
    return (
        <div className='header' style={{ backgroundImage: `url(${fond})` }}>
            <div className="contenue">
                <h1>Bonjour, je suis Chevrier Guillaume</h1>
                <h2>Développeur Back-End Python / PHP et web Django / Symfony</h2>
                <a href="#nav-pres" class="btn-procjet">En savoir plus sur moi</a>
            </div>
        </div>
    )
}

export default Header;