import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/codexa.dev", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/codexa-dev", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/codexa", label: "GitHub" },
];

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Orçamento", href: "#orcamento" },
];

export const Footer = () => {
  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-background" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <img src="/logo.png" alt="Codexa" className="w-10 h-10 rounded-lg" />
              <span className="font-heading font-bold text-xl text-foreground">CODEXA</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Transformamos suas ideias em soluções digitais. Desenvolvimento web profissional com foco em resultados.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-muted-foreground">Sites Institucionais</span></li>
              <li><span className="text-sm text-muted-foreground">E-commerce</span></li>
              <li><span className="text-sm text-muted-foreground">Sistemas Privados</span></li>
              <li><span className="text-sm text-muted-foreground">Identidade Visual</span></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-heading font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground justify-center md:justify-start">
                <Mail size={16} className="text-primary" />
                contato@codexa.dev.br
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground justify-center md:justify-start">
                <Phone size={16} className="text-primary" />
                +55 (88) 99999-9999
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground justify-center md:justify-start">
                <MapPin size={16} className="text-primary" />
                Av. Beira Mar, 1000 · Fortaleza · CE
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Codexa. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
