import { motion } from "framer-motion";
import { 
  Monitor, 
  ShoppingCart, 
  Settings, 
  Wrench, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Zap 
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const services = [
  {
    icon: Monitor,
    title: "Desenvolvimento de Sites",
    description: "Site Institucional Simples, Avançado ou Premium Personalizado. Soluções completas para sua presença digital.",
    features: ["Site Institucional", "Design exclusivo e responsivo", "SEO e otimizações", "Painel administrativo", "Animações modernas"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce (Loja Virtual)",
    description: "Loja virtual completa com pagamentos, frete automático e painel de gerenciamento profissional.",
    features: ["Até 30 produtos", "Pagamentos (Pix, Cartão, Boleto)", "Frete automático", "Sistema de cupons", "Painel completo"],
  },
  {
    icon: Settings,
    title: "Sistemas Privados",
    description: "Sistemas personalizados criados do zero para automatizar processos do seu negócio.",
    features: ["Controle de estoque e financeiro", "Sistema de agendamentos", "Área de clientes", "Automação de processos", "Relatórios inteligentes"],
  },
  {
    icon: Wrench,
    title: "Manutenção Web Mensal",
    description: "Mantenha seu site funcionando perfeitamente sem dores de cabeça. Suporte contínuo e atualizações.",
    features: ["Atualizações e correções", "Monitoramento do site", "Suporte direto", "Segurança contínua", "Ajustes simples"],
  },
  {
    icon: Smartphone,
    title: "Cardápios Digitais",
    description: "Cardápio digital moderno para restaurantes, bares e deliverys. Atualização fácil e integração com pedidos.",
    features: ["Página digital responsiva", "Organização por categorias", "Atualização fácil", "Link para pedidos", "Layout moderno"],
  },
  {
    icon: Palette,
    title: "Identidade Visual e Design",
    description: "Fortaleça sua marca com visual profissional. Logo, cores, tipografia e manual da marca completo.",
    features: ["Logo profissional", "Cores e tipografia", "Style guide", "Manual da marca", "Artes para redes sociais"],
  },
  {
    icon: TrendingUp,
    title: "Consultoria e Estratégia",
    description: "Orientação profissional para crescer no digital. Análise, diagnóstico e plano estratégico personalizado.",
    features: ["Análise de presença online", "Diagnóstico profissional", "Plano estratégico", "Sugestões de melhorias", "Orientação personalizada"],
  },
  {
    icon: Zap,
    title: "Extras e Add-ons",
    description: "Funcionalidades extras para potencializar seu projeto. Integrações, automações e otimizações avançadas.",
    features: ["Chatbot integrado", "Landing pages", "Automação de mensagens", "SEO avançado", "Área de membros"],
  },
];

export const Services = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <motion.div 
        className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-[120px]"
        animate={{ 
          x: [0, -40, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            O que oferecemos
          </motion.span>
          <h2 className="section-heading font-heading mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="section-subheading mx-auto">
            Soluções completas para sua presença digital
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="h-full"
                  >
                    <motion.div
                      className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 cursor-pointer h-full flex flex-col"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <motion.div 
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <service.icon size={28} className="text-primary" />
                      </motion.div>

                      <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                        {service.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-grow">
                        {service.description}
                      </p>

                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: featureIndex * 0.05 }}
                          >
                            <motion.span 
                              className="w-1.5 h-1.5 rounded-full bg-primary/60"
                              whileHover={{ scale: 1.5 }}
                            />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* Carousel indicator dots */}
        <motion.div 
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/30"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.3 
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
