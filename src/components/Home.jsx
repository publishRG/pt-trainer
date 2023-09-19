import React from "react";
import Container from "./Container";
import VideoWindow from "./VideoWindow";
import Container2 from "./Container2";
import CardPricing from "./Card";
import ImageCompSlider from "./ImageCompSlider";
import VideoGrid from "./VideoGrid";

import ca1 from "./ca1.png";
import ca2 from "./ca2.png";
import cam3 from "./cam3.png";
import cam4 from "./cam4.png";
import cam5 from "./cam5.png";
import cam6 from "./cam6.png";
import cam7 from "./cam7.png";
import cam8 from "./cam8.png";
// import cam8 from "./cam8.png";

import "./Home.css"; // Assumi che questo sia il tuo file di stile CSS per Home

const Home = () => {
  const imageStyle = {
    maxHeight: "80px", // Imposta l'altezza massima desiderata per le immagini
  };

const videoArray = [
  { src: "src/components/v1.mp4" },
  { src: "src/components/v2.mp4" },
  { src: "src/components/v3.mp4" },
  { src: "src/components/v4.mp4" }
];


  return (
    <div className="home-container">
      <Container />
      <div>
        <VideoWindow video1={{ src: "src/components/video1.mp4" }} />
      </div>
      <Container2 />
      <div className="titleImageComp"></div>

      <CardPricing />

      <div className="contSlide">
        <div className="cont">
          <h1 className="main-heading">Cambiamenti reali</h1>
        </div>

        <div className="sliderRow">
          <ImageCompSlider style={imageStyle} im1={ca1} im2={ca2} />
          <ImageCompSlider style={imageStyle} im1={cam6} im2={cam5} />
        </div>
        <div className="sliderRow">
          <ImageCompSlider style={imageStyle} im1={cam3} im2={cam4} />
          <ImageCompSlider style={imageStyle} im1={cam7} im2={cam8} />
        </div>
      </div>
      <div className="cont">
        <h1 className="main-heading">
          Storie di <span>successo</span>
        </h1>
      </div>
      <VideoGrid videos={videoArray} />
      <div className="additional-info">
        <p>
          <span>+</span> 12.320 ore di personal training
        </p>
        <p>
          <span>+</span> 7 anni di esperienza
        </p>
        <p>
          <span>+</span> 250 clienti soddisfatti
        </p>
        <p>
          <span>+</span> 24 anni di attività sportiva
        </p>
      </div> 
    </div>
  );
};

export default Home;
