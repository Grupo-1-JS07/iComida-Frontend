import fundoTime from "./assets/fundo-futurista.png";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Restaurantes from "./components/pages/Restaurantes";
import SobreNos from "./components/pages/SobreNos";


function App() {
  return (
    <>
      <Navbar />

      <div
        className="min-h-[80vh]"
        style={{ backgroundImage: `url(${fundoTime})` }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/restaurantes" element={<Restaurantes />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
