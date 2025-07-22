/**
 * Página de Benefícios: lista os principais benefícios dos serviços.
 */
export default function Beneficios() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-purple-400 mb-8 text-center">Benefícios da Automação e IA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center gap-4">
          <span className="bg-purple-700 text-white rounded-full p-3 text-xl">⚡</span>
          <span className="text-gray-200">Ganho de produtividade</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-purple-700 text-white rounded-full p-3 text-xl">💸</span>
          <span className="text-gray-200">Redução de custos operacionais</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-purple-700 text-white rounded-full p-3 text-xl">🤖</span>
          <span className="text-gray-200">Automação inteligente e personalizada</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-purple-700 text-white rounded-full p-3 text-xl">🔗</span>
          <span className="text-gray-200">Integração multicanal</span>
        </div>
      </div>
    </section>
  );
}
