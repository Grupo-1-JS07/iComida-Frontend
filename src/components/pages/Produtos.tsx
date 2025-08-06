import type Restaurante from "../../models/Restaurante";

const restaurantes: Restaurante[] = [
    {
        id: 1,
        nome: "Restaurante Exemplo",
        endereco: "Rua Exemplo, 123",
        cnpj: "00.000.000/0000-00",
        telefone: "(00) 0000-0000"
    },
    {
        id: 2,
        nome: "Sabor da Casa",
        endereco: "Avenida Central, 456",
        cnpj: "11.111.111/1111-11",
        telefone: "(11) 1111-1111"
    },
    {
        id: 3,
        nome: "Delícias do Chef",
        endereco: "Rua das Flores, 789",
        cnpj: "22.222.222/2222-22",
        telefone: "(22) 2222-2222"
    },
    {
        id: 4,
        nome: "Cantina Italiana",
        endereco: "Praça Itália, 101",
        cnpj: "33.333.333/3333-33",
        telefone: "(33) 3333-3333"
    },
    {
        id: 5,
        nome: "Churrascaria Boi na Brasa",
        endereco: "Avenida Brasil, 202",
        cnpj: "44.444.444/4444-44",
        telefone: "(44) 4444-4444"
    },
    {
        id: 6,
        nome: "Veggie Gourmet",
        endereco: "Rua Verde, 303",
        cnpj: "55.555.555/5555-55",
        telefone: "(55) 5555-5555"
    }
];

function Produtos() {
  return (

    <div>
      <h1></h1>
      {restaurantes.map((restaurante,) => (
                    <div className='border flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white justify-between'>
            <header className='py-2 px-6 bg-cyan-600 text-white font-bold text-2xl w-full text-center'>
                {restaurante.nome}
            </header>
            <p className='p-2 text-2xl bg-fuchsia-600 h-full '>{restaurante.endereco}</p>
            <div className='p-1 bg-emerald-700 flex flex-col gap-2 w-full text-end'>
                {restaurante.telefone}
            </div>
            </div>
      ))
      }
    </div>
  );
}

export default Produtos;