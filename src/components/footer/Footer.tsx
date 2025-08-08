import { GithubLogoIcon } from '@phosphor-icons/react'

function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center text-center">
        <p className="text-xl font-bold">Icomida | &copy; 2025</p>
        <p className="text-sm text-gray-400 mt-1">Acesse nosso GitHub:</p>
        <div className="mt-4">
          <a
            href="https://github.com/Grupo-1-JS07/iComida-Frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-all duration-300 transform hover:scale-125"
          >
            <GithubLogoIcon size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;