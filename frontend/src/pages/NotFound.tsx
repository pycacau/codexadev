import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center grain relative overflow-hidden">
      <div className="max-w-xl mx-auto text-center px-6">
        <span className="eyebrow justify-center">Erro 404</span>
        <h1
          className="display text-foreground mt-8 mb-8"
          style={{ fontSize: "clamp(6rem, 18vw, 14rem)", lineHeight: 0.9 }}
        >
          4<span className="text-primary">0</span>4
        </h1>
        <p className="text-muted-foreground text-lg mb-10">
          A página que você procura não existe ou foi movida.
        </p>
        <Link to="/" className="btn-primary inline-flex">
          Voltar ao início
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
