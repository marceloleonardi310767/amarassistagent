import Link from "next/link";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const sections = [
    { href: "/framework", title: "Framework Conceitual do Agente IA", description: "Visão geral do projeto, estrutura e passo a passo para implementação." },
    { href: "/modulos", title: "Módulos de Treinamento Detalhados", description: "Estrutura específica de cada módulo de treinamento para os perfis." },
    { href: "/funcionalidades", title: "Funcionalidades Adicionais Propostas", description: "Ideias inovadoras para enriquecer o agente com recursos avançados de IA." },
    { href: "/trilha", title: "Sua Trilha de Capacitação", description: "Guia para entender e apresentar o Agente de IA." },
  ];

  return (
    <>
      <Navbar />
      <main>
        <div className="amar-hero">
          <div className="container mx-auto">
            <h1>Bem-vindo ao Projeto do Agente de IA para <span>Amar Assist</span></h1>
            <p className="text-xl mb-8">Explore os documentos e o framework conceitual desenvolvido para revolucionar o treinamento da equipe de inside sales.</p>
            <Link href="/framework" className="amar-button">Começar Agora</Link>
          </div>
        </div>

        <section className="amar-section">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Conheça o Projeto</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {sections.map((section) => (
                <Link href={section.href} key={section.href} className="amar-card">
                  <div className="amar-card-icon">•</div>
                  <h3 className="amar-card-title">{section.title}</h3>
                  <p className="text-gray-700">{section.description}</p>
                  <div className="mt-4">
                    <span className="amar-button inline-block">Acessar</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="amar-section amar-section-alt">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sobre este Projeto</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Este site apresenta o framework conceitual de um Agente de Inteligência Artificial projetado para capacitar a equipe de Inside Sales da Amar Assist. Navegue pelas seções para entender a estrutura dos módulos de treinamento, as funcionalidades inovadoras propostas e o plano de implementação.
            </p>
          </div>
        </section>
      </main>
      <footer className="amar-footer">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xl font-bold"><span className="text-accent">Amar</span> Assist Agent</p>
            </div>
            <div>
              <p>Desenvolvido como parte do projeto de Agente de IA para Treinamento.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
