import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SelfHosted = () => {
  const deployOptions = [
    "Localhost (desenvolvimento)",
    "VPS (Hetzner, DigitalOcean)",
    "Kubernetes (produção)",
    "Bare metal (seus servidores)",
  ];

  return (
    <section className="py-20 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Terminal */}
            <div className="order-2 lg:order-1">
              <div className="terminal rounded-xl overflow-hidden shadow-2xl">
                <div className="terminal-header flex items-center gap-2 px-4 py-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-muted-foreground font-mono">
                    ~/radb-project
                  </span>
                </div>
                <div className="p-6 font-mono text-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">$</span>
                    <span className="text-muted-foreground">git clone https://github.com/radb/radb.git</span>
                  </div>
                  <div className="text-muted-foreground/60">Cloning into 'radb'...</div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-primary">$</span>
                    <span className="text-muted-foreground">cd radb && cp .env.example .env</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-primary">$</span>
                    <span className="text-muted-foreground">docker-compose up -d</span>
                  </div>
                  
                  <div className="space-y-1 mt-2">
                    <div className="text-primary/80">✓ Network radb_default created</div>
                    <div className="text-primary/80">✓ Container postgres started</div>
                    <div className="text-primary/80">✓ Container redis started</div>
                    <div className="text-primary/80">✓ Container minio started</div>
                    <div className="text-primary/80">✓ Container radb-api started</div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                    <span className="text-2xl">🚀</span>
                    <span className="text-foreground">
                      Dashboard: <span className="text-primary">http://localhost:3000</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-display-mobile lg:text-display mb-4">
                Deploy em <span className="text-gradient">5 minutos</span>
              </h2>
              
              <p className="text-muted-foreground mb-6 text-lg">
                Self-hosted significa controle total. Rode o RaDB onde quiser, 
                quando quiser, sem depender de ninguém.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <span className="text-foreground">Clone o repositório</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <span className="text-foreground">Configure variáveis de ambiente</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <span className="text-foreground">docker-compose up -d</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Pronto! Backend rodando</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3">Funciona em:</p>
                <div className="flex flex-wrap gap-2">
                  {deployOptions.map((option, index) => (
                    <Badge key={index} variant="success" className="gap-1.5">
                      <Check className="w-3 h-3" />
                      {option}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfHosted;
