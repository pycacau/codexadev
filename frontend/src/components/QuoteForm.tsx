import { useState } from "react";
import {
  Globe,
  ShoppingCart,
  Building,
  ChevronRight,
  ChevronLeft,
  Send,
  Check,
  ArrowUpRight,
} from "lucide-react";

type ProjectType = "site" | "ecommerce" | "sistema";

interface FormData {
  projectTypes: ProjectType[];
  pages: string;
  design: string;
  features: string[];
  deadline: string;
  maintenance: boolean;
  name: string;
  email: string;
  phone: string;
  company: string;
  notes: string;
}

const projectOptions = [
  {
    id: "site" as ProjectType,
    icon: Globe,
    title: "Site ou Landing Page",
    description: "Presença online, páginas institucionais",
  },
  {
    id: "ecommerce" as ProjectType,
    icon: ShoppingCart,
    title: "Loja Virtual / E-commerce",
    description: "Venda produtos online com pagamentos",
  },
  {
    id: "sistema" as ProjectType,
    icon: Building,
    title: "Sistema ou Plataforma",
    description: "Automatize processos e dashboards",
  },
];

const pageOptions = ["1-3 páginas", "4-7 páginas", "8-15 páginas", "15+ páginas"];
const designOptions = ["Template Personalizado", "Design Customizado"];
const featureOptions = [
  "Formulário de Contato",
  "Blog/Notícias",
  "Galeria de Imagens",
  "Chat Online",
  "Sistema de Agendamento",
  "Área de Membros",
  "Integração com Redes Sociais",
  "Múltiplos Idiomas",
];
const deadlineOptions = [
  "Urgente (até 2 semanas)",
  "Normal (3-6 semanas)",
  "Flexível (7+ semanas)",
];

const stepTitles = [
  "Tipo de projeto",
  "Escopo e design",
  "Funcionalidades & prazo",
  "Seus dados",
  "Revisão",
];

