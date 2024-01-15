import React from "react";
import "./Project.css"


function Project({ python, php }) {
        return (
          <div id='nav-projet' className="full-projet">
            <div className="intro-projet">
              <br></br>
              <h2>Mes projets</h2>
              <h3>Voici ci dessous quelques réalisations que j'ai pu effectuer.
                <br />
              Si vous souhaitez voir davantage de mes projets, vous pouvez consulter dès à présent mon <span>GIT </span>en cliquant <span>ci-dessous</span> </h3>
              <br></br>
              <br></br>
              <a href="https://github.com/boukaii" className="btn-projet">Voir mes autres projets via mon Git</a>
              <br></br>
              <br></br>
            </div>
            <h3>Projet réalisé en Python / Django</h3>
            <section className="container">
              {python.map((item) => (
                <div key={item.id} >
                  <div className="card">
                    <div className="content">
                      <img className="logo" src={item.image} alt="mparticle" />
                      <h5>{item.titre}</h5>
                      <div className="hover_content">
                        <p>{item.description}</p>
                        <a className="" href={item.lien}>En savoir plus</a>
                      </div>
                    </div>  
                  </div>
                </div>
              ))}
            </section>
            <h3>Projet réalisé en PHP / Symfony</h3>
            <section className="container">
                  {php.map((item) => (
                    <div key={item.id} >
                      <div className="card">
                        <div className="content">
                          <img className="logo" src={item.image} alt="mparticle" />
                          <h5>{item.titre}</h5>
                          <div className="hover_content">
                            <p>{item.description}</p>
                            <a className="" href={item.lien}>En savoir plus</a>
                          </div>
                        </div>  
                      </div>
                    </div>
                  ))}
            </section>
          </div>
        )
}
export default Project;