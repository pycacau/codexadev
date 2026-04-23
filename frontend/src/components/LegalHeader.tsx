import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/termos-de-uso", label: "Termos" },
  { href: "/politica-de-privacidade", label: "Privacidade" },
];

export const LegalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => navigate("/")} className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Codexa" className="w-8 h-8 rounded-sm" />
            <span className="font-heading font-semibold text-[17px] tracking-tight text-foreground">
              Codexa<span className="text-primary">.</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => navigate(l.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors u-link"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <a
            href="https://wa.me/558597555271"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary"
          >
            Iniciar projeto
            <ArrowUpRight size={16} />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="px-6 py-4 flex flex-col">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => {
                  navigate(l.href);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-between py-4 border-b border-border text-foreground text-left"
              >
                {l.label}
                <ArrowUpRight size={16} className="text-muted-foreground" />
              </button>
            ))}
            <a
              href="https://wa.me/558597555271"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5"
            >
              Iniciar projeto
              <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
