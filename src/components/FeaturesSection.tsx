export default function FeaturesSection() {
  const features = [
    {
      title: "Automação Empresarial com IA",
      description: "Fluxos inteligentes que se adaptam ao seu negócio, integrando sistemas e otimizando processos automaticamente.",
      icon: "🤖",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Desenvolvimento Web Avançado",
      description: "Sites responsivos, rápidos e otimizados para conversão, com tecnologias modernas e design profissional.",
      icon: "🌐",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      title: "Apps Mobile Inteligentes",
      description: "Aplicativos nativos e híbridos com IA integrada, prontos para escalar seu negócio no mobile.",
      icon: "📱",
      gradient: "from-teal-400 to-green-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header da seção */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tecnologia que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Impulsiona
            </span>{' '}
            Resultados
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluções personalizadas que transformam desafios em oportunidades de crescimento
          </p>
        </div>

        {/* Grid de features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                {feature.description}
              </p>
              
              <div className="flex items-center text-green-400 font-medium group-hover:text-green-300 transition-colors">
                Saiba mais
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
