export const projects = [
  {
    slug: "site-roney",
    title: "Site Roney Advogado",
    description: "Site institucional em produção com foco em credibilidade e contato.",
    tags: ["Site Institucional", "Produção", "SEO"],
    image: "/images/projects/roney.ico",
    localPath: "https://www.roney.adv.br",
    detailPath: "https://www.roney.adv.br",
    liveUrl: "https://www.roney.adv.br",
  },
  {
    slug: "lp-roney",
    title: "Landing Page Roney",
    description: "Landing page mobile-first para campanhas e captação via WhatsApp.",
    tags: ["Landing Page", "Mobile-first", "Marketing"],
    image: "/images/projects/lp-roney.ico",
    localPath: "https://lp.roney.adv.br",
    detailPath: "https://lp.roney.adv.br",
    liveUrl: "https://lp.roney.adv.br",
  },
  {
    slug: "artur-maciel",
    title: "Portfólio Artur Maciel",
    description: "Site pessoal/portfólio com projetos e contato.",
    tags: ["Portfólio", "Pessoal", "Produção"],
    image: "/images/projects/artur.ico",
    localPath: "https://www.arturmaciel.codexa.dev.br",
    detailPath: "https://www.arturmaciel.codexa.dev.br",
    liveUrl: "https://www.arturmaciel.codexa.dev.br",
  },
  {
    slug: "spansiva",
    title: "Spansiva",
    description: "Loja de produtos gamers com PCs, impressoras e acessórios premium.",
    tags: ["E-commerce", "Gamers", "Pages.dev"],
    image: "/images/projects/spansiva.ico",
    localPath: "https://spansiva.pages.dev/",
    detailPath: "https://spansiva.pages.dev/",
    liveUrl: "https://spansiva.pages.dev/",
  },
  {
    slug: "clintiatiangua",
    title: "ClinTiatiangua",
    description: "Site institucional de clínica, hospedado em Pages.",
    tags: ["Institucional", "Saúde", "Produção"],
    image: "/images/projects/clintiatiangua.ico",
    localPath: "https://clintiatiangua.pages.dev",
    detailPath: "https://clintiatiangua.pages.dev",
    liveUrl: "https://clintiatiangua.pages.dev",
  },
];

export function findProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
