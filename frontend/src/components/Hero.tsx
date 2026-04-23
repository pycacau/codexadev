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
      className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-24 overflow-hidden grain"
      data-testid="hero-section"
    >
      {/* Subtle radial glow — single, anchored top-right */}
      <div
        className="absolute top-0 right-0 w-[40rem] h-[40rem] -translate-y-1/3 translate-x-1/4 rounded-full opacity-[0.12] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, hsl(336 85% 55%) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top meta bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-10 md:mb-16">
          <span className="eyebrow">Estúdio de desenvolvimento · Fortaleza / CE</span>
          <span className="hidden md:inline-flex items-center gap-2 mono text-[11px] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponível para novos projetos · 2026
          </span>
        </div>

        {/* Editorial headline grid */}
        <div className="grid grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-8 lg:gap-x-10 items-end">
          <div className="col-span-12 lg:col-span-8 xl:col-span-9">
            <h1 className="display-fluid-hero text-balance">
              Software que{" "}
              <span className="italic font-normal text-muted-foreground">funciona</span>
              <span className="text-primary">.</span>
              <br />
              Design que{" "}
              <span className="italic font-normal text-muted-foreground">converte</span>
              <span className="text-primary">.</span>
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-4 xl:col-span-3 lg:pb-4">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty max-w-md">
              Sites, e-commerce e sistemas sob medida para empresas que
              exigem performance e marca consistente.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6 md:mt-8">
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
        <div className="mt-16 md:mt-20 lg:mt-24 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={[
                  "py-7 md:py-9 px-5 md:px-7",
                  // vertical separators between columns
                  i % 2 === 1 ? "border-l border-border" : "",
                  "md:border-l md:border-border",
                  i === 0 ? "md:border-l-0" : "",
                  // horizontal separator between the two mobile rows
                  i >= 2 ? "border-t border-border md:border-t-0" : "",
                ].join(" ")}
              >
                <div
                  className="font-heading font-semibold tracking-tight text-foreground"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
                >
                  {s.value}
                </div>
                <div className="mono text-[10px] md:text-[11px] tracking-wider uppercase text-muted-foreground mt-2.5">
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
