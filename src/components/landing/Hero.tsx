import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, BookOpen, Server, Code, Database, Cloud } from "lucide-react";

const Hero = () => {
  // Generate particles for the background effect
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${15 + Math.random() * 10}s`,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-animated" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}

      {/* Radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-title badge */}
          <div className="animate-fade-in-up mb-6">
            <Badge variant="success" className="text-sm px-4 py-1.5">
              <span className="mr-2">🚀</span> 100% Open Source
            </Badge>
          </div>

          {/* Main title */}
          <h1 className="text-hero-mobile lg:text-hero mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Backend-as-a-Service
            <br />
            <span className="text-gradient-hero">
              Zero Lock-in.
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Construa aplicações escaláveis sem depender de terceiros.
            PostgreSQL, MinIO, Real-time e Functions rodando na sua infraestrutura.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl">
              <Rocket className="w-5 h-5" />
              Começar Grátis
            </Button>
            <Button variant="hero-outline" size="xl">
              <BookOpen className="w-5 h-5" />
              Ver Documentação
            </Button>
          </div>

          {/* Feature badges */}
          <div 
            className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Badge variant="muted" className="gap-2">
              <Server className="w-3.5 h-3.5" />
              Self-Hosted
            </Badge>
            <Badge variant="muted" className="gap-2">
              <Code className="w-3.5 h-3.5" />
              Open Source (AGPL)
            </Badge>
            <Badge variant="muted" className="gap-2">
              <Database className="w-3.5 h-3.5" />
              PostgreSQL Nativo
            </Badge>
            <Badge variant="muted" className="gap-2">
              <Cloud className="w-3.5 h-3.5" />
              S3-Compatible Storage
            </Badge>
          </div>
        </div>

        {/* Terminal mockup */}
        <div 
          className="mt-16 lg:mt-20 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="terminal rounded-xl overflow-hidden shadow-2xl">
            <div className="terminal-header flex items-center gap-2 px-4 py-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-muted-foreground font-mono">terminal</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <span className="text-primary">$</span>
                <span>docker-compose up -d</span>
              </div>
              <div className="text-primary/80 mb-1">✓ PostgreSQL started</div>
              <div className="text-primary/80 mb-1">✓ Redis started</div>
              <div className="text-primary/80 mb-1">✓ MinIO started</div>
              <div className="text-primary/80 mb-3">✓ RaDB API started</div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span className="text-foreground">Running on <span className="text-primary">http://localhost:3000</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
