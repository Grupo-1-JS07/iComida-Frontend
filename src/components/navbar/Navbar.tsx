import { Link } from 'react-router-dom'
import { ShoppingCartSimple, UserCircle } from '@phosphor-icons/react'

function Navbar() {
  return (
    <div className="w-full bg-gray-950/70 backdrop-blur-md text-white flex justify-center py-4 border-b border-gray-800 h-16 fixed top-0 left-0 z-50">
      <div className="container flex justify-between items-center text-lg">
        <Link to='/home' className='text-3xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600'>
          ICOMIDA
        </Link>

        <div className='flex gap-6 items-center'>
          <Link to='/home' className='hover:text-cyan-400 transition-colors'>Home</Link>
          <Link to='/produtos' className='hover:text-cyan-400 transition-colors'>Produtos</Link>
          <Link to='/categorias' className='hover:text-cyan-400 transition-colors'>Categorias</Link>
          <Link to='/sobre-nos' className='hover:text-cyan-400 transition-colors'>Sobre Nós</Link>
          
          <div className='flex gap-2 items-center cursor-pointer hover:text-cyan-400 transition-colors'>
            <ShoppingCartSimple size={24} />
            <span>Carrinho</span>
          </div>

          <div className='flex gap-2 items-center cursor-pointer hover:text-cyan-400 transition-colors'>
            <UserCircle size={24} />
            <span>Entrar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;