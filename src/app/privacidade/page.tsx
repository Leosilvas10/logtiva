import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              Transparência e Segurança
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Política de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Privacidade
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Protegemos seus dados com transparência total. Saiba como coletamos, 
              utilizamos e protegemos suas informações pessoais.
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
          
          {/* Nosso Compromisso */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <svg className="w-8 h-8 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              Nosso Compromisso
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                A <span className="text-green-400 font-semibold">Logtiva</span> está totalmente 
                comprometida com a proteção da sua privacidade. Esta Política de Privacidade 
                explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais 
                quando você utiliza nossos serviços de automação empresarial, desenvolvimento web e aplicativos.
              </p>
              <p>
                Implementamos medidas técnicas e organizacionais robustas para proteger seus dados e 
                assegurar que nossos serviços estejam em total conformidade com a legislação brasileira.
              </p>
            </div>
          </div>

          {/* Dados Coletados */}
          <div className="bg-gray-900/30 border border-gray-700/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Dados Coletados</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">Dados de Identificação</h3>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nome completo
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Endereço de e-mail
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Número de telefone
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Informações da empresa (quando aplicável)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">Dados de Navegação</h3>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Endereço IP
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Informações do navegador e dispositivo
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Páginas visitadas e tempo de permanência
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Finalidade do Uso */}
          <div className="bg-gray-900/30 border border-gray-700/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Finalidade do Uso</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Prestação de Serviços</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Desenvolvimento de soluções de automação</li>
                  <li>• Criação de websites e aplicativos</li>
                  <li>• Suporte técnico e atendimento</li>
                  <li>• Execução de projetos contratados</li>
                </ul>
              </div>

              <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Comunicação</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Resposta a solicitações e dúvidas</li>
                  <li>• Envio de propostas comerciais</li>
                  <li>• Atualizações sobre projetos</li>
                  <li>• Notificações importantes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Seus Direitos */}
          <div className="bg-gray-900/30 border border-gray-700/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Seus Direitos</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Acesso</h4>
                <p className="text-gray-300 text-sm">
                  Solicitar cópia dos seus dados pessoais que processamos
                </p>
              </div>

              <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Correção</h4>
                <p className="text-gray-300 text-sm">
                  Corrigir dados incorretos ou incompletos sobre você
                </p>
              </div>

              <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Exclusão</h4>
                <p className="text-gray-300 text-sm">
                  Solicitar a exclusão dos seus dados pessoais
                </p>
              </div>

              <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Portabilidade</h4>
                <p className="text-gray-300 text-sm">
                  Receber seus dados em formato estruturado e legível
                </p>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Contato</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-6">
                  Para questões relacionadas a esta Política de Privacidade, 
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
                      <p className="text-green-400">privacidade@logtiva.com</p>
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
                <h4 className="text-lg font-semibold text-white mb-4">Tempo de Resposta</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Consultas gerais: 3-5 dias úteis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Exercício de direitos: até 15 dias úteis
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
