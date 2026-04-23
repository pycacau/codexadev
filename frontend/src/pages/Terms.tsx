import { LegalHeader } from "@/components/LegalHeader";
import { LegalFooter } from "@/components/LegalFooter";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    id: "introducao",
    num: "01",
    title: "Introdução e aceitação",
    body: [
      "Estes Termos de Uso constituem um acordo legal entre a Codexa e você, o Usuário ou Cliente. Todos os direitos sobre os serviços, conteúdos e propriedade intelectual pertencem à Codexa.",
      "Ao acessar, navegar ou utilizar nossos serviços, sites, plataformas digitais e soluções tecnológicas fornecidas pela Codexa, você concorda expressamente com estes Termos de Uso e com nossa Política de Privacidade.",
      "Caso não concorde com qualquer parte destes termos, você não deve utilizar nossos serviços. A Codexa reserva-se o direito de modificar estes termos a qualquer momento, mediante aviso prévio aos usuários.",
    ],
  },
  {
    id: "servicos",
    num: "02",
    title: "Descrição dos serviços",
    body: ["A Codexa oferece os seguintes serviços digitais:"],
    list: [
      ["Sites Institucionais", "Criação de sites personalizados para empresas e profissionais, incluindo design responsivo, otimização SEO e painel administrativo."],
      ["E-commerce e Lojas Virtuais", "Desenvolvimento de plataformas de comércio eletrônico completas, com integração de pagamentos, cálculo automático de frete e gestão de produtos."],
      ["Sistemas Privativos", "Soluções customizadas para automação de processos empresariais, incluindo sistemas de gestão, controle de estoque e plataformas específicas."],
      ["Manutenção e Suporte", "Serviços contínuos de manutenção, atualizações e suporte para sites e sistemas desenvolvidos."],
      ["Consultoria Digital", "Análise, planejamento estratégico e orientação para presença digital e marketing online."],
    ],
  },
  {
    id: "responsabilidades",
    num: "03",
    title: "Obrigações e responsabilidades",
    body: [
      "A Codexa compromete-se a fornecer serviços com profissionalismo e qualidade técnica, manter confidencialidade das informações do cliente, oferecer suporte técnico conforme contratado, respeitar prazos e especificações acordadas e garantir a segurança básica das aplicações desenvolvidas.",
      "O cliente compromete-se a fornecer informações precisas e completas, realizar pagamentos conforme acordado, respeitar a propriedade intelectual da Codexa, manter atualizados dados de contato e pagamento, e utilizar os serviços de forma legal e ética.",
    ],
  },
  {
    id: "pagamentos",
    num: "04",
    title: "Pagamentos e planos",
    body: [
      "Formas de pagamento: PIX, transferência bancária, cartão de crédito e boleto bancário, conforme acordado em cada projeto.",
      "Planos de serviços: oferecemos planos mensais de manutenção e suporte, com valores variando conforme a complexidade e necessidades do cliente.",
      "Reembolsos serão analisados caso a caso, considerando o estágio do projeto e serviços já prestados.",
      "Em caso de atraso nos pagamentos, a Codexa reserva-se o direito de suspender temporariamente os serviços até a regularização.",
    ],
  },
  {
    id: "propriedade",
    num: "05",
    title: "Propriedade intelectual",
    body: [
      "O código-fonte desenvolvido pela Codexa permanece como propriedade intelectual da empresa, sendo concedido ao cliente licença de uso perpétua após quitação integral dos pagamentos.",
      "O cliente mantém todos os direitos sobre seu conteúdo (textos, imagens, logos), sendo responsável por sua legalidade e direitos autorais.",
      "Utilizamos apenas bibliotecas, frameworks e recursos de terceiros com licenças compatíveis com uso comercial.",
    ],
  },
  {
    id: "limites",
    num: "06",
    title: "Limitação de responsabilidade",
    body: ["A Codexa não se responsabiliza por danos indiretos, incidentais ou consequenciais, perda de dados sem backups explicitamente contratados, ou interrupções de serviço causadas por terceiros (hospedagem, internet, provedores). A responsabilidade total da Codexa em qualquer circunstância não excederá o valor total pago pelo cliente pelos serviços específicos em questão."],
  },
  {
    id: "rescisao",
    num: "07",
    title: "Rescisão e encerramento",
    body: [
      "O cliente pode solicitar o cancelamento dos serviços a qualquer momento, sujeito às condições contratuais e pagamentos de serviços já prestados.",
      "A Codexa reserva-se o direito de encerrar serviços em casos de violação destes termos, uso indevido, inadimplência ou comportamento prejudicial.",
      "Após o encerramento, o cliente terá direito aos entregáveis já pagos, desde que não haja pendências. Dados e conteúdos serão disponibilizados para exportação por até 30 dias.",
    ],
  },
  {
    id: "contato",
    num: "08",
    title: "Contato",
    body: [
      "Em caso de dúvidas, entre em contato pelo e-mail codexa.service@gmail.com ou WhatsApp +55 85 9755-5271.",
    ],
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            Voltar ao início
          </Link>

          <span className="eyebrow">Documento legal</span>
          <h1 className="display-fluid-footer mt-6 mb-6 text-balance">
            Termos<br />de uso<span className="text-primary">.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Estes termos regulam o acesso e a utilização dos nossos serviços
            digitais e plataformas web.
          </p>
          <div className="mono text-[11px] uppercase tracking-wider text-muted-foreground mt-6">
            Última atualização · 9 de Janeiro de 2026
          </div>

          <div className="h-px bg-border my-16" />

          {/* Sections */}
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

export default Terms;
