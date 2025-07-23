import Link from 'next/link';

/**
 * Cabeçalho moderno com fundo escuro e elementos verdes
 */
export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-md border-b border-gray-800/50 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logtiva Logo" className="w-10 h-10 object-contain" />
          <div className="font-bold text-2xl text-white tracking-tight">
            Logtiva
          </div>
        </div>
        
        {/* Menu de navegação principal */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium" href="/">
            Início
          </Link>
          <Link className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium" href="/servicos">
            Serviços
          </Link>
          <Link className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium" href="/beneficios">
            Benefícios
          </Link>
          <Link className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium" href="/contato">
            Contato
          </Link>
        </nav>

        {/* Botão CTA */}
        <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg shadow-green-500/25">
          Solicitar Proposta
        </button>

        {/* Menu mobile (hamburger) */}
        <button className="lg:hidden text-gray-300 hover:text-green-400 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
