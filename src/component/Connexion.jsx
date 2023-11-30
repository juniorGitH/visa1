import React from 'react';
import gmail from '../img/gmail.png';
import General from './General';
import { Link } from 'react-router-dom';
export default function Connexion() {
  return (
    <>
    
    <div className="pI">
      <div className="auth-container">
        <h2>Connexion</h2>
        <br /> <br />
        <form className="auth-form">
          <input type="text" placeholder="Nom d'utilisateur ou Gmail" required />
          <input type="password" placeholder="Mot de passe" required />
          <button className="auth-button" type="submit">
            Connexion
          </button>
        </form>
        <div className="or-divider">OU</div>
        <button className="google-button">
          <img className="google-icon" src={gmail} alt="Gmail Logo" />
          Utiliser Gmail
        </button>
        <br />
        
        <Link to="/Inscription" className="or-divider">
          Pas de compte ?
        </Link>
      </div>
    </div>
    <General/>
    </>
  );
}
