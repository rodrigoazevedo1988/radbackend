import { Button } from "@/components/ui/button";
import { Github, GitFork, Users, Star } from "lucide-react";

const OpenSource = () => {
  const stats = [
    { icon: Star, label: "Stars", value: "2.4k" },
    { icon: GitFork, label: "Forks", value: "180" },
    { icon: Users, label: "Contributors", value: "45" },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 section-gradient-accent" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-mobile lg:text-display mb-4">
            100% Open Source. <span className="text-gradient">AGPL.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Código auditável, comunidade ativa e sem dependência de vendors.
            Construa com confiança.
          </p>

          {/* GitHub stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero-outline" size="lg">
              <Github className="w-5 h-5" />
              Ver no GitHub
            </Button>
            <Button variant="hero" size="lg">
              Contribuir
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
