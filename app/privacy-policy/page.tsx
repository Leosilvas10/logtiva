export const metadata = {
  title: "Política de Privacidade - Logtiva",
  description: "Política de privacidade do site Logtiva.",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Política de Privacidade</h1>
      <p className="mb-4">
        Sua privacidade é importante para nós. Nesta política, explicamos como coletamos, usamos e protegemos seus dados pessoais quando você utiliza nosso site e serviços.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Quais dados coletamos?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Informações pessoais como nome, e-mail e telefone.</li>
        <li>Dados de navegação e uso do site.</li>
        <li>Informações coletadas via cookies.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Como usamos seus dados?</h2>
      <p className="mb-4">
        Utilizamos seus dados para fornecer, melhorar nossos serviços, personalizar sua experiência e manter a segurança.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Compartilhamento de dados</h2>
      <p className="mb-4">
        Não vendemos seus dados a terceiros. Podemos compartilhar informações apenas com parceiros confiáveis para execução dos serviços.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Seus direitos</h2>
      <p className="mb-4">
        Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais a qualquer momento.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contato</h2>
      <p>
        Para dúvidas sobre a política de privacidade, entre em contato pelo e-mail:{" "}
        <a href="mailto:logtiva@gmail.com" className="text-indigo-600 underline">
          logtiva@gmail.com
        </a>.
      </p>
    </main>
  );
}
