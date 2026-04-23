import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Souza",
    role: "Gerente de Marketing",
    avatar: "AS",
    text: "Entrega antes do prazo e atenção aos detalhes. Nosso site novo elevou a credibilidade e a taxa de conversão subiu 28% no primeiro mês.",
  },
  {
    name: "Lucas Almeida",
    role: "Fundador, VittaTech",
    avatar: "LA",
    text: "E-commerce lançado com integração de pagamentos e frete automático. O suporte foi rápido e resolutivo. A operação ficou muito mais previsível.",
  },
  {
    name: "Carla Pereira",
    role: "Diretora Operacional",
    avatar: "CP",
    text: "O ERP customizado reduziu retrabalho e trouxe visibilidade de ponta a ponta. Dashboards claros e equipe mais satisfeita com os processos.",
  },
  {
    name: "Roberto Silva",
    role: "CEO, Tech Solutions",
    avatar: "RS",
    text: "Profissionalismo do início ao fim. O sistema entregue superou nossas expectativas e já trouxe retorno no primeiro trimestre.",
  },
  {
    name: "Marina Costa",
    role: "Restaurante Sabor",
    avatar: "MC",
    text: "O cardápio digital transformou a experiência dos nossos clientes. Pedidos aumentaram e a gestão ficou muito mais simples.",
  },
  {
    name: "Fernanda Lima",
    role: "Sócia, Agência Nimbus",
    avatar: "FL",
    text: "O site institucional ficou impecável e alinhado à nossa marca. A performance e o SEO já trouxeram leads orgânicos em poucos dias.",
  },
];

// Extended list for the marquee row
const marqueeClients = [
  "Roney Advocacia",
  "Spansiva",
  "ClinTiatiangua",
  "Artur Maciel",
  "VittaTech",
  "Alpha Digital",
  "Agência Nimbus",
  "Tech Solutions",
  "Restaurante Sabor",
  "Bistro da Serra",
  "Loja Prime",
  "Clínica Vida",
  "NovaLabs",
];

export const Testimonials = () => {
  return (
    <section
      className="section border-t border-border bg-surface/40"
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-6">
            <span className="eyebrow">Capítulo 04 — Provas</span>
            <h2 className="section-title mt-6 text-balance">
              O que dizem
              <br />
              <span className="text-muted-foreground">nossos clientes.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-6">
            <p className="text-lg text-muted-foreground text-pretty max-w-lg">
              Depoimentos reais de clientes que confiaram seus projetos à
              Codexa — e viram retorno em pouco tempo.
            </p>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="frame frame-hover p-7 flex flex-col h-full"
              data-testid={`testimonial-${i}`}
            >
              <Quote size={22} className="text-primary mb-6" strokeWidth={1.5} />
              <blockquote className="text-[15px] text-foreground/85 leading-relaxed flex-grow">
                {t.text}
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-8 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-surface-2 border border-border flex items-center justify-center mono text-xs text-foreground">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{t.name}</div>
                  <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Client marquee */}
        <div className="mt-20 md:mt-24 pt-12 border-t border-border">
          <div className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Marcas que já confiaram
          </div>
          <div className="marquee-mask overflow-hidden">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {[...marqueeClients, ...marqueeClients].map((c, i) => (
                <span
                  key={i}
                  className="font-heading text-2xl md:text-3xl text-foreground/50 hover:text-foreground transition-colors"
                >
                  {c}
                  <span className="text-primary">.</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
