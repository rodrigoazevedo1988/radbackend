import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "RaDB é realmente gratuito?",
      answer:
        "Sim! O código é open source (AGPL). Você paga apenas pela infraestrutura (VPS/Cloud) que escolher. Não há custos de licença ou taxas escondidas.",
    },
    {
      question: "Preciso de conhecimento técnico para hospedar?",
      answer:
        "Básico. Se você sabe rodar `docker-compose up`, consegue hospedar o RaDB. Fornecemos documentação completa, tutoriais em vídeo e uma comunidade ativa no Discord para ajudar.",
    },
    {
      question: "Como funciona o isolamento entre projetos?",
      answer:
        "Cada projeto tem seu próprio PostgreSQL schema, garantindo isolamento total de dados. Isso significa que os dados de um projeto nunca são acessíveis por outro, mesmo compartilhando a mesma instância.",
    },
    {
      question: "Posso migrar do Firebase/Supabase?",
      answer:
        "Sim! Fornecemos ferramentas de migração e guias passo-a-passo para ajudar na transição. Nossa API é compatível com padrões do mercado, facilitando a migração.",
    },
    {
      question: "Qual o custo real de hospedar?",
      answer:
        "Para 1k usuários: ~R$ 50/mês (Hetzner VPS CX21). Para 10k usuários: ~R$ 150/mês (cluster). Para 100k+: consulte nosso time de Enterprise para otimizar custos.",
    },
    {
      question: "Tem SLA para produção?",
      answer:
        "No plano self-hosted, você gerencia e define seu próprio SLA. No plano Enterprise, oferecemos SLA 99.9% com suporte prioritário 24/7 e time dedicado.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-display-mobile lg:text-display mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
