import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Download } from "lucide-react";

const navLinks = [
  { label: "Chi Sono", href: "/#chi-sono" },
  { label: "Formazione", href: "/#formazione" },
  { label: "Esperienze", href: "/#esperienze" },
  { label: "Servizi", href: "/#servizi" },
  { label: "Contatti", href: "/#contatti" },
];

const analisiDropdown = [
  { label: "Match Studio", hash: "#match-studio" },
  { label: "Team Studio", hash: "#team-studio" },
  { label: "Player Report", hash: "#player-report" },
  { label: "Articoli Generali", hash: "#articoli" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-0 text-2xl font-black select-none" style={{ fontFamily: "'Playfair Display', serif" }}>
          <span className="text-primary">A</span>
          <span className="text-[#141414]">G</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 3).map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(l.href);
                if (location.pathname !== "/") window.location.href = l.href;
              }}
              className="text-sm font-medium text-[#141414]/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* Analisi dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-sm font-medium text-[#141414]/80 hover:text-primary transition-colors flex items-center gap-1">
              Analisi <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-card rounded-lg shadow-lg border border-border p-2 min-w-[200px] animate-fade-up">
                  {analisiDropdown.map((item) => (
                    <Link
                      key={item.hash}
                      to={`/analisi${item.hash}`}
                      className="block px-4 py-2.5 text-sm rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(3).map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(l.href);
                if (location.pathname !== "/") window.location.href = l.href;
              }}
              className="text-sm font-medium text-[#141414]/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a
            href="/Alessandro_Guglielmo_CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-hover transition-colors"
          >
            <Download size={16} /> Scarica CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-[#141414]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#141414] border-t border-white/10">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.slice(0, 3).map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(l.href);
                  if (location.pathname !== "/") window.location.href = l.href;
                }}
                className="text-base font-medium py-2 text-white/90 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="border-t border-white/20 pt-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">— Analisi —</span>
              {analisiDropdown.map((item) => (
                <Link
                  key={item.hash}
                  to={`/analisi${item.hash}`}
                  className="block pl-4 py-2 text-base text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {navLinks.slice(3).map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(l.href);
                  if (location.pathname !== "/") window.location.href = l.href;
                }}
                className="text-base font-medium py-2 text-white/90 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Alessandro_Guglielmo_CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-5 py-3 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors mt-2"
            >
              <Download size={16} /> Scarica CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
