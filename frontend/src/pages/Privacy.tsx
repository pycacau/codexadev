import { LegalHeader } from "@/components/LegalHeader";
import { LegalFooter } from "@/components/LegalFooter";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    id: "compromisso",
    num: "01",
    title: "Compromisso com a privacidade",
    body: [
      "A Codexa respeita profundamente sua privacidade e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e compartilhamos suas informações quando você utiliza nossos serviços digitais.",
      "Estamos em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018) e com as melhores práticas internacionais de proteção de dados pessoais.",
    ],
  },
  {
    id: "coleta",
    num: "02",
    title: "Dados que coletamos",
    body: ["Coletamos dados fornecidos diretamente por você e dados coletados automaticamente pela sua interação com nossos serviços:"],
    list: [
      ["Dados pessoais", "Nome completo, e-mail, telefone, CNPJ, razão social, endereço e dados de pagamento."],
      ["Dados de projeto", "Requisitos, briefings, materiais fornecidos, referências e especificações técnicas."],
      ["Dados de navegação", "Endereço IP, tipo de navegador, sistema operacional, páginas visitadas e cookies."],
    ],
  },
  {
    id: "uso",
    num: "03",
    title: "Como utilizamos seus dados",
    body: ["Utilizamos seus dados pessoais exclusivamente para:"],
    list: [
      ["Prestação de serviços", "Executar e gerenciar os serviços digitais contratados."],
      ["Comunicação administrativa", "Enviar informações sobre seus projetos, atualizações, faturas e comunicados."],
      ["Melhoria de serviços", "Analisar dados para melhorar nossos produtos e a experiência do usuário."],
      ["Marketing com consentimento", "Enviar informações sobre novos serviços, quando você autorizar."],
      ["Cumprimento legal", "Atender a obrigações legais, regulatórias e requisições judiciais."],
    ],
  },
  {
    id: "compartilhamento",
    num: "04",
    title: "Compartilhamento de dados",
    body: [
      "Não vendemos, alugamos ou comercializamos seus dados pessoais. Compartilhamos informações apenas com parceiros de serviço (hospedagem, gateways de pagamento, ferramentas de desenvolvimento), sempre com contratos que garantem a proteção dos dados, ou quando exigido por lei e autoridades competentes.",
    ],
  },
  {
    id: "seguranca",
    num: "05",
    title: "Segurança dos dados",
    body: ["Adotamos medidas robustas de segurança: criptografia em trânsito e em repouso, controle de acesso restrito, autenticação multifator, monitoramento contínuo, backups regulares e treinamento da equipe em segurança da informação."],
  },
  {
    id: "direitos",
    num: "06",
    title: "Seus direitos (LGPD)",
    body: ["Conforme a LGPD, você tem direito a:"],
    list: [
      ["Confirmação e acesso", "Verificar se temos seus dados e solicitar cópia."],
      ["Correção", "Atualizar informações incorretas."],
      ["Eliminação", "Solicitar remoção de dados quando cabível."],
      ["Portabilidade", "Transferir dados para outro serviço."],
      ["Revogação", "Retirar consentimento a qualquer momento."],
    ],
  },
  {
    id: "retencao",
    num: "07",
    title: "Retenção de dados",
    body: [
      "Seus dados serão armazenados apenas pelo tempo necessário para cumprir as finalidades: durante a vigência contratual, conforme obrigações legais (fiscais e trabalhistas) e pelo prazo prescricional para defesa em demandas judiciais. Após esse período, os dados serão eliminados de forma segura.",
    ],
  },
  {
    id: "cookies",
    num: "08",
    title: "Cookies",
    body: [
      "Utilizamos cookies essenciais (funcionamento e segurança), de desempenho (análise de uso) e de funcionalidade (preferências). Você pode gerenciá-los pelo navegador — desativá-los pode afetar algumas funcionalidades.",
    ],
  },
  {
    id: "contato",
    num: "09",
    title: "Contato e encarregado",
    body: [
      "Para exercer seus direitos ou tirar dúvidas, entre em contato pelo e-mail codexa.service@gmail.com ou WhatsApp +55 85 9755-5271. Responderemos em até 15 dias corridos, conforme a LGPD.",
    ],
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            Voltar ao início
          </Link>

          <span className="eyebrow">Documento legal</span>
          <h1 className="display text-5xl md:text-7xl mt-6 mb-6 text-balance">
            Política de<br />privacidade<span className="text-primary">.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Compromisso total com a proteção de seus dados pessoais em
            conformidade com a LGPD.
          </p>
          <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground mt-6">
            Última atualização · 9 de Janeiro de 2026
          </div>

          <div className="h-px bg-border my-16" />

          <div className="space-y-16">
            {sections.map((s) => (
              <section key={s.id} id={s.id}>
                <div className="flex items-start gap-4 mb-6">
                  <span className="mono text-sm text-primary mt-2">{s.num}</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight">
                    {s.title}
                  </h2>
                </div>
                <div className="space-y-4 text-foreground/85 leading-relaxed pl-0 md:pl-10">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {s.list && (
                    <ul className="space-y-4 mt-4">
                      {s.list.map(([k, v], i) => (
                        <li key={i} className="border-l-2 border-primary/40 pl-4">
                          <div className="font-medium text-foreground">{k}</div>
                          <div className="text-sm text-muted-foreground mt-1">{v}</div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <LegalFooter />
    </div>
  );
};

export default Privacy;
