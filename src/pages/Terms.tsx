import { motion } from "framer-motion";
import { Shield, Users, FileText, AlertCircle, Mail, Phone, MapPin } from "lucide-react";
import { LegalHeader } from "@/components/LegalHeader";
import { LegalFooter } from "@/components/LegalFooter";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main>
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[60vh] flex items-center justify-center overflow-visible pt-32"
        >
          {/* Animated Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
                x: [0, 30, 0],
                y: [0, -20, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px]"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.25, 0.15],
                x: [0, -40, 0],
                y: [0, 30, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Documentos Legais
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Termos de <span className="gradient-text">Uso</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bem-vindo aos Termos de Uso da Codexa. Estes termos regulam o acesso e utilização 
              de nossos serviços digitais e plataformas web.
            </p>
          </div>
        </motion.section>

      {/* Main Content */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pb-24 px-4"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <FileText className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Introdução e Aceitação
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Estes Termos de Uso constituem um acordo legal entre 
                  <strong> Codexa</strong> e você, o Usuário ou Cliente. 
                  Todos os direitos sobre os serviços, conteúdos e propriedade 
                  intelectual pertencem à Codexa.
                </p>
                
                <p>
                  Ao acessar, navegar ou utilizar nossos serviços, sites, plataformas digitais 
                  e soluções tecnológicas fornecidas pela Codexa, você concorda expressamente 
                  com estes Termos de Uso e com nossa Política de Privacidade.
                </p>
                
                <p>
                  Caso não concorde com qualquer parte destes termos, você não deve utilizar 
                  nossos serviços. A Codexa reserva-se o direito de modificar estes termos a 
                  qualquer momento, mediante aviso prévio aos usuários.
                </p>
              </div>
            </motion.div>

            {/* Services Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Descrição dos Serviços
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Codexa oferece os seguintes serviços digitais:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <div>
                      <strong>Desenvolvimento de Sites Institucionais:</strong> Criação de sites 
                      personalizados para empresas e profissionais, incluindo design responsivo, 
                      otimização SEO e painel administrativo.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <div>
                      <strong>E-commerce e Lojas Virtuais:</strong> Desenvolvimento de plataformas 
                      de comércio eletrônico completas, com integração de pagamentos, cálculo 
                      automático de frete e gestão de produtos.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <div>
                      <strong>Sistemas Privativos:</strong> Soluções customizadas para automação 
                      de processos empresariais, incluindo sistemas de gestão, controle de estoque 
                      e plataformas específicas.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <div>
                      <strong>Manutenção e Suporte Técnico:</strong> Serviços contínuos de 
                      manutenção, atualizações e suporte para sites e sistemas desenvolvidos.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <div>
                      <strong>Consultoria Digital:</strong> Análise, planejamento estratégico 
                      e orientação para presença digital e marketing online.
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Shield className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Obrigações e Responsabilidades
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground mb-3">Responsabilidades da Codexa:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Fornecer serviços com profissionalismo e qualidade técnica</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Manter confidencialidade das informações do cliente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Oferecer suporte técnico conforme contratado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Respeitar prazos e especificações acordadas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Garantir segurança básica das aplicações desenvolvidas</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground mb-3">Responsabilidades do Cliente:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Fornecer informações precisas e completas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Realizar pagamentos conforme acordado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Respeitar propriedade intelectual da Codexa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Manter atualizados dados de contato e pagamento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Utilizar os serviços de forma legal e ética</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Payments */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <FileText className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Pagamentos e Planos
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong>Formas de Pagamento:</strong> Aceitamos pagamentos via PIX, 
                  transferência bancária, cartão de crédito e boleto bancário, conforme 
                  acordado em cada projeto.
                </p>
                
                <p>
                  <strong>Planos de Serviços:</strong> Oferecemos planos mensais de manutenção 
                  e suporte, com valores variando conforme a complexidade e necessidades 
                  do cliente.
                </p>
                
                <p>
                  <strong>Política de Reembolso:</strong> Reembolsos serão analisados caso a caso, 
                  considerando o estágio do projeto e serviços já prestados. Projetos customizados 
                  podem ter regras específicas definidas em contrato.
                </p>
                
                <p>
                  <strong>Inadimplência:</strong> Em caso de atraso nos pagamentos, a Codexa 
                  reserva-se o direito de suspender temporariamente os serviços até a regularização.
                </p>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Shield className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Propriedade Intelectual
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong>Código e Desenvolvimento:</strong> O código-fonte desenvolvido pela 
                  Codexa permanece como propriedade intelectual da empresa, sendo concedido 
                  ao cliente licença de uso perpetua após quitação integral dos pagamentos.
                </p>
                
                <p>
                  <strong>Conteúdo do Cliente:</strong> O cliente mantém todos os direitos sobre 
                  seu conteúdo textos, imagens, logos, sendo responsável por sua legalidade 
                  e direitos autorais.
                </p>
                
                <p>
                  <strong>Terceiros:</strong> Utilizamos apenas bibliotecas, frameworks e 
                  recursos de terceiros com licenças compatíveis com uso comercial, garantindo 
                  legalidade e segurança das soluções desenvolvidas.
                </p>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <AlertCircle className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Limitação de Responsabilidade
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Codexa não se responsabiliza por:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>
                      Danos indiretos, incidentais ou consequenciais resultantes do uso 
                      ou incapacidade de uso de nossos serviços
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>
                      Perda de dados ou informações causadas por falhas em backups 
                      não contratados explicitamente
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>
                      Interrupções de serviço causadas por terceiros provedores de hospedagem, 
                      internet e outros
                    </span>
                  </li>
                </ul>
                
                <p>
                  A responsabilidade total da Codexa em qualquer circunstância não excederá 
                  o valor total pago pelo cliente pelos serviços específicos em questão.
                </p>
              </div>
            </motion.div>

            {/* Privacy and Data */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Shield className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Privacidade e Proteção de Dados
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Codexa compromete-se com a proteção de dados pessoais em conformidade 
                  com a Lei Geral de Proteção de Dados LGPD Lei nº 13.709/2018. 
                  Nossa Política de Privacidade detalha como coletamos, armazenamos, 
                  utilizamos e protegemos suas informações.
                </p>
                
                <p>
                  Os dados pessoais fornecidos pelo cliente serão utilizados exclusivamente 
                  para prestação dos serviços contratados, comunicação administrativa e 
                  melhorias em nossos produtos e serviços.
                </p>
              </div>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <AlertCircle className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Rescisão e Encerramento
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong>Por iniciativa do cliente:</strong> O cliente pode solicitar o 
                  cancelamento dos serviços a qualquer momento, sujeito às condições 
                  contratuais e pagamentos de serviços já prestados.
                </p>
                
                <p>
                  <strong>Por iniciativa da Codexa:</strong> Reservamo-nos o direito de 
                  encerrar serviços em casos de violação destes termos, uso indevido 
                  dos serviços, inadimplência ou comportamento prejudicial.
                </p>
                
                <p>
                  <strong>Efeitos do encerramento:</strong> Após o encerramento, o cliente 
                  terá direito aos entregáveis já pagos, desde que não haja pendências 
                  financeiras. Dados e conteúdos serão disponibilizados para exportação 
                  por até 30 dias após o encerramento.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Informações de Contato
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary" />
                  <span>E-mail: <strong>contato@codexa.com.br</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-primary" />
                  <span>WhatsApp: <strong>85 97555-5271</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-primary" />
                  <span>Endereço: <strong>[Endereço Completo da Empresa]</strong></span>
                </div>
              </div>
            </motion.div>

            {/* Final Terms */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="border-t border-border pt-8"
            >
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Estes Termos de Uso foram atualizados em <strong>9 de Janeiro de 2026</strong> 
                  e entram em vigor nesta data.
                </p>
                
                <p className="text-sm text-muted-foreground">
                  Ao continuar utilizando nossos serviços, você declara ter lido, compreendido 
                  e concordado com todos os termos e condições aqui estabelecidos.
                </p>
                
                <div className="pt-4">
                  <p className="font-semibold text-foreground">
                    Codexa
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Todos os direitos reservados à empresa
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      </main>
      <LegalFooter />
    </div>
  );
};

export default Terms;
