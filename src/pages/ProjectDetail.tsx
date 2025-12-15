import { useParams, Link } from "react-router-dom";
import { findProject } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? findProject(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-24">
          <h2 className="text-2xl font-semibold">Projeto não encontrado</h2>
          <p className="mt-4">Verifique a lista de projetos.</p>
          <Link to="/" className="btn btn-primary mt-6">Voltar</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-heading font-bold mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-6">{project.description}</p>
          <div className="mb-6">
            {project.tags.map((t) => (
              <span key={t} className="px-3 py-1 mr-2 rounded-full bg-muted text-muted-foreground text-sm">{t}</span>
            ))}
          </div>

          <div className="mb-8">
            <iframe src={project.localPath} title={project.title} className="w-full h-[600px] rounded-2xl border" />
          </div>

          <div className="flex gap-4">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visitar Site</a>
            <Link to="/" className="btn btn-secondary">Voltar</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
