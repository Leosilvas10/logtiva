import Link from 'next/link';

/**
 * Rodapé com fundo escuro e detalhes em verde
 */
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Seção principal do footer */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 mb-8 items-start justify-start">
          
          {/* Coluna da empresa */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="Logtiva Logo" className="w-28 h-28 object-contain" />
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md break-words">
              Soluções inteligentes em automação empresarial, desenvolvimento de websites e aplicativos. Transformamos processos com IA para impulsionar seu negócio.
            </p>
            
            {/* Redes sociais */}
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-200 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-200 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-200 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.082.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna de serviços */}
          <div>
            <div className="flex flex-col items-start mb-6">
              <h3 className="text-white font-semibold text-lg mb-6 relative">
                Serviços
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              </h3>
              <ul className="space-y-4">
              <li>
                <Link className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center group" href="/servicos">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Automação com IA
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center group" href="/servicos">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Desenvolvimento Web
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center group" href="/servicos">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Apps Mobile
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center group" href="/beneficios">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Consultoria Tech
                </Link>
              </li>
              </ul>
            </div>
          </div>

          {/* Coluna de links úteis */}
          <div>
            <div className="flex flex-col items-start mb-6">
              <h3 className="text-white font-semibold text-lg mb-6 relative text-left">
                Links Úteis
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              </h3>
              <ul className="space-y-4 pl-0 text-left">
              <li>
                <Link className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center group" href="/">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center group" href="/beneficios">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Benefícios
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center group" href="/contato">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contato
                </Link>
              </li>
              </ul>
            </div>
          </div>

          {/* Coluna de contato */}
          <div>
            <div className="flex flex-col items-start mb-6">
              <h3 className="text-white font-semibold text-lg mb-6 relative">
                Contato
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              </h3>
              <div className="space-y-4">
              <a href="mailto:contato@logtiva.com" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center group">
                <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                logtiva@gmail.com
              </a>
              <a href="tel:+5511999999999" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center group">
                <svg className="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                (31) 99199-8938
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* Seção legal e copyright */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2025 Logtiva - Todos os direitos reservados.</p>
            </div>
            
            {/* Links legais */}
            <nav className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link className="text-gray-500 hover:text-green-400 transition-colors duration-200" href="/privacidade">
                Política de Privacidade
              </Link>
              <Link className="text-gray-500 hover:text-green-400 transition-colors duration-200" href="/lgpd">
                LGPD
              </Link>
              <Link className="text-gray-500 hover:text-green-400 transition-colors duration-200" href="/termos">
                Termos de Uso
              </Link>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Linha decorativa no final */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
    </footer>
  );
}
