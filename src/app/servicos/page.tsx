import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PaginaServicos() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              Soluções Tecnológicas
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Serviços
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transforme sua empresa com soluções inteligentes em automação, 
              desenvolvimento web e aplicativos móveis. Tecnologia de ponta 
              para impulsionar seus resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Automação Empresarial com IA */}
            <div className="bg-gray-800/50 border border-gray-700/30 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                Automação Empresarial com IA
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Revolucione seus processos com automações inteligentes que se adaptam 
                ao seu negócio. Integração completa entre sistemas, redução de custos 
                operacionais e aumento significativo da produtividade.
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-lg font-semibold text-green-400">O que inclui:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Chatbots inteligentes para atendimento 24/7
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Automação de workflows e processos internos
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Integração entre CRM, ERP e outras plataformas
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Relatórios automáticos e análise de dados
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Automação de marketing e vendas
                  </li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <p className="text-green-400 font-bold text-lg">A partir de R$ 2.500</p>
                  <p className="text-green-300 text-sm">Investimento inicial</p>
                </div>
              </div>

              <button className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:bg-green-600">
                Solicitar Orçamento
              </button>
            </div>

            {/* Desenvolvimento Web */}
            <div className="bg-gray-800/50 border border-gray-700/30 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌐</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                Desenvolvimento Web
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Websites profissionais, responsivos e otimizados para conversão. 
                Desenvolvemos desde landing pages até plataformas complexas com 
                tecnologias modernas e design impactante.
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-lg font-semibold text-green-400">O que inclui:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Sites institucionais e landing pages
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    E-commerce completo com pagamentos integrados
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Sistemas web personalizados
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Otimização para SEO e velocidade
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Design responsivo para todos os dispositivos
                  </li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <p className="text-green-400 font-bold text-lg">A partir de R$ 1.800</p>
                  <p className="text-green-300 text-sm">Site profissional completo</p>
                </div>
              </div>

              <button className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:bg-green-600">
                Ver Portfólio
              </button>
            </div>

            {/* Aplicativos Mobile */}
            <div className="bg-gray-800/50 border border-gray-700/30 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                Aplicativos Mobile
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Apps nativos e híbridos para iOS e Android. Soluções completas 
                desde a concepção até a publicação nas lojas, com foco na 
                experiência do usuário e performance.
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-lg font-semibold text-green-400">O que inclui:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Apps nativos para iOS e Android
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Progressive Web Apps (PWA)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Integração com APIs e serviços externos
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Publicação nas lojas App Store e Play Store
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Dashboard administrativo completo
                  </li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <p className="text-green-400 font-bold text-lg">A partir de R$ 4.500</p>
                  <p className="text-green-300 text-sm">App completo para iOS/Android</p>
                </div>
              </div>

              <button className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:bg-green-600">
                Agendar Reunião
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nosso{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Processo
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Metodologia comprovada para garantir o sucesso do seu projeto
            </p>
          </div>

          <div className="space-y-12">
            {/* Fase 1 */}
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Descoberta e Análise</h3>
                <p className="text-gray-300 leading-relaxed">
                  Reunião inicial para entender suas necessidades, objetivos e desafios. 
                  Análise do seu negócio atual e identificação das melhores oportunidades 
                  de automação e otimização.
                </p>
                <div className="mt-3 text-green-400 text-sm">📅 1-2 dias</div>
              </div>
            </div>

            <div className="w-px h-12 bg-green-500 mx-8"></div>

            {/* Fase 2 */}
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Planejamento e Arquitetura</h3>
                <p className="text-gray-300 leading-relaxed">
                  Criação da arquitetura técnica, definição das tecnologias, wireframes 
                  e protótipos. Elaboração do cronograma detalhado e especificações 
                  funcionais do projeto.
                </p>
                <div className="mt-3 text-green-400 text-sm">🎯 3-5 dias</div>
              </div>
            </div>

            <div className="w-px h-12 bg-green-500 mx-8"></div>

            {/* Fase 3 */}
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Desenvolvimento e Testes</h3>
                <p className="text-gray-300 leading-relaxed">
                  Desenvolvimento da solução com entregas semanais para acompanhamento. 
                  Testes rigorosos de funcionalidade, performance e segurança. 
                  Feedback contínuo e ajustes conforme necessário.
                </p>
                <div className="mt-3 text-green-400 text-sm">⚡ 2-8 semanas</div>
              </div>
            </div>

            <div className="w-px h-12 bg-green-500 mx-8"></div>

            {/* Fase 4 */}
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Entrega e Suporte</h3>
                <p className="text-gray-300 leading-relaxed">
                  Deploy da solução, treinamento da sua equipe e documentação completa. 
                  Suporte técnico gratuito por 3 meses e planos de manutenção 
                  personalizados para garantir o funcionamento perfeito.
                </p>
                <div className="mt-3 text-green-400 text-sm">🚀 1-2 dias + suporte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tecnologias{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Modernas
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Utilizamos as ferramentas mais avançadas do mercado para criar soluções robustas e escaláveis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🎨</span>
                </span>
                Frontend
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">React</span>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">Next.js</span>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">TypeScript</span>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">⚙️</span>
                </span>
                Backend
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">Node.js</span>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">Python</span>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">PostgreSQL</span>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Automação */}
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🤖</span>
                </span>
                Automação & IA
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">OpenAI</span>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">n8n</span>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">Zapier</span>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">Make</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cases de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Sucesso
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Resultados reais de projetos que transformaram empresas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case 1 */}
            <div className="bg-gray-900/50 border border-gray-700/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-lg">🏢</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">E-commerce de Roupas</h3>
                  <p className="text-green-400 text-sm">Automação Completa</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                Implementamos um sistema completo de automação para gestão de estoque, 
                atendimento via WhatsApp e integração com marketplaces.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                  <p className="text-green-400 font-bold text-lg">85%</p>
                  <p className="text-green-300 text-sm">Redução no tempo de atendimento</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                  <p className="text-green-400 font-bold text-lg">150%</p>
                  <p className="text-green-300 text-sm">Aumento nas vendas</p>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-gray-900/50 border border-gray-700/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-lg">🏥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Clínica Médica</h3>
                  <p className="text-green-400 text-sm">App de Agendamento</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                Desenvolvemos um aplicativo completo para agendamento de consultas, 
                prontuário eletrônico e lembretes automáticos.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                  <p className="text-green-400 font-bold text-lg">70%</p>
                  <p className="text-green-300 text-sm">Redução de no-shows</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                  <p className="text-green-400 font-bold text-lg">200%</p>
                  <p className="text-green-300 text-sm">Melhoria na organização</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos e Investimentos */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Planos e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Investimentos
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Escolha o plano ideal para o seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plano Básico */}
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Básico</h3>
                <p className="text-gray-400 mb-6">Ideal para começar</p>
                <div className="text-center">
                  <span className="text-3xl font-bold text-green-400">R$ 1.500</span>
                  <p className="text-gray-400 text-sm">a R$ 3.000</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">Landing Page profissional</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">Formulário de contato</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">Design responsivo</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">SEO básico</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">1 mês de suporte</span>
                </li>
              </ul>

              <button className="w-full border border-green-500 text-green-400 py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:bg-green-500/10">
                Escolher Plano
              </button>
            </div>

            {/* Plano Profissional */}
            <div className="bg-green-900/20 border-2 border-green-500/50 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Mais Popular
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Profissional</h3>
                <p className="text-gray-400 mb-6">Para empresas em crescimento</p>
                <div className="text-center">
                  <span className="text-3xl font-bold text-green-400">R$ 3.000</span>
                  <p className="text-gray-400 text-sm">a R$ 8.000</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">Tudo do plano Básico</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">Automações básicas</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">Integração com WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">Dashboard administrativo</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">3 meses de suporte</span>
                </li>
              </ul>

              <button className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:bg-green-600">
                Escolher Plano
              </button>
            </div>

            {/* Plano Enterprise */}
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-gray-400 mb-6">Soluções personalizadas</p>
                <div className="text-center">
                  <span className="text-3xl font-bold text-green-400">R$ 8.000+</span>
                  <p className="text-gray-400 text-sm">Sob consulta</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">Tudo dos planos anteriores</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">IA personalizada</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">Integrações complexas</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">Aplicativo mobile completo</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </span>
                  <span className="text-gray-300">Suporte prioritário 24/7</span>
                </li>
              </ul>

              <button className="w-full border border-green-500 text-green-400 py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:bg-green-500/10">
                Consultar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Inovar?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Não deixe sua empresa ficar para trás. Comece hoje mesmo sua 
            transformação digital com as melhores soluções em automação e desenvolvimento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/5531991998938?text=Olá! Quero conhecer os serviços da Logtiva" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors flex items-center"
            >
              <span className="mr-2">💬</span>
              Falar com Especialista
            </a>
            
            <a 
              href="mailto:logitva@gmail.com?subject=Interesse nos serviços da Logtiva&body=Gostaria de receber uma proposta personalizada." 
              className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500/10 transition-colors flex items-center"
            >
              <span className="mr-2">📧</span>
              Receber Proposta
            </a>
          </div>

          <div className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-xl max-w-lg mx-auto">
            <h3 className="text-green-400 font-bold text-lg mb-2">🎯 Garantia de Satisfação</h3>
            <p className="text-green-200 text-sm">
              Se não ficar 100% satisfeito com nossa solução, 
              devolvemos seu investimento. Sem perguntas.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
