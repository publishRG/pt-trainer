import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa"; // Importa le icone di Facebook, Instagram e Email da react-icons

import "./Footer.css";

const Footer = () => {
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="footer" id="contatti">
      {" "}
      {/* Aggiungi l'id "contatti" al footer */}
      <div className="footer-links">
        <a href="mailto:gianluigiaiello.pt@gmail.com">
          <FaEnvelope className="log" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={{ width: "120px", height: "60px" }} />{" "}
          {/* Utilizza l'icona di Facebook */}
        </a>{" "}
        <a
          color="coral"
          href="https://instagram.com/gianluigiaiello_fitness_coach?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className="log2"
            style={{ width: "120px", height: "60px" }}
          />{" "}
          {/* Utilizza l'icona di Instagram */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
