import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function LGPD() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              Conformidade Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lei Geral de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Proteção de Dados
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Nossa conformidade com a Lei 13.709/2018 - LGPD garante a proteção 
              e segurança dos seus dados pessoais em todos os processos.
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
            <h2 className="text-3xl font-bold text-white mb-6">Nosso Compromisso com a LGPD</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                A <span className="text-green-400 font-semibold">Logtiva</span> está totalmente 
                comprometida com o cumprimento da <strong>Lei Geral de Proteção de Dados (Lei 13.709/2018)</strong>, 
                garantindo que todos os dados pessoais sejam tratados com máxima segurança, transparência e respeito 
                aos direitos dos titulares.
              </p>
              <p>
                Implementamos medidas técnicas e organizacionais robustas para proteger seus dados e 
                assegurar que nossos serviços de automação empresarial, desenvolvimento web e aplicativos 
                estejam em total conformidade com a legislação brasileira.
              </p>
            </div>
          </div>

          {/* Base Legal */}
          <div className="bg-gray-900/30 border border-gray-700/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Base Legal para Tratamento</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Execução de Contrato</h3>
                <p className="text-gray-300 text-sm mb-3">Art. 7º, V da LGPD</p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Prestação de serviços contratados</li>
                  <li>• Desenvolvimento de projetos</li>
                  <li>• Suporte técnico e atendimento</li>
                  <li>• Faturamento e cobrança</li>
                </ul>
              </div>

              <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Interesse Legítimo</h3>
                <p className="text-gray-300 text-sm mb-3">Art. 7º, IX da LGPD</p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Melhoria dos serviços oferecidos</li>
                  <li>• Segurança da informação</li>
                  <li>• Prevenção de fraudes</li>
                  <li>• Análise de desempenho</li>
                </ul>
              </div>

              <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Consentimento</h3>
                <p className="text-gray-300 text-sm mb-3">Art. 7º, I da LGPD</p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Marketing e comunicação</li>
                  <li>• Newsletter e atualizações</li>
                  <li>• Pesquisas de satisfação</li>
                  <li>• Ofertas personalizadas</li>
                </ul>
              </div>

              <div className="bg-black/30 border border-green-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Cumprimento Legal</h3>
                <p className="text-gray-300 text-sm mb-3">Art. 7º, II da LGPD</p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Obrigações fiscais e tributárias</li>
                  <li>• Requisições judiciais</li>
                  <li>• Auditorias regulatórias</li>
                  <li>• Compliance empresarial</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Direitos dos Titulares */}
          <div className="bg-gray-900/30 border border-gray-700/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Seus Direitos como Titular</h2>
            
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
              <p className="text-blue-400 font-semibold mb-2">Conforme Art. 18 da LGPD, você tem direito a:</p>
              <p className="text-gray-300 text-sm">
                Obter informações claras sobre o tratamento dos seus dados e exercer 
                controle sobre como suas informações são utilizadas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-700/30">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">I</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Confirmação da Existência</h4>
                <p className="text-gray-400 text-sm">Confirmar se tratamos seus dados pessoais</p>
              </div>

              <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-700/30">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">II</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Acesso aos Dados</h4>
                <p className="text-gray-400 text-sm">Acessar seus dados pessoais que possuímos</p>
              </div>

              <div className="text-center p-6 bg-black/30 rounded-lg border border-gray-700/30">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">III</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Correção</h4>
                <p className="text-gray-400 text-sm">Corrigir dados incompletos ou incorretos</p>
              </div>
            </div>
          </div>

          {/* Como Exercer Direitos */}
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Como Exercer Seus Direitos</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-4">Canais de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">E-mail LGPD</p>
                      <p className="text-green-400">lgpd@logtiva.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Telefone</p>
                      <p className="text-green-400">(31) 9 9199-8938</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-4">Processo de Atendimento</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-green-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <p className="text-gray-300 text-sm">Recebimento e protocolo da solicitação</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-green-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <p className="text-gray-300 text-sm">Verificação de identidade e legitimidade</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-green-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <p className="text-gray-300 text-sm">Análise e processamento da demanda</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-green-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <p className="text-gray-300 text-sm">Resposta em até 15 dias úteis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medidas de Segurança */}
          <div className="bg-gray-900/30 border border-gray-700/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Medidas de Segurança</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Criptografia</h4>
                <p className="text-gray-300 text-sm">
                  Dados protegidos com criptografia SSL/TLS
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Acesso Controlado</h4>
                <p className="text-gray-300 text-sm">
                  Apenas funcionários autorizados têm acesso
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Backup Seguro</h4>
                <p className="text-gray-300 text-sm">
                  Backups regulares em servidores seguros
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
