import { Rocket, Building2, Factory } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Rocket,
      emoji: "🚀",
      title: "Startups Ágeis",
      description: "MVP rápido, custos controlados, escala conforme cresce.",
      features: [
        "MVP em dias, não meses",
        "Custos fixos previsíveis",
        "Escala conforme cresce",
      ],
    },
    {
      icon: Building2,
      emoji: "🏢",
      title: "Agências & Consultores",
      description: "Multi-tenant nativo para gerenciar múltiplos clientes.",
      features: [
        "Multi-tenant nativo",
        "1 backend para N clientes",
        "White-label pronto",
      ],
    },
    {
      icon: Factory,
      emoji: "🏭",
      title: "Enterprise Grade",
      description: "Self-hosted para compliance e controle total de dados.",
      features: [
        "Self-hosted (compliance)",
        "Controle total de dados",
        "SLA garantido",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-display-mobile lg:text-display mb-4">
            Construído para desenvolvedores.
            <br />
            <span className="text-gradient">Usado por empresas.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border card-hover text-center"
            >
              <div className="text-5xl mb-4">{useCase.emoji}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {useCase.description}
              </p>
              <ul className="space-y-2 text-left">
                {useCase.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
