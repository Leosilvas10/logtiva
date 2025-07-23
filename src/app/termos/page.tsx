export default function TermosUso() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              Condições de Uso
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Termos de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Uso
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Condições gerais para utilização dos nossos serviços, website e 
              plataformas digitais da Logtiva.
            </p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-700/30 rounded-lg p-6 text-center">
            <p className="text-gray-400 text-sm">
              <span className="text-green-400 font-semibold">Última atualização:</span> 22 de julho de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Aceitação dos Termos */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">1. Aceitação dos Termos</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Ao acessar e utilizar os serviços da <span className="text-green-400 font-semibold">Logtiva</span>, 
                você concorda integralmente com estes Termos de Uso. Se você não concorda com 
                qualquer parte destes termos, não deve utilizar nossos serviços.
              </p>
              <p>
                Estes termos constituem um acordo legal entre você (usuário) e a Logtiva, 
                estabelecendo direitos, responsabilidades e limitações para ambas as partes.
              </p>
            </div>
          </div>

          {/* Definições */}
          <div className="bg-gray-900/30 border border-gray-700/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">2. Definições</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">"Logtiva" ou "Empresa"</h3>
                  <p className="text-gray-300 text-sm">
                    Refere-se à nossa empresa prestadora de serviços de automação 
                    empresarial, desenvolvimento web e aplicativos móveis.
                  </p>
                </div>

                <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">"Usuário" ou "Cliente"</h3>
                  <p className="text-gray-300 text-sm">
                    Qualquer pessoa física ou jurídica que utiliza nossos serviços 
                    ou acessa nosso website e plataformas digitais.
                  </p>
                </div>

                <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">"Serviços"</h3>
                  <p className="text-gray-300 text-sm">
                    Todos os produtos, soluções e serviços oferecidos pela Logtiva, 
                    incluindo consultorias, desenvolvimento e automações.
                  </p>
                </div>

                <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">"Plataforma"</h3>
                  <p className="text-gray-300 text-sm">
                    Website, aplicações web, sistemas e qualquer meio digital 
                    através do qual nossos serviços são disponibilizados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Descrição dos Serviços */}
          <div className="bg-gray-900/30 border border-gray-700/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">3. Descrição dos Serviços</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-xl font-semibold text-white mb-3">3.1 Automação Empresarial com IA</h3>
                <p className="text-gray-300 mb-4">
                  Desenvolvimento de soluções automatizadas para processos empresariais, 
                  integrando inteligência artificial para otimização de workflows e 
                  aumento de produtividade.
                </p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Criação de fluxos automatizados personalizados</li>
                  <li>• Integração entre sistemas e plataformas</li>
                  <li>• Implementação de chatbots e assistentes virtuais</li>
                  <li>• Análise de dados e relatórios inteligentes</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-xl font-semibold text-white mb-3">3.2 Desenvolvimento Web</h3>
                <p className="text-gray-300 mb-4">
                  Criação de websites profissionais, responsivos e otimizados para 
                  conversão, utilizando as mais modernas tecnologias de desenvolvimento.
                </p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Sites institucionais e landing pages</li>
                  <li>• E-commerce e marketplaces</li>
                  <li>• Sistemas web personalizados</li>
                  <li>• Otimização para SEO e performance</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-xl font-semibold text-white mb-3">3.3 Aplicativos Mobile</h3>
                <p className="text-gray-300 mb-4">
                  Desenvolvimento de aplicativos nativos e híbridos para iOS e Android, 
                  focados em experiência do usuário e funcionalidades avançadas.
                </p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Apps nativos para iOS e Android</li>
                  <li>• Aplicações web progressivas (PWA)</li>
                  <li>• Integração com APIs e serviços terceiros</li>
                  <li>• Publicação nas lojas de aplicativos</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Obrigações do Usuário */}
          <div className="bg-gray-900/30 border border-gray-700/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">4. Obrigações do Usuário</h2>
            
            <div className="space-y-6">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-400 mb-4">4.1 Uso Adequado</h3>
                <p className="text-gray-300 mb-4">O usuário compromete-se a:</p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Utilizar os serviços de forma legal e ética</li>
                  <li>• Fornecer informações verdadeiras e atualizadas</li>
                  <li>• Manter a confidencialidade de credenciais de acesso</li>
                  <li>• Respeitar direitos de propriedade intelectual</li>
                  <li>• Não interferir no funcionamento dos sistemas</li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-4">4.2 Atividades Proibidas</h3>
                <p className="text-gray-300 mb-4">É expressamente vedado:</p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Usar os serviços para atividades ilegais</li>
                  <li>• Tentar violar a segurança dos sistemas</li>
                  <li>• Reproduzir ou distribuir conteúdo sem autorização</li>
                  <li>• Enviar spam ou conteúdo malicioso</li>
                  <li>• Fazer engenharia reversa dos sistemas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Limitação de Responsabilidade */}
          <div className="bg-gray-900/30 border border-gray-700/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">5. Limitação de Responsabilidade</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">5.1 Limitações Gerais</h3>
                <div className="text-gray-300 space-y-3 text-sm">
                  <p>
                    A Logtiva não se responsabiliza por danos indiretos, lucros cessantes ou 
                    prejuízos consequenciais decorrentes do uso de nossos serviços.
                  </p>
                  <p>
                    Nossa responsabilidade total não excederá o valor pago pelo cliente 
                    nos 12 meses anteriores ao evento que deu origem à reclamação.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/30 border border-gray-700/30 rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-3">Não nos responsabilizamos por:</h4>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Falhas em sistemas de terceiros</li>
                    <li>• Perda de dados por ação do cliente</li>
                    <li>• Interrupções de internet ou energia</li>
                    <li>• Uso inadequado das soluções fornecidas</li>
                    <li>• Ataques cibernéticos externos</li>
                  </ul>
                </div>

                <div className="bg-black/30 border border-gray-700/30 rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-3">Garantimos:</h4>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Funcionamento conforme especificações</li>
                    <li>• Correção de bugs por 90 dias</li>
                    <li>• Suporte técnico durante vigência</li>
                    <li>• Backup regular dos dados</li>
                    <li>• Conformidade com LGPD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">6. Contato</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-6">
                  Para dúvidas ou questões relacionadas a estes Termos de Uso, 
                  entre em contato conosco:
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">E-mail</p>
                      <p className="text-green-400">contato@logtiva.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Telefone</p>
                      <p className="text-green-400">(31) 9 9199-8938</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Horário de Atendimento</h4>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 14h</p>
                  <p>Domingos e Feriados: Fechado</p>
                </div>

                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-sm font-semibold mb-2">Suporte Técnico</p>
                  <p className="text-gray-300 text-sm">
                    Para emergências técnicas, nosso suporte está disponível 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
