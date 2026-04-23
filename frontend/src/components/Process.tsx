import { MessageSquare, Compass, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Conversa inicial",
    description:
      "Entendemos seu negócio, metas e restrições numa conversa objetiva. Sem jargão técnico desnecessário.",
    deliverable: "Briefing validado",
  },
  {
    icon: Compass,
    title: "Escopo & proposta",
    description:
      "Desenhamos o escopo, prazo e investimento em uma proposta clara — o que entra, o que não entra.",
    deliverable: "Proposta detalhada",
  },
  {
    icon: Code2,
    title: "Design & build",
    description:
      "Entregas iterativas em ciclos curtos, com feedback contínuo pelo WhatsApp e ambiente de homologação.",
    deliverable: "Versão de homologação",
  },
  {
    icon: Rocket,
    title: "Publicação & suporte",
    description:
      "Deploy, treinamento da equipe e acompanhamento dos primeiros dias no ar para garantir resultado.",
    deliverable: "Projeto em produção",
  },
];

export const Process = () => {
  return (
    <section
      id="processo"
      className="section border-t border-border"
      data-testid="process-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-6">
            <span className="eyebrow">Capítulo 03 — Processo</span>
            <h2 className="section-title mt-6 text-balance">
              Um método simples,
              <br />
              <span className="text-muted-foreground">sem mistério.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-6">
            <p className="text-lg text-muted-foreground text-pretty max-w-lg">
              Trabalhamos em quatro etapas transparentes. Você sabe onde está,
              o que falta e o que cada entrega contém.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={i}
                className="bg-background p-7 md:p-9 flex flex-col min-h-[320px] relative"
                data-testid={`process-step-${i}`}
              >
                <div className="flex items-center justify-between mb-12">
                  <span className="mono text-xs text-primary">{num}</span>
                  <Icon size={18} strokeWidth={1.5} className="text-muted-foreground" />
                </div>

                <h3 className="font-heading text-xl font-semibold tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {step.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Entrega
                  </div>
                  <div className="text-sm text-foreground mt-1">{step.deliverable}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
