'use client';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Seção de Benefícios */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              Por que escolher a Logtiva
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Benefícios{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Comprovados
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Resultados reais que transformam a operação da sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                Ganho de Produtividade
              </h3>
              <p className="text-gray-400">
                Automatize tarefas repetitivas e foque no que realmente importa para o crescimento
              </p>
            </div>

            <div className="group text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                Redução de Custos
              </h3>
              <p className="text-gray-400">
                Diminua gastos operacionais com processos automatizados e eficientes
              </p>
            </div>

            <div className="group text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                Integração Total
              </h3>
              <p className="text-gray-400">
                Conecte todos seus sistemas, apps e canais em uma solução única
              </p>
            </div>

            <div className="group text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                Escalabilidade
              </h3>
              <p className="text-gray-400">
                Soluções que crescem junto com seu negócio, sem limites
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Números/Estatísticas */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">85%</div>
              <p className="text-gray-300 text-lg">Redução no tempo de processos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">50+</div>
              <p className="text-gray-300 text-lg">Empresas automatizadas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">24/7</div>
              <p className="text-gray-300 text-lg">Sistemas funcionando</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada para ação antes do formulário */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Automatizar
            </span>{' '}
            seu Negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Fale conosco e descubra como nossa tecnologia pode revolucionar sua empresa em apenas algumas semanas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contato" 
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-xl shadow-green-500/25"
            >
              Solicitar Proposta Gratuita
            </a>
            <a 
              href="https://wa.me/5531991998938?text=Olá! Gostaria de saber mais sobre os serviços da Logtiva" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500/10 transition-all duration-200 flex items-center"
            >
              <span className="mr-2">📱</span>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Formulário de contato */}
      <ContactForm />
    </div>
  );
}
