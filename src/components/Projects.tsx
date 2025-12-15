import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const projects = [
  {
    title: "Orbitale Store",
    description:
      "E-commerce omnichannel com estoque unificado, integração a marketplaces, PDV e painel do lojista para governança de preços e promoções.",
    tags: ["E-commerce", "Omnichannel", "Paywall", "Marketplace"],
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Fluxora Suite",
    description:
      "Plataforma ERP modular que sincroniza vendas, estoque e financeiro com workflows, automações e dashboards executivos.",
    tags: ["ERP", "Financeiro", "Estoque", "Automação"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Pulsewave Analytics",
    description:
      "Plataforma SaaS de análise e previsão com conectores plug-and-play, playbooks de automação e métricas de churn e MRR.",
    tags: ["SaaS", "Analytics", "MRR", "Automação"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=700&fit=crop",
    link: "#",
  },
  {
    title: "Alvorar Tech",
    description:
      "Consultoria e engenharia de software focada em discovery, design systems e squads multidisciplinares para acelerar produtos digitais.",
    tags: ["Consultoria", "Design System", "Engenharia", "Produto"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=700&fit=crop",
    link: "#",
  },
];

export const Projects = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      {/* Animated Background Effects */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 12}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

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
            Portfólio
          </motion.span>
          <h2 className="section-heading font-heading mb-4">
            Nossos <span className="gradient-text">Projetos</span>
          </h2>
          <p className="section-subheading mx-auto">
            Conheça alguns dos projetos que desenvolvemos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-4 md:px-12"
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
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group h-full"
                  >
                    <motion.div 
                      className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 h-full flex flex-col"
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                        
                        {/* Overlay Link */}
                        <motion.a
                          href={project.link}
                          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary"
                          whileHover={{ scale: 1.1, rotate: 15 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={18} className="text-primary-foreground" />
                        </motion.a>

                        {/* Shine effect on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: tagIndex * 0.05 }}
                              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>

                        <motion.a
                          href={project.link}
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/link"
                          whileHover={{ x: 5 }}
                        >
                          Ver Detalhes
                          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </motion.a>
                      </div>
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-card/80 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            <CarouselNext className="hidden md:flex -right-4 bg-card/80 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
          </Carousel>
        </motion.div>

        {/* Carousel indicator */}
        <motion.div 
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/30"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                delay: i * 0.25 
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
