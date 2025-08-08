import fundoTime from '../../assets/fundorestau.jpg';

// Importe as fotos dos integrantes aqui
import fotoSara from '../../assets/sara.jpg';
import Kannanda from '../../assets/kannanda.jpg';
import Sâmara from '../../assets/Sâmara.jpg';
import Rafael from '../../assets/Rafael.jpg';
import Monique from '../../assets/Monique.jpg';
import Brenndha from '../../assets/Brenndha.jpg';
import Daniel from '../../assets/Daniel.jpg';

function SobreNos() {
  const teamMembers = [
            { name: 'Daniel', photo: Daniel, bio: 'Compreende as necessidades dos nossos usuários para criar uma jornada de compra perfeita.' },
      { name: 'Brenndha', photo: Brenndha, bio: 'Nossa ligação com a gastronomia. Seleciona os melhores restaurantes.' },
    { name: 'kannanda', photo: Kannanda, bio: 'Visão e inovação para o futuro do delivery' },
  { name: 'Monique', photo: Monique, bio: 'Traduz a nossa paixão por tecnologia em campanhas de marketing.' },
      { name: 'Rafael', photo: Rafael, bio: 'Otimiza rotas de voo e garante que cada pacote chegue ao seu destino.' },
      { name: 'Sâmara', photo: Sâmara, bio: 'Arquiteto dos algoritmos de IA que gerenciam nossa frota de drones.' },
  { name: 'Sara', photo: fotoSara, bio: 'Responsável pela estética futurista da nossa plataforma.' }
  ];

return (
    <div
      className="bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start text-white min-h-screen p-4 sm:p-8"
      style={{ backgroundImage: `url(${fundoTime})` }}
    >
      <div className="bg-black/50 rounded-xl p-6 sm:p-10 text-center w-full max-w-4xl mb-12 backdrop-blur-sm">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 mb-6 drop-shadow-md">
          Sobre Nós
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-8 drop-shadow-md">
          Bem-vindo ao Icomida, a sua solução de delivery com um toque do futuro! Somos uma equipe de jovens entusiastas da tecnologia apaixonados por gastronomia e inovação.
        </p>
      </div>

      <section className="w-full max-w-6xl bg-gray-900/70 rounded-xl p-6 sm:p-8 backdrop-blur-md">
        <h2 className="text-3xl font-semibold text-cyan-400 mb-6 text-center drop-shadow-md">
          Nosso Time
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800/70 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto overflow-hidden border-2 border-cyan-300">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cyan-600/30 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mt-3 text-gray-300">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SobreNos;