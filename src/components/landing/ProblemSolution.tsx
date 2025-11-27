import { X, Check } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    { title: "Firebase", desc: "Custos explodem com escala" },
    { title: "Supabase", desc: "Dependência de terceiros" },
    { title: "AWS", desc: "Complexidade e custos por requisição" },
    { title: "Vendor lock-in", desc: "Difícil de migrar" },
  ];

  const solutions = [
    { title: "Custo fixo", desc: "R$ 50/mês para 1k usuários" },
    { title: "Controle total", desc: "Sua infraestrutura, suas regras" },
    { title: "Open source", desc: "Código auditável, sem surpresas" },
    { title: "Portabilidade", desc: "VPS, Cloud ou Kubernetes" },
  ];

  return (
    <section className="py-20 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-display-mobile lg:text-display mb-4">
            Cansado de custos imprevisíveis
            <br />
            <span className="text-gradient">e dependência de fornecedores?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem Column */}
          <div className="bg-card/50 rounded-2xl border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">O Problema</h3>
            </div>
            <div className="space-y-4">
              {problems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/10"
                >
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Column */}
          <div className="bg-card/50 rounded-2xl border border-primary/20 p-8 glow-primary-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">RaDB</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
                >
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
