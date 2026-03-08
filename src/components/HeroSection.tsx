import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const { ref, revealed } = useScrollReveal(0.1);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center scroll-reveal ${revealed ? "revealed" : ""}`}
        >
          {/* Text */}
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Benvenuto nel mio portfolio
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05]">
              Alessandro<br />
              <span className="text-primary">Guglielmo</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium">Football Analyst</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/analisi"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-primary-hover transition-colors"
              >
                Scopri i miei lavori
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-2 border-foreground/20 text-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                <Download size={16} /> Scarica CV
              </a>
            </div>
          </div>

          {/* Photo placeholder — hidden on mobile */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-[20px]" />
              <div className="relative w-[380px] h-[460px] bg-muted rounded-[20px] flex items-center justify-center text-muted-foreground text-sm">
                Foto profilo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
