import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from "./components/Navbar"; // Assicurati che il percorso sia corretto
import Home from "./components/Home"; // Importa il componente per la Home
import Servizi from "./components/Servizi"; // Importa il componente per i Servizi
import Chisono from "./components/Chisono"; // Importa il componente per Chi Sono
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/chisono" element={<Chisono />} />
        {/* Utilizza un Route diverso per la sezione Contatti, in base alle tue esigenze */}
      </Routes>
      <WhatsAppButton phoneNumber="+393934361743" />
      <Footer />
    </Router>
  );
}

export default App;
