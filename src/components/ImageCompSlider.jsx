import React, { useState } from "react";
import CompareImage from "react-compare-image";

const ImageCompSlider = ({ im1, im2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageSliderStyles = {
    width: "100%", // Usa la larghezza del contenitore genitore
    maxWidth: "35vh", // Massima larghezza consentita per l'immagine
    height: "auto", // Altezza sarà adattata proporzionalmente
    marginBottom: "5vh",
    backgroundColor: "#a0a0a0", // Grigio
    backgroundImage: "linear-gradient(to bottom right, #a0a0a0, #6bb2a3)",
    display: "flex",
    justifyContent: "center", // Centra orizzontalmente
    padding: "5px",
    border: "1px solid rgb(99, 191, 176)",
    borderRadius: "5px",
    marginLeft: "2rem",
    transition: "transform 0.3s ease",

    transform: isHovered ? "scale(1.1)" : "scale(1)",
    overflow: "hidden", // Aggiungi overflow hidden per contenere l'immagine all'interno del div
  };

  const imageStyles = {
    objectFit: "cover", // Adatta l'immagine alla dimensione del div
    width: "100%", // Estende l'immagine per coprire l'intera larghezza
    height: "100%", // Estende l'immagine per coprire l'intera altezza
  };

  return (
    <div
      style={imageSliderStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CompareImage
        leftImage={im1}
        rightImage={im2}
        sliderLineWidth={2}
        leftImageCss={imageStyles} // Applica lo stile all'immagine
        rightImageCss={imageStyles} // Applica lo stile all'immagine
      />
    </div>
  );
};

export default ImageCompSlider;
