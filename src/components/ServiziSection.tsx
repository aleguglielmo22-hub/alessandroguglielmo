import { useScrollReveal } from "@/hooks/useScrollReveal";

const servizi = [
  {
    num: "01",
    titolo: "Match Analysis",
    desc: "Studio completo dei prossimi avversari attraverso la visione di 3-6 partite. Report testuale e/o video con focus su fase offensiva, difensiva, transizioni e palle inattive. Pensato per staff tecnici che vogliono preparare le partite con un vantaggio informativo.",
  },
  {
    num: "02",
    titolo: "Player Report",
    desc: "Analisi approfondita di singoli calciatori per supportare decisioni di mercato o preparazione tattica. Report che evidenzia caratteristiche fisiche, tecniche e tattiche con eventuale appendice statistica.",
  },
  {
    num: "03",
    titolo: "Video Analysis",
    desc: "Montaggi tattici professionali con clip tagliate, annotazioni e grafica. Dall'analisi di un singolo sistema di gioco alla creazione di video report completi con software professionali.",
  },
  {
    num: "04",
    titolo: "Articoli Tattici su Commissione",
    desc: "Contenuti scritti di approfondimento tattico per testate giornalistiche, blog sportivi o comunicazione interna di club. Approccio professionale e dati a supporto.",
  },
];

const ServiziSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="servizi" className="py-24 md:py-32 bg-background-alt">
      <div className="container mx-auto">
        <div ref={ref} className={`scroll-reveal ${revealed ? "revealed" : ""}`}>
          <div className="section-label">Servizi</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Cosa Posso Fare per Te</h2>
          <p className="text-muted-foreground mb-12">
            Servizi professionali per club, staff tecnici, direttori sportivi e testate giornalistiche.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {servizi.map((s) => (
              <div key={s.num} className="bg-background rounded-xl p-8 service-card card-hover border border-border">
                <span className="text-5xl font-display font-extrabold text-primary/15 leading-none">{s.num}</span>
                <h3 className="font-display font-bold text-xl mt-3 mb-3">{s.titolo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/#contatti"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-primary-hover transition-colors"
            >
              Contattami per un preventivo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiziSection;
