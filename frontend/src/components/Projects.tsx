import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export const Projects = () => {
  const visibleProjects = projects.filter((p) => !("hidden" in p) || !p.hidden);

  return (
    <section
      id="projetos"
      className="section border-t border-border bg-surface/40"
      data-testid="projects-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-6">
            <span className="eyebrow">Capítulo 02 — Selecionados</span>
            <h2 className="section-title mt-6 text-balance">
              Projetos que já estão
              <br />
              <span className="text-muted-foreground">no ar.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-6">
            <p className="text-lg text-muted-foreground text-pretty max-w-lg">
              Uma seleção de clientes ativos em produção. Clique no card para
              abrir o site ou ver detalhes.
            </p>
          </div>
        </div>

        {/* Project list — editorial, numbered rows */}
        <div className="border-t border-border">
          {visibleProjects.map((project, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <a
                key={project.slug}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-12 gap-4 md:gap-6 py-8 md:py-10 border-b border-border transition-colors hover:bg-surface-2/60 px-2 md:px-4 -mx-2 md:-mx-4"
                data-testid={`project-row-${project.slug}`}
              >
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="mono text-[11px] text-muted-foreground group-hover:text-primary transition-colors">
                    {num}
                  </span>
                </div>

                {/* Title + description */}
                <div className="col-span-10 md:col-span-5">
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-md">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="col-span-8 md:col-span-4 flex flex-wrap gap-2 items-start md:items-center md:pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono text-[10px] tracking-wider uppercase text-muted-foreground border border-border rounded-sm px-2 py-1 group-hover:border-border-strong transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow + details link */}
                <div className="col-span-4 md:col-span-2 flex items-center justify-end gap-4">
                  <Link
                    to={`/projetos/${project.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="hidden md:inline mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Detalhes
                  </Link>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight size={16} className="group-hover:rotate-12 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer hint */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-12 gap-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <ExternalLink size={14} />
            Todos os sites estão ativos e em produção.
          </div>
          <a href="#orcamento" className="btn-link" data-testid="projects-cta-orcamento">
            Quero um desse porte
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
