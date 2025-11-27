import { Database, Shield, HardDrive, Zap, Settings, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Database,
      title: "Database Poderoso",
      description: "PostgreSQL 15+ com schemas isolados, Row Level Security, full-text search e JSONB. Cada projeto tem seu próprio schema.",
    },
    {
      icon: Shield,
      title: "Auth Completo",
      description: "JWT, OAuth (Google, GitHub, GitLab), RBAC policies, 2FA e sessões gerenciadas. Tudo configurável via dashboard.",
    },
    {
      icon: HardDrive,
      title: "Storage Escalável",
      description: "MinIO S3-compatible. Buckets privados/públicos, signed URLs, políticas CORS e upload direto do browser.",
    },
    {
      icon: Zap,
      title: "WebSocket Nativo",
      description: "Channels pub/sub, database change data capture, presence tracking e broadcasting. Escalável com Redis.",
    },
    {
      icon: Settings,
      title: "Functions com Deno",
      description: "Runtime TypeScript isolado, deploy em segundos, logs em tempo real e environment variables seguros.",
    },
    {
      icon: BarChart3,
      title: "Observabilidade Integrada",
      description: "Prometheus + Grafana inclusos. Métricas de performance, logs agregados e alertas configuráveis.",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-display-mobile lg:text-display mb-4">
            Tudo que você precisa.
            <br />
            <span className="text-gradient">Nada que você não precisa.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stack completa para construir aplicações modernas em minutos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
