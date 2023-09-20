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

{/*const videoArray = [
  { src: "https://youtu.be/embed/rUwqBEyGHdw?si=URWFHQ3l5k2_i5wV" },
  { src: "https://youtu.be/embed/Rd4Xw5uOqYY?si=d6dsp3W7jVLib3zu" },
  { src: "https://youtu.be/embed/fotU1_zaG2Q?si=GQedfafCtRO2RjRK" },
  { src: "https://youtu.be/embed/t7l5ZCDlRhk?si=fAIdlescCVwMtHGu" }
];*/}


  return (
    <div className="home-container">
      <Container />
      <div>
        {/*<VideoWindow video1={{ src: "https://youtube.com/shorts/5ocSgme_MBE?si=AKAv2iUgb8JnmrkI" }} />*/}
        <iframe width="560" height="315" src="https://youtube.com/embed/5ocSgme_MBE?si=KK1UXn03zssjdLeN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
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
      {/*<VideoGrid videos={videoArray} />*/}
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rUwqBEyGHdw?si=hBPGyF43Yzu2Eb6t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Rd4Xw5uOqYY?si=3hToNxxFpy8bV1rJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fotU1_zaG2Q?si=CLKaYTRwi0fyRaft" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/t7l5ZCDlRhk?si=ZNE_uXIiSPCmXkSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
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
