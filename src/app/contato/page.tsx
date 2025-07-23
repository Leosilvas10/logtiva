export default function Contato() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              Fale Conosco
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Entre em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Contato
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transforme sua empresa com nossas soluções de automação e IA. 
              Estamos prontos para conversar sobre seu projeto!
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato Principais */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            {/* WhatsApp/Telefone */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 text-center hover:border-green-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">WhatsApp / Telefone</h3>
              <p className="text-gray-400 mb-4">Resposta imediata via WhatsApp</p>
              <a 
                href="https://wa.me/5531991998938" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors font-semibold flex items-center justify-center"
              >
                <span className="mr-2">📱</span>
                (31) 9 9199-8938
              </a>
            </div>

            {/* Email */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 text-center hover:border-green-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">E-mail</h3>
              <p className="text-gray-400 mb-4">Propostas e orçamentos detalhados</p>
              <a 
                href="mailto:logitva@gmail.com"
                className="text-green-400 hover:text-green-300 transition-colors font-semibold flex items-center justify-center"
              >
                <span className="mr-2">📧</span>
                logitva@gmail.com
              </a>
            </div>

            {/* Localização */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 text-center hover:border-green-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Localização</h3>
              <p className="text-gray-400 mb-4">Atendemos em todo o Brasil</p>
              <p className="text-green-400 font-semibold flex items-center justify-center">
                <span className="mr-2">📍</span>
                Minas Gerais, Brasil
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Horário de Atendimento */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Horário de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Atendimento
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Horário Regular */}
            <div className="bg-gray-900/50 border border-gray-700/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">⏰</span>
                </span>
                Atendimento Comercial
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-300">Segunda à Sexta</span>
                  <span className="text-green-400 font-semibold">8h às 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
                  <span className="text-gray-300">Sábado</span>
                  <span className="text-green-400 font-semibold">8h às 14h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Domingo e Feriados</span>
                  <span className="text-red-400 font-semibold">Fechado</span>
                </div>
              </div>
            </div>

            {/* Suporte Urgente */}
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🚨</span>
                </span>
                Suporte de Emergência
              </h3>
              <div className="space-y-4">
                <p className="text-green-200 mb-4">
                  Para clientes com sistemas críticos em funcionamento
                </p>
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-green-400 font-bold mr-2">📱</span>
                    <span className="text-green-300 font-semibold">WhatsApp 24/7</span>
                  </div>
                  <p className="text-green-200 text-sm">
                    Disponível para emergências técnicas de sistemas em produção
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Atendimento */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Como{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Funciona
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Nosso processo simples e eficiente para transformar sua ideia em realidade
            </p>
          </div>

          <div className="space-y-8">
            {/* Passo 1 */}
            <div className="flex items-start bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Primeiro Contato</h3>
                <p className="text-gray-300 mb-3">
                  Entre em contato via WhatsApp ou e-mail. Conte-nos sobre seu projeto, 
                  desafios atuais e objetivos que deseja alcançar.
                </p>
                <div className="text-green-400 text-sm">⏱️ Resposta em até 2 horas</div>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="flex items-start bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Análise e Consultoria</h3>
                <p className="text-gray-300 mb-3">
                  Agendamos uma reunião (presencial ou online) para entender profundamente 
                  suas necessidades e propor a melhor solução tecnológica.
                </p>
                <div className="text-green-400 text-sm">🎯 Consultoria inicial gratuita</div>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="flex items-start bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Proposta Personalizada</h3>
                <p className="text-gray-300 mb-3">
                  Elaboramos uma proposta detalhada com cronograma, investimento e 
                  especificações técnicas da solução ideal para seu negócio.
                </p>
                <div className="text-green-400 text-sm">📋 Proposta em até 48 horas</div>
              </div>
            </div>

            {/* Passo 4 */}
            <div className="flex items-start bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Desenvolvimento e Entrega</h3>
                <p className="text-gray-300 mb-3">
                  Iniciamos o desenvolvimento com acompanhamento em tempo real. 
                  Você recebe atualizações regulares e pode acompanhar o progresso.
                </p>
                <div className="text-green-400 text-sm">🚀 Entregas incrementais semanais</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Seção */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perguntas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Frequentes
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-gray-700/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">💰 Qual o investimento para uma automação?</h3>
              <p className="text-gray-300">
                O investimento varia conforme a complexidade do projeto. Oferecemos soluções 
                desde R$ 2.000 até projetos enterprise. Fazemos uma análise gratuita para 
                apresentar a opção ideal para seu orçamento.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">⏱️ Quanto tempo leva para implementar?</h3>
              <p className="text-gray-300">
                Projetos simples: 1-2 semanas | Projetos médios: 3-6 semanas | 
                Projetos complexos: 8-12 semanas. Sempre com entregas incrementais 
                para você acompanhar o progresso.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">🛠️ Vocês dão suporte após a entrega?</h3>
              <p className="text-gray-300">
                Sim! Todos os projetos incluem 3 meses de suporte gratuito. 
                Após este período, oferecemos planos de manutenção mensais 
                para garantir o funcionamento perfeito dos sistemas.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">🌍 Atendem apenas em Minas Gerais?</h3>
              <p className="text-gray-300">
                Atendemos clientes em todo o Brasil! Projetos de automação e 
                desenvolvimento podem ser realizados 100% remotamente. 
                Para projetos locais em BH oferecemos atendimento presencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Começar?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transforme sua empresa hoje mesmo. Fale conosco e receba uma 
            consultoria gratuita sobre como a automação pode revolucionar seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/5531991998938?text=Olá! Gostaria de saber mais sobre os serviços da Logtiva" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-xl shadow-green-500/25 flex items-center"
            >
              <span className="mr-2">📱</span>
              Conversar no WhatsApp
            </a>
            
            <a 
              href="mailto:logitva@gmail.com?subject=Interesse nos serviços da Logtiva&body=Olá! Tenho interesse em conhecer mais sobre os serviços da Logtiva." 
              className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500/10 transition-all duration-200 flex items-center"
            >
              <span className="mr-2">📧</span>
              Enviar E-mail
            </a>
          </div>

          <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg max-w-md mx-auto">
            <p className="text-green-400 text-sm font-semibold">💡 Consultoria Gratuita</p>
            <p className="text-green-200 text-sm">
              Primeira análise sem compromisso para entender suas necessidades
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
