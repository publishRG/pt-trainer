import Container3 from "./Container3";

import VideoWindow from "./VideoWindow";
import AlternatingPhotoText from "./AlternatingPhotoText";
import foto1 from "./foto1.png";
import foto2 from "./foto2.png";
import foto3 from "./foto3.png";
import "./Servizi.css";

const Servizi = () => {
  const data = [
    { photo: foto1, text: "Impara a muoverti con consapevolezza" },
    { photo: foto2, text: "Diventa più forte" },
    { photo: foto3, text: "Spingiti oltre i tuoi limiti" },
    // Aggiungi altri dati di riga qui
  ];
  return (
    <div>
      <div className="content-container">
        <br />
        <br />
        <br />
        <br />
        <h1 className="main-heading1">
          <span>Scegli</span>il tuo percorso
        </h1>
      </div>
      <div>
        {/*<VideoWindow video1={{ src: "https://youtube.com/embed/shorts/NcFzlmu_g50?si=dwtB3y6hGkDKKLBr" }}/>*/}
        <iframe width="315" height="560"
          src="https://youtube.com/embed/NcFzlmu_g50?si=ioF6APpHKTat4pjb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
      <Container3 />
      <div className="separator"></div>
      {data.map((item, index) => (
        <AlternatingPhotoText
          key={index}
          photo={item.photo}
          text={
            <h2 style={index === 0 ? { fontSize: "26px" } : {}}>{item.text}</h2>
          }
          position={index % 2 === 0 ? "left" : "right"}
        />
      ))}
      <div className="separator"></div>
    </div>
  );
};

export default Servizi;
