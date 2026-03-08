import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const lavori = [
  {
    badge: "Match Studio",
    titolo: "Analisi post-partita",
    desc: "Studio della prestazione della propria squadra: cosa ha funzionato e cosa migliorare.",
    data: "GG/MM/AAAA",
  },
  {
    badge: "Player Report",
    titolo: "Report individuale calciatore",
    desc: "Profilo tecnico, tattico e fisico completo con appendice statistica.",
    data: "GG/MM/AAAA",
  },
  {
    badge: "Team Studio",
    titolo: "Studio avversario",
    desc: "Analisi di 3-6 partite per preparare il prossimo avversario. Report per lo staff tecnico.",
    data: "GG/MM/AAAA",
  },
  {
    badge: "Articolo",
    titolo: "Approfondimento tattico",
    desc: "Analisi scritta su un tema tattico, un sistema di gioco o un trend del calcio moderno.",
    data: "GG/MM/AAAA",
  },
];

const LavoriSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto">
        <div ref={ref} className={`scroll-reveal ${revealed ? "revealed" : ""}`}>
          <div className="section-label">Portfolio</div>
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">I Miei Lavori</h2>
            <Link
              to="/analisi"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Vedi archivio completo <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {lavori.map((l, i) => (
              <div key={i} className="bg-background-alt rounded-xl overflow-hidden border border-border card-hover">
                <div className="aspect-[16/10] bg-muted relative">
                  <span className="absolute top-3 left-3 text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    {l.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg mb-2">{l.titolo}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{l.desc}</p>
                  <div className="border-t border-border pt-3">
                    <span className="text-xs text-muted-foreground">{l.data}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/analisi"
            className="md:hidden flex items-center justify-center gap-2 text-sm font-semibold text-primary mt-8"
          >
            Vedi archivio completo <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LavoriSection;
