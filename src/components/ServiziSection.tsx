import { useScrollReveal } from "@/hooks/useScrollReveal";

const servizi = [
  {
    num: "01",
    titolo: "Team Studio",
    desc: "Studio completo dei prossimi avversari attraverso la visione di 3-6 partite. Report testuale e/o video con focus su fase offensiva, difensiva, transizioni e palle inattive. Pensato per staff tecnici che vogliono preparare le partite con un vantaggio informativo.",
  },
  {
    num: "02",
    titolo: "Player Analysis",
    desc: "Analisi approfondita di singoli calciatori con report che evidenzia caratteristiche fisiche, tecniche e tattiche, punti di forza e aree di miglioramento. Il servizio è disponibile sia per club, società e agenzie — a supporto di decisioni di mercato e preparazione tattica — sia direttamente con il calciatore, attraverso consulenze one-to-one mirate a lavorare sugli aspetti specifici del suo gioco.",
  },
  {
    num: "03",
    titolo: "Match Studio",
    desc: "Analisi video e scritte di singole partite o situazioni di gioco specifiche. Dallo studio della prestazione della propria squadra all'analisi di fasi di gioco particolari, con report dettagliati e montaggi video con clip tagliate, annotazioni e grafica. Uno strumento concreto per lo staff tecnico per valutare ciò che ha funzionato e ciò che va migliorato.",
  },
  {
    num: "04",
    titolo: "Football Writing",
    desc: "Contenuti scritti di approfondimento tattico per testate giornalistiche, blog sportivi o comunicazione interna di club. Approccio professionale e dati a supporto.",
  },
  {
    num: "05",
    titolo: "Scouting & Set Pieces DB",
    desc: "Consulenze personalizzate per l'individuazione di profili di calciatori in linea con le esigenze del club e proposte mirate per il mercato. Database di soluzioni su calci piazzati — corner, punizioni e rimesse laterali — da studiare, adattare e implementare nel proprio sistema di gioco.",
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
              Contattami per info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiziSection;
