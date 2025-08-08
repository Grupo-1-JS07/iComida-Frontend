import { Link } from "react-router-dom";
import { ShoppingCartSimple, UserCircle } from "@phosphor-icons/react";
import { useState } from "react";

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600">
          ICOMIDA
        </Link>

        {/* Botão do menu mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-cyan-400 focus:outline-none"
        >
          ☰
        </button>

        {/* Menu principal */}
        <nav className={`flex-col md:flex md:flex-row md:items-center gap-6 ${menuAberto ? "flex" : "hidden"} md:gap-8`}>
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link to="/restaurantes" className="hover:text-cyan-400 transition-colors">Restaurantes</Link>
          <Link to="/sobrenos" className="hover:text-cyan-400 transition-colors">Sobre Nós</Link>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="/carrinho">
              <ShoppingCartSimple size={24} className="text-cyan-400 hover:text-white transition-colors" />
            </Link>
            <Link to="/login">
              <UserCircle size={24} className="text-cyan-400 hover:text-white transition-colors" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;