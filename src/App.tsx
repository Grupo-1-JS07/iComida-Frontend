import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Produtos from './components/pages/Produtos';
import Categoria from './components/pages/Categoria';
function App() {
  return (
    <>
    
      <Navbar />
    <div className="mim-h-[80vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre-nos" element={<Sobre />} />
        <Route path="/categorias" element={<Categoria />} />
      </Routes>
    </div>
      <Footer />
    
    </>
  )
}

export default App;