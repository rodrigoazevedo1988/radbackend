import { Badge } from "@/components/ui/badge";

const Architecture = () => {
  const techStack = [
    { name: "NestJS", color: "bg-red-500/20 text-red-400" },
    { name: "PostgreSQL", color: "bg-blue-500/20 text-blue-400" },
    { name: "Redis", color: "bg-red-600/20 text-red-400" },
    { name: "MinIO", color: "bg-pink-500/20 text-pink-400" },
    { name: "Deno", color: "bg-cyan-500/20 text-cyan-400" },
    { name: "Docker", color: "bg-blue-400/20 text-blue-300" },
    { name: "Kubernetes", color: "bg-blue-600/20 text-blue-400" },
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-display-mobile lg:text-display mb-4">
            Stack moderna e <span className="text-gradient">battle-tested</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Arquitetura escalável pronta para produção desde o dia zero.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
            {/* Visual diagram */}
            <div className="space-y-6">
              {/* Frontend */}
              <div className="flex justify-center">
                <div className="px-6 py-3 rounded-xl bg-surface-light border border-border text-sm font-medium text-foreground">
                  Frontend App
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-border" />
              </div>

              {/* Load Balancer */}
              <div className="flex justify-center">
                <div className="px-6 py-3 rounded-xl bg-primary/10 border border-primary/30 text-sm font-medium text-primary">
                  Nginx Load Balancer
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-border" />
              </div>

              {/* API Layer */}
              <div className="flex justify-center">
                <div className="px-8 py-4 rounded-xl bg-accent/10 border border-accent/30 text-sm font-medium text-accent">
                  NestJS API (3+ instâncias)
                </div>
              </div>

              {/* Arrow branches */}
              <div className="relative flex justify-center">
                <div className="w-0.5 h-8 bg-border" />
              </div>

              {/* Services grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-surface border border-border">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <span className="text-lg">🐘</span>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">PostgreSQL</span>
                  <span className="text-[10px] text-muted-foreground/60">master + replicas</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-surface border border-border">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                    <span className="text-lg">📦</span>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">MinIO</span>
                  <span className="text-[10px] text-muted-foreground/60">S3-compatible</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-surface border border-border">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">Redis</span>
                  <span className="text-[10px] text-muted-foreground/60">cache/queue/pubsub</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-surface border border-border">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-lg">🦕</span>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">Deno</span>
                  <span className="text-[10px] text-muted-foreground/60">functions runtime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {techStack.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className={`${tech.color} border-0`}
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
