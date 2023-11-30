import React from 'react';
import jr2 from '../img/jr2.png';
export default function Contact() {
  return (
    <div className="page d">
      <div className="container">
        <h2 className="h2" id="contact">
          Contactez le dev
        </h2>
        <form
          action="mailto:votreadresse@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Adresse e-mail :</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" className="button">
            Envoyer
          </button>
        </form>
      </div>
      <div className="cadr">
      <img src={jr2} alt="" />
      </div>
    </div>
  );
}
