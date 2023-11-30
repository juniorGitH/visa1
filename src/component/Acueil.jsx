import React from 'react';
import EA1 from '../img/EA1.png';

export default function Acueil() {
  return (
    <>
    
    <div className="pag" id="accueil">
      <div className="page a">
        <p className="presentation">
          Salut ! Je suis
          <span> Emmanuel AMELA </span> Étudiant Dev full stack
        </p>

        <img src={EA1} alt="" className="cadre1" />

        <div className="slogan">
          <h1>
            en GL3, à l'Institut Polytechnique DEFITECH. Je travaille actuellement comme
            <span> Freelance </span>,
            <br />sur plusieurs projets
          </h1>
          <br /><br /><br />
          <h1>Education</h1>
          <ul>
            <li>UML et Mérise</li>
            <li>Conception des bases de données</li>
            <li>Développement Back-end des projets UML ou MERISE</li>
            <li>Implémentation des interfaces Web et Mobile</li>
            <li>Machine learning et deep learning</li>
            <li>Git</li>
            <li>Un peu de connaissance en web design</li>
            <li>Plusieurs autres formations non payantes sur OpenClassrooms et sur YouTube</li>
          </ul>
          <button>CV <i className="fa-solid fa-download"></i></button>
          <br /><br /><br />
        </div>
      </div>
    </div>
    
    </>
  );
}
