import React from "react";
import "./Presentation.css";
import aaa from "../../images/aaa.jpg";


function Presentation() {
    return (
        <div class="heading1" id="nav-pres">
            <div class="heading">
                <br />
                <h2 id="mlk">A PROPOS DE MOI</h2>
            </div>
            <section class="about-us">
                <img src={aaa} class="bvb"></img>
                <div className="content">
                    <h3>MON PARCOURS</h3>
                    <p>Ancien Ambulancier et passionné par l'informatique depuis le plus jeune âge,<br />
                        je me suis reconverti en tant que développeur Back-End <span>Python</span> et web avec <span>Django</span> en réalisant la formation d'Openclassroom durant <span>une année complète</span>.
                        <br /> 
                        <br />
                        Cette formation comprend <span>13</span> projets professionnalisants de complexité croissante.
                        <br />
                        Chaque projet est basé sur un scénario concret du monde professionnel
                        allant de la mise en place d'un environnement de développement jusqu'au déploiement d'une
                        application modularisée Django en passant par de <span> l’algorithmique </span> et le développement <span> d'API</span>.
                        <br />
                        Ce qui m'a permis également de développer une base de données <span>PostgreSQL</span> sécurisée ainsi que
                        d'améliorer des applications en les <span>testant</span>, en les <span>débugant</span> et en les remaniant.
                        <br />
                        J'ai également appris à maitriser la <span>POO</span> et la <span>conception MVC</span> ce qui me permet actuellement d'apprendre et de consolider mes connaissances avec le langage <span>PHP</span> et le framework <span>Symfony</span>.
                        <br />
                        <br />
                        Officiellement diplomé, je suis actuellement à la recherche d'opportunités d'emploi sur Lyon
                        et ses alentours en tant que développeur.</p>
                        <br />
                    <a href="#" class="btn-projet">Télécharger mon cv</a>
                </div>
            </section>
        </div>
    )
}

export default Presentation;