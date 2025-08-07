import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-cover bg-center bg-no-repeat flex flex-col justify-end text-white p-8 min-h-[calc(100vh-64px)]">
      <div className="text-left w-2/3 md:w-1/2 bg-black/50 rounded-lg p-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 mb-4 drop-shadow-md">
          A tecnologia do sabor
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 drop-shadow-md cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:scale-105">
          Hackeando a sua fome - O cardápio do amanhã!
        </p>
        <Link
          to="/restaurantes"
          className="bg-gradient-to-r from-cyan-400 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Ver Restaurantes
        </Link>
      </div>
    </div>
  );
}

export default Home;
