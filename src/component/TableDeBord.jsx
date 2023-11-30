import React from 'react';
import General from './General';

export default function TableDeBord() {
  return (
    <>
    <div>
    <div className="project-table">
      <table>
        <thead>
          <tr>
            <th>Nom du Projet</th>
            <th>Participant</th>
            <th>Temps de Début</th>
            <th>Durée</th>
            <th>Coût</th>
            <th>Type de Projet</th>
            <th>État du Projet</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Projet A</td>
            <td>John Doe</td>
            <td>2023-01-01</td>
            <td>3 mois</td>
            <td>10 000 €</td>
            <td>Web</td>
            <td>En cours</td>
            <td>
              <button onClick={() => console.log("Demander Modification")}>
                Demander Modification
              </button>
            </td>
          </tr>
          <tr>
            <td>Projet B</td>
            <td>Jane Doe</td>
            <td>2023-02-15</td>
            <td>2 mois</td>
            <td>8 000 €</td>
            <td>Application Mobile</td>
            <td>Terminé</td>
            <td>
              <button onClick={() => console.log("Télécharger")}>
                Télécharger
              </button>
            </td>
          </tr>
          <tr>
            <td>Projet A</td>
            <td>John Doe</td>
            <td>2023-01-01</td>
            <td>3 mois</td>
            <td>10 000 €</td>
            <td>Web</td>
            <td>En cours</td>
            <td>
              <button onClick={() => console.log("Demander Modification")}>
                Demander Modification
              </button>
            </td>
          </tr>
          <tr>
            <td>Projet A</td>
            <td>John Doe</td>
            <td>2023-01-01</td>
            <td>3 mois</td>
            <td>10 000 €</td>
            <td>Web</td>
            <td>En cours</td>
            <td>
              <button onClick={() => console.log("Demander Modification")}>
                Demander Modification
              </button>
            </td>
          </tr>
          {/* Ajoutez d'autres lignes pour plus de projets */}
        </tbody>
      </table>
    </div>
    </div>
     <General />
     </>
  );
}
