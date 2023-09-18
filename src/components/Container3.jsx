import "./Container3.css";

const Container3 = () => {
  return (
    <div className="container-3">
      <div className="column">
        <h2 className="titlec">Personal Training</h2>
        <div className="content">
          <ul className="custom-list">
            <li> Consulenza inziale (30 min circa)</li>
            <li> Centimetria e peso</li>
            <li> Check ogni 6/8 settimane</li>
            <li> Consigli alimentari</li>
            <li> Supporto wa</li>
            <li> Sessioni di allenamento di 1 h</li>
            <li> Frequenza allenamenti sett (almeno 2)</li>
            <li> Abbonamento minimo 4 mesi</li>
            <li>
              Servizio allenamento online se sei Impossibilitato a raggiungermi
              in struttura ci alleneremo in collegamento in diretta in
              piattaforma
            </li>
            <li>
              Possibilità di accedere al mio canale you tube per rivedere le
              esecuzioni degli esercizi fatte da me
            </li>
          </ul>
        </div>
      </div>
      <div className="column">
        <h2 className="titlec">Coaching Online</h2>
        <div className="content">
          <ul className="custom-list">
            <li> Consulenza iniziale (30 min circa)</li>
            <li> Centimetria e peso</li>
            <li>Proggrammazione minima per 3 mesi</li>
            <li>
              {" "}
              Sessione di personal training introduttiva ed ad ogni cambio
              scheda di 2 ore circa
            </li>

            <li>
              {" "}
              Scheda interattiva con video-esecuzione esercizi e descrizioni
              personalizzate per avere info utili allo svolgimento
            </li>
            <li>
              {" "}
              video spiegazione della scheda su piattaforma sempre disponibile
            </li>
            <li> check ogni 6 settimane circa</li>
            <li>
              Variazioni scheda per non perdere di vista l’obiettivo allenandoci
              sempre senza scuse
            </li>
            <li>Supporto wa</li>
            <li>Consigli alimentari</li>
            <li>
              Possibilità di accedere al mio canale you tube per rivedere le
              esecuzioni degli esercizi fatte da me
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Container3;
