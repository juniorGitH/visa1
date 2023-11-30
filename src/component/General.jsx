import React from 'react';
import Services from './Services'; // Assurez-vous que le chemin vers le composant Services est correct
import Competences from './Competences';
import Contact from './Contact';
import Footer from './Footer';

function General() {
  return (
    <>
      <Services />
      <Competences />
      <Contact />
      <Footer />
    </>
  );
}

export default General;
