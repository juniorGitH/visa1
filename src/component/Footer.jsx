import React from 'react';

export default function Footer() {
  // state (état, données)

  // affichage (render)
  return (
    <footer>
      <div className="footer-container">
        <div className="contact-info">
          <h4>Coordonnées</h4>
          <p>158 HDN Hedzranawoé, Lomé</p>
          <p>Phone: +228 935 647 75</p>
        </div>
        <div className="social-media">
          <h4>Suis-moi</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="rating">
          <h4>Évaluer le site</h4>
          <form action="#">
            <input type="radio" id="star5" name="rating" value="5" />
            <label htmlFor="star5" title="5 stars"><i className="fa-regular fa-star"></i></label>
            <input type="radio" id="star4" name="rating" value="4" />
            <label htmlFor="star4" title="4 stars"><i className="fa-regular fa-star"></i></label>
            <input type="radio" id="star3" name="rating" value="3" />
            <label htmlFor="star3" title="3 stars"><i className="fa-regular fa-star"></i></label>
            <input type="radio" id="star2" name="rating" value="2" />
            <label htmlFor="star2" title="2 stars"><i className="fa-regular fa-star"></i></label>
            <input type="radio" id="star1" name="rating" value="1" />
            <label htmlFor="star1" title="1 star"><i className="fa-regular fa-star"></i></label>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Emmanuel AMELA. Tous les droits sont réservés.</p>
      </div>
    </footer>
  );
}
