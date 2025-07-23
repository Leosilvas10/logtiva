export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative overflow-hidden">
      {/* Efeitos de fundo decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20">
        {/* Badge/Tag superior */}
        <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          Seu Assistente de Automação com IA
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Simplifique sua empresa com{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
            Automação e IA
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Automatize processos, desenvolva websites e aplicativos inteligentes. 
          Ganhe produtividade e integre todos seus canais com nossa tecnologia de ponta.
        </p>

        {/* Botão principal */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-xl shadow-green-500/25 flex items-center">
            Solicitar Proposta Gratuita
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>

        {/* Indicadores de benefícios */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 border border-green-500/30">
              <span className="text-green-400 text-xl">⚡</span>
            </div>
            <p className="text-gray-300 text-sm">Automação Inteligente</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 border border-green-500/30">
              <span className="text-green-400 text-xl">🚀</span>
            </div>
            <p className="text-gray-300 text-sm">Desenvolvimento Rápido</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 border border-green-500/30">
              <span className="text-green-400 text-xl">📈</span>
            </div>
            <p className="text-gray-300 text-sm">Resultados Mensuráveis</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
