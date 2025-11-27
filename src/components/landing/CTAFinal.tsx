import { Button } from "@/components/ui/button";
import { Rocket, Calendar } from "lucide-react";

const CTAFinal = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px]" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-mobile lg:text-[3.5rem] lg:leading-tight font-bold mb-6">
            Pronto para ter controle total
            <br />
            <span className="text-gradient-hero">do seu backend?</span>
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Comece grátis hoje. Sem cartão de crédito. Deploy em localhost em 5 minutos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Rocket className="w-5 h-5" />
              Criar Conta Grátis
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
              <Calendar className="w-5 h-5" />
              Agendar Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Deploy em localhost em 5 minutos • Open source AGPL • 100% self-hosted
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
