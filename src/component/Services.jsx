import React from 'react';
export default function Services() {
  return (
    <div className="s" id="service Services">
      <h1 className="h2">Services</h1>
      {/* Commentaire HTML */}
      <br /><br />
      <div className="main">
        <section className="services">
          <div className="service">
            <h2 className="h3">Développement d'applications Web</h2>
            <button className="btn-commander">Commander</button>
          </div>
          <div className="service">
            <h2 className="h3">Conception et gestion de bases de données</h2> 
            <button className="btn-commander">Commander</button>
          </div>
          <div className="service">
            <h2 className="h3">Intégration <br /> d'API</h2> {/* Ajout de la balise <br /> */}
            <button className="btn-commander">Commander</button>
          </div>
          <div className="service">
            <h2 className="h3">Gestion de projets informatique</h2>
            <button className="btn-commander">Commander</button>
          </div>
          <div className="service">
            <h2 className="h3">Site Web <br />adaptatif</h2> {/* Ajout de la balise <br /> */}
            <button className="btn-commander">Commander</button>
          </div>
          <div className="service">
            <h2 className="h3">Développement de logiciels Bureau personnalisés</h2>
            <button className="btn-commander">Commander</button>
          </div>
          <div className="service">
            <h2 className="h3">Développement d'applications mobiles</h2>
            <button className="btn-commander">Commander</button>
          </div>
          <div className="service">
            <h2 className="h3" id="competencesl">Intégration de modèle <br /> intelligent</h2> {/* Ajout de la balise <br /> */}
            <button className="btn-commander">Commander</button>
          </div>
        </section>
      </div>
      <br /><br />
       
    </div>
  );
}
