import { useState } from "react";
import Nav from "../components/Nav";

/**
 * Contact:
 * Composant pour afficher la page de contact
 * située sur la route : "/contact".
 */
export default function Contact() {
  const [showDownload, setShowDownload] = useState(false);

  const handleShowCV = () => {
    // Affiche le CV dans un nouvel onglet
    window.open("/cv.pdf", "_blank");
    // Affiche le bouton de téléchargement
    setShowDownload(true);
  };

  return (
    <main>
      <Nav />
      <h1>À propos</h1>
      <h3 className="text-xl text-white opacity-90 max-w-3xl mb-8">Je suis Léa, développeuse web passionnée et créative.</h3>
      <p className="text-xl text-white opacity-90 max-w-3xl mt-8">
Titulaire d’un titre professionnel de Concepteur Développeur d'Applications    <br /> 
et d'un RNCP en Graphisme & Web Design,    <br />
j'ai développé des compétences solides en JavaScript, React, Node.js, PHP, SQL et Symfony.    <br /><br />Toujours motivée et autonome,    <br />je suis en constante quête de nouveaux défis    et de technologies à explorer.    <br />Aujourd’hui, je suis à la recherche d’une équipe dynamique    <br />avec laquelle je pourrais collaborer sur des projets innovants    <br />et ambitieux, alliant technique et créativité.
      </p>
      <p>
        <button
          onClick={handleShowCV}
          className="text-blue-500 hover:underline"
        >
          Voir mon CV
        </button>
      </p>
    </main>
  );
}
