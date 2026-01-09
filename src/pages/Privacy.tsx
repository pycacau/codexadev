import { motion } from "framer-motion";
import { Shield, Eye, Database, Lock, Mail, Users, Settings } from "lucide-react";
import { LegalHeader } from "@/components/LegalHeader";
import { LegalFooter } from "@/components/LegalFooter";

const Privacy = () => {
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
              Política de <span className="gradient-text">Privacidade</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Compromisso total com a proteção de seus dados pessoais em conformidade 
              com a Lei Geral de Proteção de Dados LGPD.
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
                  <Shield className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Compromisso com a Privacidade
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A <strong>Codexa</strong> nós ou nosso 
                  respeita profundamente sua privacidade e está comprometida em proteger 
                  seus dados pessoais. Esta Política de Privacidade descreve como coletamos, 
                  utilizamos, armazenamos e compartilhamos suas informações quando você 
                  utiliza nossos serviços digitais.
                </p>
                
                <p>
                  Estamos em total conformidade com a Lei Geral de Proteção de Dados 
                  LGPD Lei nº 13.709/2018 e com as melhores práticas internacionais 
                  de proteção de dados pessoais.
                </p>
              </div>
            </motion.div>

            {/* Data Collection */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Database className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Dados que Coletamos
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Dados Pessoais Fornecidos por Você:</h3>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Nome completo e informações de contato e-mail, telefone</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Informações empresariais CNPJ, razão social, endereço</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Dados de projetos e requisitos específicos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Informações de pagamento e faturamento</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Dados Coletados Automaticamente:</h3>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Endereço IP e informações de acesso</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Tipo de navegador e sistema operacional</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Páginas visitadas e tempo de navegação</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span>Cookies e tecnologias similares</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Data Usage */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Eye className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Como Utilizamos Seus Dados
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Utilizamos seus dados pessoais exclusivamente para:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <div>
                      <strong>Prestação de Serviços:</strong> Executar e gerenciar os serviços 
                      digitais contratados, incluindo desenvolvimento de sites, sistemas e 
                      manutenção técnica.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <div>
                      <strong>Comunicação Administrativa:</strong> Enviar informações sobre 
                      seus projetos, atualizações, faturas e comunicados importantes.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <div>
                      <strong>Melhoria de Serviços:</strong> Analisar dados para melhorar 
                      nossos produtos, serviços e experiência do usuário.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <div>
                      <strong>Marketing com consentimento:</strong> Enviar informações 
                      sobre novos serviços e promoções, quando você autorizar.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <div>
                      <strong>Cumprimento Legal:</strong> Atender a obrigações legais, 
                      regulatórias e requisições judiciais.
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Data Sharing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Compartilhamento de Dados
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Não vendemos, alugamos ou comercializamos seus dados pessoais. 
                  Compartilhamos informações apenas nas seguintes circunstâncias:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <div>
                      <strong>Parceiros de Serviço:</strong> Empresas que nos auxiliam 
                      na prestação de serviços hospedagem, gateways de pagamento, 
                      ferramentas de desenvolvimento, sempre com contratos que 
                      garantem a proteção de dados.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <div>
                      <strong>Obrigação Legal:</strong> Quando exigido por lei, ordem 
                      judicial ou autoridades governamentais competentes.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <div>
                      <strong>Transferência de Negócio:</strong> Em caso de fusão, 
                      aquisição ou venda da empresa, sempre mantendo os mesmos 
                      padrões de proteção de dados.
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Lock className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Segurança dos Dados
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Implementamos medidas robustas de segurança para proteger seus dados:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>Criptografia de dados em trânsito e em repouso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>Controle de acesso restrito e autenticação multifator</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>Monitoramento constante e detecção de ameaças</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>Backups regulares e planos de recuperação</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>Treinamento contínuo da equipe em segurança da informação</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* User Rights */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Settings className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Seus Direitos LGPD
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Conforme a LGPD, você tem os seguintes direitos sobre seus dados:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Direitos Fundamentais:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span><strong>Confirmação:</strong> Verificar se temos seus dados</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span><strong>Acesso:</strong> Solicitar cópia de seus dados</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span><strong>Correção:</strong> Atualizar informações incorretas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span><strong>Eliminação:</strong> Solicitar remoção de dados</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Direitos Adicionais:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span><strong>Portabilidade:</strong> Transferir dados para outro serviço</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span><strong>Informações:</strong> Saber com quem compartilhamos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span><strong>Revogação:</strong> Retirar consentimento</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span><strong>Revisão:</strong> Não ser sujeito a decisões automatizadas</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>Como exercer seus direitos:</strong> Entre em contato conosco 
                    através do e-mail <strong>contato@codexa.com.br</strong> ou WhatsApp 
                    <strong>85 97555-5271</strong>. Responderemos sua solicitação em até 
                    15 dias corridos, conforme previsto pela LGPD.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Data Retention */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Database className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Retenção de Dados
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Seus dados pessoais serão armazenados apenas pelo tempo necessário 
                  para cumprir as finalidades para as quais foram coletados, incluindo:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>
                      <strong>Período Contratual:</strong> Durante toda a vigência do contrato 
                      e serviços prestados
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>
                      <strong>Obrigações Legais:</strong> Prazos exigidos por legislação 
                      fiscal, trabalhista e comercial
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>
                      <strong>Prescrição:</strong> Período necessário para defesa em 
                      possíveis demandas judiciais
                    </span>
                  </li>
                </ul>
                
                <p>
                  Após o término destes períodos, seus dados serão eliminados de forma 
                  segura e definitiva, salvo se houver outra razão legítima para sua 
                  manutenção.
                </p>
              </div>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Eye className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Cookies e Tecnologias Similares
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência 
                  em nosso site:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>
                      <strong>Cookies Essenciais:</strong> Necessários para o funcionamento 
                      básico do site e segurança
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>
                      <strong>Cookies de Desempenho:</strong> Analisam como você utiliza 
                      nosso site para melhorá-lo
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>
                      <strong>Cookies de Funcionalidade:</strong> Lembram suas preferências 
                      e personalizações
                    </span>
                  </li>
                </ul>
                
                <p>
                  Você pode gerenciar suas preferências de cookies através das configurações 
                  do seu navegador. Desativar cookies pode afetar algumas funcionalidades 
                  do site.
                </p>
              </div>
            </motion.div>

            {/* International Transfers */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Shield className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Transferência Internacional de Dados
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Seus dados pessoais são armazenados primariamente no Brasil. Em casos 
                  específicos, podemos transferir dados internacionalmente quando:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>Utilizamos serviços internacionais de tecnologia e hospedagem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>O país de destino possui adequado nível de proteção de dados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>Existem garantias contratuais adequadas de proteção</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Changes to Policy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Settings className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Alterações desta Política
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente para 
                  refletir mudanças em nossas práticas, legislação aplicável ou novos 
                  serviços. Alterações significativas serão comunicadas por:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>Aviso em nosso site com destaque</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>E-mail para clientes ativos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>Notificação em nossos canais de comunicação</span>
                  </li>
                </ul>
                
                <p>
                  Recomendamos revisar esta política periodicamente para estar ciente 
                  de quaisquer atualizações.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Contato e Encarregado de Dados
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Para exercer seus direitos, tirar dúvidas ou reportar problemas 
                  relacionados à privacidade de dados, entre em contato:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Canais de Contato:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <Mail size={20} className="text-primary" />
                        <span><strong>E-mail:</strong> contato@codexa.com.br</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Mail size={20} className="text-primary" />
                        <span><strong>DPO Data Protection Officer:</strong> dpo@codexa.com.br</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Mail size={20} className="text-primary" />
                        <span><strong>WhatsApp:</strong> 85 97555-5271</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Informações da Empresa:</h3>
                    <ul className="space-y-2">
                      <li><strong>Nome:</strong> Codexa</li>
                      <li><strong>Telefone:</strong> 85 97555-5271</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Final Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="border-t border-border pt-8"
            >
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Esta Política de Privacidade foi atualizada em <strong>9 de Janeiro de 2026</strong> 
                  e está em vigor a partir desta data.
                </p>
                
                <p className="text-sm text-muted-foreground">
                  Ao utilizar nossos serviços, você declara ter lido, compreendido 
                  e concordado com esta Política de Privacidade.
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

export default Privacy;
