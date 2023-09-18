import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = ({ phoneNumber }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, "_blank");
  };

  const openTooltip = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 1500); // Chiudi il tooltip dopo 1.5 secondi
  };

  useEffect(() => {
    const interval = setInterval(openTooltip, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="whatsapp-container">
      <div
        className={`whatsapp-button ${isHovered ? "hovered" : ""}`}
        onClick={handleWhatsAppClick}
        onMouseEnter={openTooltip}
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span className={`tooltip-text ${isHovered ? "visible" : ""}`}>
          <h3>Contattami</h3>
        </span>
      </div>
    </div>
  );
};

export default WhatsAppButton;