export const QuoteForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectTypes: [],
    pages: "",
    design: "",
    features: [],
    deadline: "",
    maintenance: false,
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });

  const toggleProjectType = (type: ProjectType) => {
    setFormData((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type],
    }));
  };

  const toggleFeature = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = () => {
    const message = `
*Novo Orçamento — Codexa*

*Tipo de Projeto:* ${formData.projectTypes.join(", ")}
*Páginas:* ${formData.pages}
*Design:* ${formData.design}
*Funcionalidades:* ${formData.features.join(", ")}
*Prazo:* ${formData.deadline}
*Manutenção:* ${formData.maintenance ? "Sim" : "Não"}

*Dados de Contato:*
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Empresa: ${formData.company}

*Observações:* ${formData.notes}
    `.trim();

    window.open(
      `https://wa.me/558597555271?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const canProceed = () => {
    if (step === 1) return formData.projectTypes.length > 0;
    if (step === 2) return formData.pages && formData.design;
    if (step === 3) return formData.deadline;
    if (step === 4) return formData.name && formData.email && formData.phone;
    return true;
  };

  const optionClass = (active: boolean) =>
    `text-left p-5 border transition-all duration-200 rounded-sm ${
      active
        ? "border-primary bg-primary/5 text-foreground"
        : "border-border hover:border-border-strong bg-background text-foreground/80"
    }`;

  const chipClass = (active: boolean) =>
    `px-4 py-2.5 border text-sm transition-all duration-200 rounded-sm ${
      active
        ? "border-primary bg-primary/5 text-foreground"
        : "border-border hover:border-border-strong bg-background text-foreground/80"
    }`;

  const inputClass =
    "w-full h-12 px-4 bg-background border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors";

  return (
    <section
      id="orcamento"
      className="section border-t border-border"
      data-testid="quote-form-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-6">
            <span className="eyebrow">Capítulo 05 — Orçamento</span>
            <h2 className="section-title mt-6 text-balance">
              Vamos desenhar
              <br />
              <span className="text-muted-foreground">a sua proposta.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-6">
            <p className="text-lg text-muted-foreground text-pretty max-w-lg">
              Responda 5 perguntas rápidas. Enviamos para o WhatsApp e
              retornamos com uma proposta personalizada em até 24h.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10">
          {/* Sidebar step navigation */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="border-l border-border pl-6 space-y-6 sticky top-28">
              {stepTitles.map((label, idx) => {
                const s = idx + 1;
                const done = s < step;
                const active = s === step;
                return (
                  <div
                    key={s}
                    className={`flex items-start gap-4 -ml-[25px] ${
                      active ? "text-foreground" : done ? "text-foreground/70" : "text-muted-foreground"
                    }`}
                    data-testid={`step-indicator-${s}`}
                  >
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                        done
                          ? "bg-primary border-primary text-primary-foreground"
                          : active
                          ? "bg-background border-primary"
                          : "bg-background border-border"
                      }`}
                    >
                      {done ? (
                        <Check size={11} strokeWidth={3} />
                      ) : (
                        <span className="mono text-[10px]">{s}</span>
                      )}
                    </div>
                    <div>
                      <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Etapa {String(s).padStart(2, "0")}
                      </div>
                      <div className="text-sm font-medium mt-0.5">{label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Form pane */}
          <div className="col-span-12 lg:col-span-8">
            <div className="frame p-6 md:p-10">
              {step === 1 && (
                <div>
                  <h3 className="font-heading text-2xl font-semibold mb-2">
                    Qual cenário descreve melhor seu projeto?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-8">
                    Pode escolher mais de um — vamos cruzar depois.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {projectOptions.map((o) => {
                      const Icon = o.icon;
                      const active = formData.projectTypes.includes(o.id);
                      return (
                        <button
                          key={o.id}
                          onClick={() => toggleProjectType(o.id)}
                          className={optionClass(active)}
                          data-testid={`project-type-${o.id}`}
                        >
                          <Icon
                            size={22}
                            strokeWidth={1.5}
                            className={`mb-5 ${active ? "text-primary" : "text-muted-foreground"}`}
                          />
                          <div className="font-medium text-sm mb-1">{o.title}</div>
                          <div className="text-xs text-muted-foreground">{o.description}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-10">
                  <div>
                    <h3 className="font-heading text-2xl font-semibold mb-6">
                      Quantas páginas?
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {pageOptions.map((o) => (
                        <button
                          key={o}
                          onClick={() => setFormData({ ...formData, pages: o })}
                          className={chipClass(formData.pages === o)}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold mb-6">
                      Como você quer o design?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {designOptions.map((o) => (
                        <button
                          key={o}
                          onClick={() => setFormData({ ...formData, design: o })}
                          className={optionClass(formData.design === o)}
                        >
                          <div className="text-sm font-medium">{o}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-10">
                  <div>
                    <h3 className="font-heading text-2xl font-semibold mb-6">
                      Funcionalidades desejadas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {featureOptions.map((f) => (
                        <button
                          key={f}
                          onClick={() => toggleFeature(f)}
                          className={chipClass(formData.features.includes(f))}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-semibold mb-6">Prazo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {deadlineOptions.map((o) => (
                        <button
                          key={o}
                          onClick={() => setFormData({ ...formData, deadline: o })}
                          className={optionClass(formData.deadline === o)}
                        >
                          <div className="text-sm font-medium">{o}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-semibold mb-6">
                      Incluir manutenção?
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setFormData({ ...formData, maintenance: true })}
                        className={optionClass(formData.maintenance)}
                      >
                        <div className="text-sm font-medium">Sim, quero manutenção</div>
                      </button>
                      <button
                        onClick={() => setFormData({ ...formData, maintenance: false })}
                        className={optionClass(!formData.maintenance)}
                      >
                        <div className="text-sm font-medium">Apenas desenvolvimento</div>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="font-heading text-2xl font-semibold mb-8">
                    Seus dados de contato
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Nome completo *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                      data-testid="input-name"
                    />
                    <input
                      type="email"
                      placeholder="E-mail *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                      data-testid="input-email"
                    />
                    <input
                      type="tel"
                      placeholder="Telefone / WhatsApp *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass}
                      data-testid="input-phone"
                    />
                    <input
                      type="text"
                      placeholder="Empresa (opcional)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={inputClass}
                      data-testid="input-company"
                    />
                  </div>
                  <textarea
                    placeholder="Alguma observação, link de referência ou detalhe importante?"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={4}
                    className={`${inputClass} h-auto py-3 mt-3 resize-none`}
                    data-testid="input-notes"
                  />
                </div>
              )}

              {step === 5 && (
                <div>
                  <h3 className="font-heading text-2xl font-semibold mb-6">
                    Revisão do seu pedido
                  </h3>
                  <dl className="divide-y divide-border border-y border-border">
                    {[
                      ["Tipo de projeto", formData.projectTypes.join(", ") || "—"],
                      ["Páginas", formData.pages || "—"],
                      ["Design", formData.design || "—"],
                      [
                        "Funcionalidades",
                        formData.features.length ? formData.features.join(", ") : "—",
                      ],
                      ["Prazo", formData.deadline || "—"],
                      ["Manutenção", formData.maintenance ? "Sim" : "Não"],
                      ["Contato", `${formData.name} · ${formData.phone}`],
                      ["E-mail", formData.email || "—"],
                    ].map(([k, v]) => (
                      <div key={k} className="grid grid-cols-3 gap-4 py-3">
                        <dt className="mono text-[11px] uppercase tracking-wider text-muted-foreground col-span-1">
                          {k}
                        </dt>
                        <dd className="text-sm text-foreground col-span-2">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <button
                    onClick={handleSubmit}
                    className="btn-primary mt-8 w-full md:w-auto"
                    data-testid="submit-quote-btn"
                  >
                    <Send size={16} />
                    Enviar pelo WhatsApp
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              )}

              {/* Navigation */}
              {step < 5 && (
                <div className="flex items-center justify-between pt-10 mt-10 border-t border-border">
                  <button
                    onClick={() => setStep(step - 1)}
                    disabled={step === 1}
                    className={`btn-link ${step === 1 ? "opacity-40 cursor-not-allowed" : ""}`}
                    data-testid="prev-step-btn"
                  >
                    <ChevronLeft size={16} />
                    Voltar
                  </button>
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                    className={`${
                      canProceed() ? "btn-primary" : "btn-ghost opacity-50 cursor-not-allowed"
                    }`}
                    data-testid="next-step-btn"
                  >
                    Próximo passo
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
