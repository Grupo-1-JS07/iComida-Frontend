import type Restaurante from "../../models/Restaurante";
import fundoRestaurante from "../../assets/fundorestau.jpg";
import {
  FaHamburger,
  FaPizzaSlice,
  FaCoffee,
  FaLeaf,
  FaUtensils,
  FaStar,
} from "react-icons/fa";

const restaurantes: Restaurante[] = [
  {
    id: 1,
    nome: "Café Aurora",
    endereco: "Rua das Laranjeiras, 1287",
    cnpj: "12.345.678/0001-90",
    telefone: "(11) 3456-7890",
    imagem: "imagemRestaurante1.png",
    categoria: "Cafés",
    avaliacao: 4.5,
  },
  {
    id: 2,
    nome: "Sabor da Casa",
    endereco: "Avenida das Palmeiras, 452",
    cnpj: "98.765.432/0001-55",
    telefone: "(11) 99876-5432",
    imagem: "imagemRestaurante2.png",
    categoria: "Todos",
    avaliacao: 4.1,
  },
  {
    id: 3,
    nome: "Burger Station",
    endereco: "Rua das Flores, 789",
    cnpj: "45.678.910/0001-22",
    telefone: "(11) 91234-5678",
    imagem: "imagemRestaurante3.png",
    categoria: "Hambúrgueres",
    avaliacao: 5.0,
  },
  {
    id: 4,
    nome: "La Forneria Paulista",
    endereco: "Praça Itália, 101",
    cnpj: "12.345.678/0001-99",
    telefone: "(11) 99876-5432",
    imagem: "imagemRestaurante4.png",
    categoria: "Pizzas",
    avaliacao: 4.7,
  },
  {
    id: 5,
    nome: "Satori Sushi Lounge",
    endereco: "Avenida Brasil, 202",
    cnpj: "33.987.654/0001-88",
    telefone: "(11) 93456-7890",
    imagem: "imagemRestaurante5.png",
    categoria: "Japonesa",
    avaliacao: 4.3,
  },
  {
    id: 6,
    nome: "Verde & Vital",
    endereco: "Rua Verde, 303",
    cnpj: "77.123.456/0001-44",
    telefone: "(11) 98765-4321",
    imagem: "imagemRestaurante6.png",
    categoria: "Saúdaveis",
    avaliacao: 4.8,
  },
];

const filtros = [
  { nome: "Todos", icone: FaUtensils },
  { nome: "Hambúrgueres", icone: FaHamburger },
  { nome: "Pizzas", icone: FaPizzaSlice },
  { nome: "Japonesa", icone: FaStar },
  { nome: "Saúdaveis", icone: FaLeaf },
  { nome: "Cafés", icone: FaCoffee },
];

function Restaurantes() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen text-white p-8"
      style={{ backgroundImage: `url(${fundoRestaurante})` }}
    >
      <div
        className="bg-black/40 backdrop-blur-md rounded-3xl p-10 
                   border border-solid border-cyan-500/50 shadow-[0_0_20px_rgba(50,200,255,0.7)] 
                   w-full max-w-6xl h-[80vh] flex flex-col md:flex-row gap-6"
      >
        {/* Barra lateral de filtros */}
        <aside className="w-full md:w-1/4 p-4 bg-gray-800/70 rounded-2xl flex flex-col gap-4">
          <h2 className="text-xl font-bold text-cyan-400 mb-4">Categorias</h2>
          {filtros.map((filtro, index) => (
            <button
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg text-lg text-gray-300 
                         hover:bg-cyan-600/30 transition-colors duration-200"
            >
              <filtro.icone className="text-cyan-400" />
              <span>{filtro.nome}</span>
            </button>
          ))}
        </aside>

        {/* Conteúdo principal com a lista de restaurantes */}
        <main className="flex-1 p-4 bg-gray-800/70 rounded-2xl">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 mb-6">
            Restaurantes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto h-[90%] pr-4">
            {restaurantes.map((restaurante) => (
              <div
                key={restaurante.id}
                className="bg-gray-700/70 rounded-lg p-4 text-center group transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 hover:shadow-lg"
              >
                <div className="relative w-full h-40 rounded-lg mx-auto overflow-hidden border-2 border-transparent transition-all duration-300 group-hover:border-cyan-300">
                  <img
                    src={
                      new URL(
                        `../../assets/${restaurante.imagem}`,
                        import.meta.url
                      ).href
                    }
                    alt={restaurante.nome}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cyan-600/30 rounded-lg opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                </div>

                <h3 className="text-xl font-semibold mt-4 text-gray-300">
                  {restaurante.nome}
                </h3>
                <span className="text-sm text-gray-400">
                  {restaurante.categoria}
                </span>
                <div className="flex items-center justify-center mt-2 text-yellow-400">
                  <FaStar />
                  <span className="ml-1 text-gray-300">
                    {restaurante.avaliacao}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Restaurantes;
