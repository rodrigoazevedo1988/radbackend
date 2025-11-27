import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const plans = [
    {
      name: "Hobby",
      price: "R$ 0",
      period: "/mês",
      description: "Ideal para projetos pessoais",
      features: [
        "1 workspace",
        "3 projetos",
        "2 GB database",
        "10 GB storage",
        "Community support",
      ],
      cta: "Começar Grátis",
      variant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: "R$ 50",
      period: "/mês (VPS)",
      description: "Ideal para startups",
      features: [
        "Workspaces ilimitados",
        "Projetos ilimitados",
        "Database ilimitado*",
        "Storage ilimitado*",
        "Email support",
      ],
      cta: "Deploy Agora",
      variant: "hero" as const,
      popular: true,
      note: "* Limitado pelo hardware do VPS",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Ideal para grandes empresas",
      features: [
        "Tudo do Pro",
        "SLA garantido",
        "Suporte prioritário",
        "Treinamento da equipe",
        "Custom features",
      ],
      cta: "Falar com Vendas",
      variant: "outline" as const,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-display-mobile lg:text-display mb-4">
            Preços honestos.
            <br />
            <span className="text-gradient">Sem pegadinhas.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Open source significa que você só paga pela infraestrutura que usa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl bg-card border ${
                plan.popular
                  ? "border-primary glow-primary-sm"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <Badge
                  variant="default"
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  Mais Popular
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className="text-xs text-muted-foreground mb-4">
                  {plan.note}
                </p>
              )}

              <Button variant={plan.variant} className="w-full" size="lg">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
