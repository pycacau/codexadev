import { useParams, Link } from "react-router-dom";
import { findProject } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? findProject(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <span className="eyebrow justify-center">Erro 404</span>
            <h1 className="display text-5xl md:text-7xl mt-6 mb-6">
              Projeto não encontrado<span className="text-primary">.</span>
            </h1>
            <p className="text-muted-foreground mb-10">
              O projeto que você tentou acessar não existe ou foi removido.
            </p>
            <Link to="/" className="btn-primary inline-flex">
              Voltar ao início
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            Todos os projetos
          </Link>

          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-8">
              <span className="eyebrow">Case · em produção</span>
              <h1 className="display text-5xl md:text-7xl mt-6 mb-6 text-balance">
                {project.title}<span className="text-primary">.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-8">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="mono text-[10px] tracking-wider uppercase text-muted-foreground border border-border rounded-sm px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 flex md:flex-col md:items-end gap-3 md:justify-end">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={16} />
                Abrir site
              </a>
            </div>
          </div>

          <div className="frame overflow-hidden">
            <iframe
              src={project.detailPath ?? project.localPath}
              title={project.title}
              className="w-full h-[70vh] bg-background"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
