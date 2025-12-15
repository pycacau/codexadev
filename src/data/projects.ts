export const projects = [
  {
    slug: "site-institucional",
    title: "Site Institucional",
    description: "Site institucional para escritório de advocacia com foco em credibilidade e contato.",
    tags: ["Site Institucional", "HTML", "CSS", "Responsivo"],
    image: "https://images.unsplash.com/photo-1508385082359-fc9b5f9d3a3a?w=1200&q=80",
    localPath: "/projetos/site-institucional/index.html",
    liveUrl: "https://www.roney.adv.br",
  },
  {
    slug: "saas",
    title: "Plataforma SaaS",
    description: "Plataforma SaaS de analytics com métricas em tempo real e dashboards.",
    tags: ["SaaS", "Analytics", "MRR"],
    image: "https://images.unsplash.com/photo-1508385082359-fc9b5f9d3a3a?w=1200&q=80",
    localPath: "/projetos/saas/index.html",
    liveUrl: "/projetos/saas/index.html",
  },
  {
    slug: "erp",
    title: "Sistema ERP",
    description: "Sistema de gestão empresarial com módulos de vendas, estoque e financeiro.",
    tags: ["ERP", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    localPath: "/projetos/erp/index.html",
    liveUrl: "/projetos/erp/index.html",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Completo",
    description: "Loja virtual integrada com painel administrativo e pagamentos.",
    tags: ["E-commerce", "Vue.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80",
    localPath: "/projetos/ecommerce/index.html",
    liveUrl: "/projetos/ecommerce/index.html",
  },
];

export function findProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
