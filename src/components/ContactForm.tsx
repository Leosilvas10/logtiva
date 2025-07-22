'use client';
import { useState } from 'react';

/**
 * Formulário de contato com fundo preto e elementos verdes
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ 
    nome: '', 
    email: '', 
    telefone: '', 
    mensagem: '', 
    interesse: '' 
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    
    // Simula envio (substitua pela integração real)
    setTimeout(() => {
      setSent(true);
      setIsLoading(false);
      // Reset form após envio
      setForm({ nome: '', email: '', telefone: '', mensagem: '', interesse: '' });
    }, 1000);
  }

  return (
    <section className="py-20 bg-black" id="contato">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
            Entre em Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fale{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Conosco
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos automatizar e impulsionar seu negócio com tecnologia de ponta
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form 
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700/30" 
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-green-300 mb-2 font-medium">Nome Completo *</label>
                <input 
                  name="nome" 
                  required 
                  className="w-full bg-black/80 border border-green-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all duration-200" 
                  placeholder="Seu nome completo"
                  value={form.nome} 
                  onChange={handleChange} 
                />
              </div>

              <div>
                <label className="block text-green-300 mb-2 font-medium">E-mail *</label>
                <input 
                  name="email" 
                  type="email" 
                  required 
                  className="w-full bg-black/80 border border-green-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all duration-200" 
                  placeholder="seu@email.com"
                  value={form.email} 
                  onChange={handleChange} 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-green-300 mb-2 font-medium">Telefone/WhatsApp *</label>
                <input 
                  name="telefone" 
                  type="tel"
                  required 
                  className="w-full bg-black/80 border border-green-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all duration-200" 
                  placeholder="(11) 99999-9999"
                  value={form.telefone} 
                  onChange={handleChange} 
                />
              </div>

              <div>
                <label className="block text-green-300 mb-2 font-medium">Interesse Principal *</label>
                <select 
                  name="interesse" 
                  required 
                  className="w-full bg-black/80 border border-green-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all duration-200"
                  value={form.interesse} 
                  onChange={handleChange}
                >
                  <option value="" className="bg-black">Selecione seu interesse...</option>
                  <option value="automacao" className="bg-black">Automação Empresarial com IA</option>
                  <option value="site" className="bg-black">Desenvolvimento de Website</option>
                  <option value="app" className="bg-black">Aplicativo Web/Mobile</option>
                  <option value="consultoria" className="bg-black">Consultoria em Tecnologia</option>
                  <option value="todos" className="bg-black">Todos os Serviços</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-green-300 mb-2 font-medium">Conte-nos sobre seu projeto *</label>
              <textarea 
                name="mensagem" 
                required 
                rows={4}
                className="w-full bg-black/80 border border-green-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all duration-200 resize-none" 
                placeholder="Descreva seu projeto, desafios atuais ou como podemos ajudar sua empresa..."
                value={form.mensagem} 
                onChange={handleChange} 
              />
            </div>

            <div className="text-center">
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Solicitar Proposta Gratuita'
                )}
              </button>
            </div>

            {sent && (
              <div className="mt-6 p-4 bg-green-500/20 border border-green-400/50 rounded-lg text-center">
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-green-400 font-bold text-lg">Mensagem Enviada!</span>
                </div>
                <p className="text-green-300">
                  Obrigado pelo interesse! Entraremos em contato em até 24 horas.
                </p>
              </div>
            )}
          </form>

          {/* Informações de contato adicionais */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 text-lg mb-4">
              Ou entre em contato diretamente:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8">
              <a href="mailto:contato@logtiva.com" className="text-green-400 hover:text-green-300 transition-colors flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                logtiva@gmail.com
              </a>
              <a href="tel:+5511999999999" className="text-green-400 hover:text-green-300 transition-colors flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                (31) 99199-8938
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
