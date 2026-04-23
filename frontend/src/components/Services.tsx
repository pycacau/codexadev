import {
  Monitor,
  ShoppingCart,
  Settings,
  Wrench,
  Smartphone,
  Palette,
  TrendingUp,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Sites Institucionais",
    description:
      "Presença online sob medida com foco em credibilidade, SEO e conversão.",
    features: ["Design exclusivo", "Responsivo", "SEO técnico", "Painel admin"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Loja virtual completa com pagamentos integrados, frete automático e gestão de pedidos.",
    features: ["Pix · Cartão · Boleto", "Frete automático", "Cupons", "Relatórios"],
  },
  {
    icon: Settings,
    title: "Sistemas Privados",
    description:
      "Plataformas personalizadas que automatizam operações e centralizam processos.",
    features: ["Estoque & financeiro", "Agendamentos", "Área de clientes", "Automação"],
  },
  {
    icon: Wrench,
    title: "Manutenção Mensal",
    description:
      "Correções, monitoramento e segurança contínua para manter seu site sempre online.",
    features: ["Atualizações", "Uptime 24/7", "Suporte direto", "Backups"],
  },
  {
    icon: Smartphone,
    title: "Cardápios Digitais",
    description:
      "Cardápio moderno com QR Code, categorias organizadas e link direto para pedidos.",
    features: ["QR Code", "Categorias", "Atualização fácil", "Link p/ pedidos"],
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    description:
      "Marca consistente com logo, paleta, tipografia e manual de aplicação.",
    features: ["Logo", "Paleta & fontes", "Style guide", "Social kit"],
  },
  {
    icon: TrendingUp,
    title: "Consultoria Digital",
    description:
      "Diagnóstico, estratégia e plano priorizado para crescer no digital com clareza.",
    features: ["Diagnóstico", "Plano de ação", "Auditoria técnica", "Roadmap"],
  },
  {
    icon: Zap,
    title: "Integrações & Extras",
    description:
      "Chatbots, automações, landing pages e tudo que potencializa o seu projeto.",
    features: ["Chatbot", "Landing pages", "Automações", "SEO avançado"],
  },
];

export const Services = () => {
  return (
    <section
      id="servicos"
      className="section border-t border-border"
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <span className="eyebrow">Capítulo 01 — Serviços</span>
            <h2 className="section-title mt-6 text-balance">
              O que construímos
              <br />
              <span className="text-muted-foreground">para você.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 md:pt-6">
            <p className="text-lg text-muted-foreground text-pretty max-w-xl">
              Oito linhas de serviço para cobrir todo o ciclo de um produto
              digital — da marca ao sistema, da primeira página à operação
              contínua.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {services.map((service, i) => {
            const Icon = service.icon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={i}
                className="group relative border-r border-b border-border p-7 md:p-8 bg-background hover:bg-surface transition-colors duration-300"
                data-testid={`service-card-${i}`}
              >
                <div className="flex items-start justify-between mb-10">
                  <div className="w-11 h-11 rounded-sm border border-border flex items-center justify-center bg-surface-2 group-hover:border-primary/40 transition-colors">
                    <Icon size={18} className="text-foreground" strokeWidth={1.5} />
                  </div>
                  <span className="mono text-[11px] text-muted-foreground">{num}</span>
                </div>

                <h3 className="font-heading text-[22px] font-semibold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-1.5">
                  {service.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-[13px] text-foreground/70"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Corner arrow appears on hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                  <ArrowUpRight size={14} className="text-primary" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-14 gap-4">
          <p className="text-sm text-muted-foreground max-w-md">
            Precisa de algo que não está na lista? Conversamos e desenhamos
            sob medida.
          </p>
          <a
            href="#orcamento"
            className="btn-link"
            data-testid="services-cta-orcamento"
          >
            Pedir uma proposta
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
