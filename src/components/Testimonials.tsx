import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  {
    name: "Ana Souza",
    role: "Gerente de Marketing",
    avatar: "AS",
    rating: 5,
    text: "Entrega antes do prazo e atenção aos detalhes. Nosso site novo elevou a credibilidade e a taxa de conversão subiu 28% no primeiro mês.",
  },
  {
    name: "Lucas Almeida",
    role: "Fundador, VittaTech",
    avatar: "LA",
    rating: 5,
    text: "E-commerce lançado com integração de pagamentos e frete automático. O suporte foi rápido e resolutivo. A operação ficou muito mais previsível.",
  },
  {
    name: "Carla Pereira",
    role: "Diretora Operacional",
    avatar: "CP",
    rating: 5,
    text: "O ERP customizado reduziu retrabalho e trouxe visibilidade de ponta a ponta. Dashboards claros e equipe mais satisfeita com os processos.",
  },
  {
    name: "Roberto Silva",
    role: "CEO, Tech Solutions",
    avatar: "RS",
    rating: 5,
    text: "Profissionalismo do início ao fim. O sistema entregue superou nossas expectativas e já trouxe retorno no primeiro trimestre.",
  },
  {
    name: "Marina Costa",
    role: "Proprietária, Restaurante Sabor",
    avatar: "MC",
    rating: 5,
    text: "O cardápio digital transformou a experiência dos nossos clientes. Pedidos aumentaram e a gestão ficou muito mais simples.",
  },
];

export const Testimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
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
            Depoimentos
          </motion.span>
          <h2 className="section-heading font-heading mb-4">
            Feedbacks de <span className="gradient-text">Clientes</span>
          </h2>
          <p className="section-subheading mx-auto">
            Compartilhe sua experiência ou leia o que outros disseram
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative h-full"
                  >
                    <motion.div 
                      className="glass-card rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-500"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Quote Icon */}
                      <motion.div
                        initial={{ opacity: 0, rotate: -20 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <Quote size={32} className="text-primary/30 mb-4" />
                      </motion.div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            <Star size={16} className="fill-primary text-primary" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <span className="text-primary-foreground font-semibold text-sm">
                            {testimonial.avatar}
                          </span>
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
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
