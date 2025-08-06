import fundoFuturista from "./assets/fundo-Futurista.png";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Categoria from "./components/pages/Categoria";
import Restaurantes from "./components/pages/Restaurantes";
function App() {
  return (
    <>
      <Navbar />
      <div
        className="mim-h-[80vh]"
        style={{ backgroundImage: `url(${fundoFuturista})` }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/restaurantes" element={<Restaurantes />} />
          <Route path="/sobre-nos" element={<Sobre />} />
          <Route path="/categorias" element={<Categoria />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
