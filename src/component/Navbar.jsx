import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Navbar() {
  const [listM, setListM] = useState([
    { id: 2, nom: "Commandes", clanaM: "fas fa-shopping-cart" },
    { id: 4, nom: "profil", clanaM: "far fa-user" }
  ]);

  const [listM1, setListM1] = useState([
    { id: 1, nom: "Discussions", clanaM: "fas fa-comments" },
    { id: 5, nom: "Service", clanaM: "fas fa-cogs" },
    { id: 7, nom: "Inscription", clanaM: "fa-regular fa-user" },
    { id: 3, nom: "Notification", clanaM: "far fa-bell" },
    { id: 8, nom: "Connexion", clanaM: "fa-solid fa-user" },
    { id: 9, nom: "ContactDev", clanaM: "fa-solid fa-address-book" },
    { id: 10, nom: "TableDeBord", clanaM: "fas fa-tachometer-alt" }
  ]);

  const [clickedIndex, setClickedIndex] = useState(null);

  const ajouterClasse = (index) => {
    setClickedIndex(index);
    // Faites défiler la page vers le haut lorsqu'un élément est cliqué
    window.scrollTo(0, 0);
  };

  const retrait = () => {
    setClickedIndex("");
  };

  return (
    <div className="NavBarre">
      <Link to="/" onClick={() => retrait()}>
        <div className="logo" title="Accueil">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="list">
        <ul>
          {listM1.map((item, index) => (
            <li
              key={item.id}
              className={index === clickedIndex ? 'ma-classe-ajout' : ''}
            >
              <Link to={`/${item.nom}`} onClick={() => ajouterClasse(index)}>
                <i className={item.clanaM}></i>
                {item.nom}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
