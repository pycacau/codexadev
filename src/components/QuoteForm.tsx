import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  ShoppingCart, 
  Building, 
  ChevronRight, 
  ChevronLeft, 
  Send,
  Check
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
  { id: "site" as ProjectType, icon: Globe, title: "Site ou Landing Page", description: "Presença online, páginas institucionais" },
  { id: "ecommerce" as ProjectType, icon: ShoppingCart, title: "Loja Virtual / E-commerce", description: "Venda produtos online com pagamentos" },
  { id: "sistema" as ProjectType, icon: Building, title: "Sistema ou Plataforma", description: "Automatize processos e dashboards" },
];

const pageOptions = ["1-3 páginas", "4-7 páginas", "8-15 páginas", "15+ páginas"];
const designOptions = ["Template Personalizado", "Design Customizado"];
const featureOptions = ["Formulário de Contato", "Blog/Notícias", "Galeria de Imagens", "Chat Online", "Sistema de Agendamento", "Área de Membros", "Integração com Redes Sociais", "Múltiplos Idiomas"];
const deadlineOptions = ["Urgente (até 2 semanas)", "Normal (3-6 semanas)", "Flexível (7+ semanas)"];

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
*Novo Orçamento - Codexa*

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

    window.open(`https://wa.me/558597555271?text=${encodeURIComponent(message)}`, "_blank");
  };

  const canProceed = () => {
    if (step === 1) return formData.projectTypes.length > 0;
    if (step === 2) return formData.pages && formData.design;
    if (step === 3) return formData.deadline;
    if (step === 4) return formData.name && formData.email && formData.phone;
    return true;
  };

  return (
    <section id="orcamento" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading font-heading mb-4">
            Solicite seu <span className="gradient-text">Orçamento</span>
          </h2>
          <p className="section-subheading mx-auto">
            Responda algumas perguntas e receba uma proposta personalizada
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    s <= step
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s < step ? <Check size={18} /> : s}
                </div>
                {s < 5 && (
                  <div className={`w-12 md:w-24 h-1 mx-2 rounded-full transition-all ${
                    s < step ? "bg-primary" : "bg-muted"
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Form Steps */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="glass-card rounded-2xl p-8"
          >
            <AnimatePresence mode="wait">
              {step === 1 && (
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Qual cenário descreve melhor seu projeto?</h3>
                  <p className="text-sm text-muted-foreground mb-6">Selecione quantas opções quiser</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projectOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => toggleProjectType(option.id)}
                        className={`p-5 rounded-xl border text-left transition-all ${
                          formData.projectTypes.includes(option.id)
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <option.icon size={28} className={`mb-3 ${formData.projectTypes.includes(option.id) ? "text-primary" : "text-muted-foreground"}`} />
                        <h4 className="font-semibold text-sm mb-1">{option.title}</h4>
                        <p className="text-xs text-muted-foreground">{option.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-2">Quantas páginas você precisa?</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                      {pageOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => setFormData({ ...formData, pages: option })}
                          className={`p-4 rounded-xl border text-sm transition-all ${
                            formData.pages === option
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-2">Como você quer o design?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {designOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => setFormData({ ...formData, design: option })}
                          className={`p-4 rounded-xl border text-sm transition-all ${
                            formData.design === option
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-2">Quais funcionalidades você precisa?</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                      {featureOptions.map((feature) => (
                        <button
                          key={feature}
                          onClick={() => toggleFeature(feature)}
                          className={`p-3 rounded-xl border text-xs transition-all ${
                            formData.features.includes(feature)
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {feature}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-2">Qual o prazo desejado?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                      {deadlineOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => setFormData({ ...formData, deadline: option })}
                          className={`p-4 rounded-xl border text-sm transition-all ${
                            formData.deadline === option
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-2">Deseja incluir manutenção?</h3>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <button
                        onClick={() => setFormData({ ...formData, maintenance: true })}
                        className={`p-4 rounded-xl border text-sm transition-all ${
                          formData.maintenance ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                        }`}
                      >
                        Sim, quero manutenção
                      </button>
                      <button
                        onClick={() => setFormData({ ...formData, maintenance: false })}
                        className={`p-4 rounded-xl border text-sm transition-all ${
                          !formData.maintenance ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                        }`}
                      >
                        Não, apenas desenvolvimento
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-6">Seus dados de contato</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nome Completo *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="E-mail *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Telefone/WhatsApp *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Nome da Empresa (opcional)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full p-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <textarea
                    placeholder="Alguma observação adicional?"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={4}
                    className="w-full mt-4 p-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>
              )}

              {step === 5 && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Send size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl mb-4">Resumo do seu projeto</h3>
                  <div className="text-left bg-muted/50 rounded-xl p-6 mb-6">
                    <p className="text-sm text-muted-foreground mb-2"><strong>Tipo:</strong> {formData.projectTypes.join(", ")}</p>
                    <p className="text-sm text-muted-foreground mb-2"><strong>Páginas:</strong> {formData.pages}</p>
                    <p className="text-sm text-muted-foreground mb-2"><strong>Design:</strong> {formData.design}</p>
                    <p className="text-sm text-muted-foreground mb-2"><strong>Prazo:</strong> {formData.deadline}</p>
                    <p className="text-sm text-muted-foreground"><strong>Contato:</strong> {formData.name} - {formData.phone}</p>
                  </div>
                  <button onClick={handleSubmit} className="btn-primary inline-flex items-center gap-2">
                    <Send size={18} />
                    Enviar pelo WhatsApp
                  </button>
                </div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {step < 5 && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(step - 1)}
                  disabled={step === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                    step === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-muted"
                  }`}
                >
                  <ChevronLeft size={18} />
                  Anterior
                </button>
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                    canProceed()
                      ? "btn-primary"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  Próximo
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
