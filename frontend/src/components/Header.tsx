import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "#servicos", label: "Serviços", index: "01" },
  { href: "#projetos", label: "Projetos", index: "02" },
  { href: "#processo", label: "Processo", index: "03" },
  { href: "#orcamento", label: "Orçamento", index: "04" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group" data-testid="header-logo">
            <img src="/logo.png" alt="Codexa" className="w-8 h-8 rounded-sm" />
            <span className="font-heading font-semibold text-[17px] tracking-tight text-foreground">
              Codexa
              <span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`nav-${link.label.toLowerCase()}`}
              >
                <span className="mono text-[10px] text-primary/70">{link.index}</span>
                <span className="u-link">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/558597555271"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary"
            data-testid="header-whatsapp-btn"
          >
            Iniciar projeto
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-background border-t border-border"
          data-testid="mobile-menu"
        >
          <nav className="px-6 py-4 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-4 border-b border-border text-foreground"
              >
                <span className="flex items-center gap-3">
                  <span className="mono text-[10px] text-primary/70">{link.index}</span>
                  {link.label}
                </span>
                <ArrowUpRight size={16} className="text-muted-foreground" />
              </a>
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
