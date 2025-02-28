import { NavLink } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa"; // Import de l'icône enveloppe

export default function Nav() {
  const handleEmailClick = () => {
    window.location.href = "mailto:leadreamcoder@gmail.com";
  };

  return (
    <nav>
      <ul className="flex gap-5 px-5 py-10 text-slate-50 items-center"> {/* Ajout de items-center */}
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Projets</NavLink>
        </li>
        <li>
          <NavLink to="/contact">A propos</NavLink>
        </li>
        <li>
          <button
            onClick={handleEmailClick}
            className="flex items-center gap-2 text-white hover:underline" // Ajout de items-center pour aligner l'icône
          >
            <FaRegEnvelope size={20} /> {/* Taille d'icône ajustée à 20px pour correspondre */}
           
          </button>
        </li>
      </ul>
    </nav>
  );
}
