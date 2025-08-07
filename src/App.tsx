
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import SobreNos from './components/pages/sobrenós';


function App() {
  return (
    <>
      <Navbar />

    <div className="mim-h-[80vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos/>} />
      </Routes>
    </div>


      <Footer />
    </>
  );
}

export default App;
