import React from "react";
import "./Header.css"
import blue from "../../images/q.png";


function Header(){
    return (
        <div className='header' style={{ backgroundImage: `url(${blue})` }}>
            <div className="contenue">
                <h1>Bonjour, je suis Chevrier Guillaume</h1>
                <h2>Développeur Back-End Python et web Django</h2>
                <a href="#nav-pres" class="btn-procjet">En savoir plus sur moi</a>
            </div>
        </div>
    )
}

export default Header;