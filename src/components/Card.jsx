import "./Card.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import run from "./run.png";
import dumbel from "./dumbel.png";
import gg from "./gg.png";
import g1 from "./g1.png";
import foto2 from "./foto2.png";
// import foto3 from "./foto3.png";

const CardPricing = () => {
  // Stile inline per l'immagine di sfondo

  return (
    <div className="card-container" id="sezione2">
      {" "}
      <div className="c1">
        <div
          className="card"
          style={{
            backgroundImage: `url(${dumbel})`, // Imposta l'immagine di sfondo
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="title">ALLENAMENTO AL CENTRO</h3>
          <p className="textcard">
            Programma pensato e studiato per le tue esigenze psicofisiche,
            tenendo conto dei livelli di stressor e della tua quotidianità con
            metodo scientifico.
          </p>
        </div>

        {/* Rimuovi lo stile per l'immagine di sfondo nelle altre card */}
        <div
          className="card"
          style={{
            backgroundImage: `url(${g1})`, // Imposta l'immagine di sfondo
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="title">STEP-BY-STEP</h3>
          <p className="textcard">
            Ci alleniamo con i pesi e miglioriamo di allenamento in allenamento
            in maniera sostenibile
          </p>
        </div>
        <div
          className="card"
          style={{
            backgroundImage: `url(${foto2})`, // Imposta l'immagine di sfondo
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="title">PASSIONE E DEDIZIONE</h3>
          <p className="textcard">
            Vivo di sport, amo quello che faccio dando sempre il massimo!
          </p>
        </div>
      </div>
      <div className="c2">
        <div
          className="card"
          style={{
            backgroundImage: `url(${run})`, // Imposta l'immagine di sfondo
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="title">SUPERVISIONE</h3>
          <br />
          <p className="textcard">
            Monitoro l'andamento della performance e dell'elasticità per essere
            sempre sulla strada giusta
          </p>
        </div>

        {/* Rimuovi lo stile per l'immagine di sfondo nell'ultima card */}
        <div
          className="card"
          style={{
            backgroundImage: `url(${gg})`, // Imposta l'immagine di sfondo
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="title">OLTRE LE DIFFICOLTÀ</h3>
          <p className="textcard">
            I miei programmi di allenamento puntano ad un obiettivo, pronti ad
            essere adattati ad ogni evenienza.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPricing;
