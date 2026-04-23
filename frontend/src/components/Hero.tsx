import { ArrowUpRight, MessageCircle } from "lucide-react";

const stats = [
  { value: "+20", label: "Projetos entregues" },
  { value: "98%", label: "Satisfação dos clientes" },
  { value: "24h", label: "Resposta no WhatsApp" },
  { value: "5★", label: "Avaliação média" },
];

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden grain"
      data-testid="hero-section"
    >
      {/* Subtle radial glow — single, anchored top-right */}
      <div
        className="absolute top-0 right-0 w-[50rem] h-[50rem] -translate-y-1/3 translate-x-1/4 rounded-full opacity-[0.12] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, hsl(336 85% 55%) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top meta bar */}
        <div className="flex items-center justify-between mb-14 md:mb-20">
          <span className="eyebrow">Estúdio de desenvolvimento · Fortaleza / CE</span>
          <span className="hidden md:inline-flex items-center gap-2 mono text-[11px] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponível para novos projetos · 2026
          </span>
        </div>

        {/* Editorial headline grid */}
        <div className="grid grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-10 items-end">
          <div className="col-span-12 lg:col-span-9">
            <h1 className="display text-[56px] sm:text-[72px] md:text-[96px] lg:text-[120px] text-balance">
              Software que{" "}
              <span className="italic font-normal text-muted-foreground">funciona</span>
              <span className="text-primary">.</span>
              <br />
              Design que{" "}
              <span className="italic font-normal text-muted-foreground">converte</span>
              <span className="text-primary">.</span>
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:pb-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty max-w-md">
              Sites, e-commerce e sistemas sob medida para empresas que
              exigem performance e marca consistente.
            </p>

            <div className="flex items-center gap-3 mt-8">
              <a
                href="#orcamento"
                className="btn-primary"
                data-testid="hero-cta-orcamento"
              >
                Solicitar orçamento
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://wa.me/558597555271"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                data-testid="hero-cta-whatsapp"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom stats row */}
        <div className="mt-20 md:mt-28 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`py-8 md:py-10 ${
                  i > 0 ? "md:border-l border-border" : ""
                } ${i % 2 === 1 ? "border-l md:border-l border-border" : ""} ${
                  i < 2 ? "border-b md:border-b-0 border-border" : ""
                } px-5 md:px-8`}
              >
                <div className="font-heading font-semibold text-4xl md:text-5xl tracking-tight text-foreground">
                  {s.value}
                </div>
                <div className="mono text-[11px] tracking-wider uppercase text-muted-foreground mt-3">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
