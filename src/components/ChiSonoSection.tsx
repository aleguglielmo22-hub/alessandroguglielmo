import { useScrollReveal } from "@/hooks/useScrollReveal";

const ChiSonoSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="chi-sono" className="py-24 md:py-32 bg-background-alt">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-start scroll-reveal ${revealed ? "revealed" : ""}`}
        >
          {/* Image */}
          <div className="hidden lg:block">
            <img
              src="/foto-profilo.jpeg"
              alt="Alessandro Guglielmo"
              className="w-full aspect-[4/5] object-cover rounded-2xl"
            />
          </div>

          {/* Text */}
          <div>
            <div className="section-label">Chi Sono</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Il calcio visto con altri <span className="text-primary">occhi</span>
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                Non mi è mai bastato guardare una partita: ho sempre avuto bisogno di capire il perché di ogni scelta, il meccanismo dietro ogni movimento, il momento esatto in cui una giocata cambia tutto.
              </p>
              <p>
                Questo approccio mi ha portato all'<span className="text-foreground font-semibold text-primary">analisi tattica e allo scouting</span>, dove combino osservazione sul campo, analisi video e dati per offrire una lettura del gioco completa e funzionale.
              </p>
              <p>
                Ho lavorato con staff tecnici in Serie C, scritto per testate specializzate e analizzato talenti in contesti internazionali. Mi distinguono la <span className="text-foreground font-semibold text-primary">versatilità, l'attenzione al dettaglio</span> e la capacità di adattare il mio lavoro alle esigenze specifiche di ogni progetto — che si tratti di preparare una partita, valutare un calciatore o raccontare il gioco attraverso i contenuti.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
              {[
                { value: "100+", label: "Analisi fatte" },
                { value: "10+", label: "Collaborazioni" },
                { value: "50+", label: "Articoli scritti" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-display font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSonoSection;
