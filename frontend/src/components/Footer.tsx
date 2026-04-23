import { Instagram, MessageCircle, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/codexadev", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/558597555271", label: "WhatsApp" },
];

const columns = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Serviços", href: "#servicos" },
      { label: "Projetos", href: "#projetos" },
      { label: "Processo", href: "#processo" },
      { label: "Orçamento", href: "#orcamento" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Sites Institucionais", href: "#servicos" },
      { label: "E-commerce", href: "#servicos" },
      { label: "Sistemas Privados", href: "#servicos" },
      { label: "Identidade Visual", href: "#servicos" },
      { label: "Manutenção Mensal", href: "#servicos" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer
      className="relative border-t border-border bg-background pt-20 pb-10 overflow-hidden grain"
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Big brand statement */}
        <div className="grid grid-cols-12 gap-10 pb-16 md:pb-24 border-b border-border">
          <div className="col-span-12 md:col-span-7">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
              Vamos conversar
            </div>
            <h3 className="display-fluid-footer tracking-tight text-balance">
              Tem uma ideia? <br />
              <a
                href="https://wa.me/558597555271"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
                data-testid="footer-whatsapp-cta"
              >
                fale conosco
                <ArrowUpRight className="w-[0.9em] h-[0.9em]" strokeWidth={1.5} />
              </a>
            </h3>
          </div>

          <div className="col-span-12 md:col-span-5 md:pl-6 flex flex-col gap-6 md:items-end md:text-right">
            <div>
              <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                E-mail
              </div>
              <a
                href="mailto:codexa.service@gmail.com"
                className="u-link text-base text-foreground"
              >
                codexa.service@gmail.com
              </a>
            </div>
            <div>
              <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                WhatsApp
              </div>
              <a
                href="https://wa.me/558597555271"
                target="_blank"
                rel="noopener noreferrer"
                className="u-link text-base text-foreground"
              >
                +55 85 9755-5271
              </a>
            </div>
            <div>
              <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                Localização
              </div>
              <span className="text-base text-foreground">
                Fortaleza · Ceará · Brasil
              </span>
            </div>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-12 gap-10 py-14">
          <div className="col-span-12 md:col-span-5">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <img src="/logo.png" alt="Codexa" className="w-9 h-9 rounded-sm" />
              <span className="font-heading font-semibold text-lg tracking-tight">
                Codexa<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Estúdio de desenvolvimento web focado em marcas que querem
              resultado real — sem floreios, sem retrabalho.
            </p>
            <div className="flex gap-2 mt-6">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border-strong transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="col-span-6 md:col-span-3">
              <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground mb-5">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-12 md:col-span-1" />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="mono text-[11px] text-muted-foreground uppercase tracking-wider">
            © {new Date().getFullYear()} Codexa · Todos os direitos reservados
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/politica-de-privacidade"
              className="mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidade
            </a>
            <a
              href="/termos-de-uso"
              className="mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
