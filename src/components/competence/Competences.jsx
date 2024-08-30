import React from "react";
import "./Competences.css";

function Competences() {
  return (
    <div className='global-compet' id='nav-compet'>
      <h2 className="title-competence">Technologies et Soft Skills</h2>
      <h3 className="p-compt">Voici les différents languages et outils que je maîtrise</h3>
      <br />
      <div className="wrapper">
        <div className="scroll-container">
        <div className="item"><img src="https://www.vectorlogo.zone/logos/php/php-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/symfony/symfony-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/python/python-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg" alt="" /></div>
            {/* Dupliquer les items pour le défilement fluide */}
            <div className="item"><img src="https://www.vectorlogo.zone/logos/php/php-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/symfony/symfony-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/python/python-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/java/java-horizontal.svg" alt="" /></div>
            <div className="item"><img src="https://www.vectorlogo.zone/logos/angular/angular-ar21.svg" alt="" /></div>
        </div>
      </div>
      <h3 className="p-compt">Voici mes soft skills</h3>
      <div className="wrapper">
        <div className="scroll-container2">
          <div className="items">Communication</div>
          <div className="items">Prises d’initiatives</div>
          <div className="items">Travail en Équipe</div>
          <div className="items">Autonomie</div>
          <div className="items">Apprentissage Continu</div>
          <div className="items">Résolution de Problèmes</div>
          <div className="items">Gestion du Temps</div>
          <div className="items">Créativité</div>
          {/* Dupliquer les items pour le défilement fluide */}
          <div className="items">Communication</div>
          <div className="items">Prises d’initiatives</div>
          <div className="items">Travail en Équipe</div>
          <div className="items">Autonomie</div>
          <div className="items">Apprentissage Continu</div>
          <div className="items">Résolution de Problèmes</div>
          <div className="items">Gestion du Temps</div>
          <div className="items">Créativité</div>
        </div>
      </div>
    </div>
  );
}

export default Competences;
