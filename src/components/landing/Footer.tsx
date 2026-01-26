import { Database, Github, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    produto: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Documentação", href: "#docs" },
      { label: "Roadmap", href: "#roadmap" },
    ],
    recursos: [
      { label: "Blog", href: "#blog" },
      { label: "Tutoriais", href: "#tutorials" },
      { label: "Comparações", href: "#comparisons" },
      { label: "Migração", href: "#migration" },
    ],
    empresa: [
      { label: "Sobre", href: "#about" },
      { label: "Contato", href: "#contact" },
      { label: "Suporte", href: "#support" },
      { label: "Status", href: "#status" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/radb", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/radb_io", label: "Twitter" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <Database className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">RaDB</span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Backend-as-a-Service.
              <br />
              Seu controle.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-surface hover:bg-surface-light flex items-center justify-center transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2"
          >
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Fale conosco no WhatsApp
            </a>
          </Button>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 RaDB. Open source under AGPL-3.0.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com <span className="text-primary">❤️</span> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
