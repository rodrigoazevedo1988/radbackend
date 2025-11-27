import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CostComparison = () => {
  const comparisonData = [
    { metric: "Custo base", supabase: "$25/mês", radb: "R$ 50/mês (~$10)", highlight: true },
    { metric: "Database", supabase: "8 GB", radb: "Ilimitado*" },
    { metric: "Storage", supabase: "100 GB", radb: "500 GB+" },
    { metric: "Transfer", supabase: "250 GB", radb: "Ilimitado" },
    { metric: "API calls", supabase: "5M/mês", radb: "Ilimitado" },
    { metric: "Escalabilidade", supabase: "$$ por GB/req", radb: "Adicionar nodes" },
    { metric: "Vendor lock-in", supabase: "alto", radb: "zero", isBoolean: true, radbGood: true },
    { metric: "Self-hosted", supabase: "não", radb: "sim", isBoolean: true, radbGood: true },
  ];

  return (
    <section className="py-20 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-display-mobile lg:text-display mb-4">
            Custos previsíveis.
            <br />
            <span className="text-gradient">Sem surpresas no fim do mês.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px] rounded-2xl bg-card border border-border overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-surface-light">
                <div className="p-4 text-sm font-medium text-muted-foreground">Métrica</div>
                <div className="p-4 text-sm font-medium text-muted-foreground text-center">Supabase Pro</div>
                <div className="p-4 text-sm font-medium text-primary text-center">RaDB (VPS)</div>
              </div>
              
              {/* Rows */}
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 border-t border-border ${
                    row.highlight ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="p-4 text-sm font-medium text-foreground">{row.metric}</div>
                  <div className="p-4 text-sm text-center text-muted-foreground">
                    {row.isBoolean ? (
                      row.radbGood ? (
                        <span className="inline-flex items-center gap-1 text-destructive">
                          <X className="w-4 h-4" />
                          {row.supabase}
                        </span>
                      ) : (
                        row.supabase
                      )
                    ) : (
                      row.supabase
                    )}
                  </div>
                  <div className="p-4 text-sm text-center">
                    {row.isBoolean ? (
                      <span className="inline-flex items-center gap-1 text-primary">
                        <Check className="w-4 h-4" />
                        {row.radb}
                      </span>
                    ) : (
                      <span className={row.highlight ? "text-primary font-semibold" : "text-foreground"}>
                        {row.radb}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            * Limitado pelo hardware do VPS escolhido
          </p>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Button variant="hero" size="lg">
              Calcular Economia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;
