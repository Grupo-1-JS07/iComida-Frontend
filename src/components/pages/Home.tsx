import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="bg-[url('/src/assets/bg-home.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-end text-white p-8 min-h-[calc(100vh-64px)]"
    >
      <div className="text-left w-full md:w-2/3 lg:w-1/2 bg-black/50 rounded-xl p-6 backdrop-blur-sm">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 mb-4 drop-shadow-lg">
          A tecnologia do sabor
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 drop-shadow-md cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:scale-105">
          Hackeando a sua fome - O cardápio do amanha!
        </p>
        <Link
          to="/restaurantes"
          className="inline-block bg-gradient-to-r from-cyan-400 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
        >
          Ver Restaurantes
        </Link>
      </div>
    </div>
  );
}

export default Home;
