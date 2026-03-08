import { useScrollReveal } from "@/hooks/useScrollReveal";

const esperienze = [
  {
    club: "Guidonia Montecelio 1937",
    logo: "/guidonia-montecelio.png",
    ruolo: "Match Analyst U17 & U15",
    periodo: "2025",
    desc: "Analisi video e report tattici per lo staff tecnico del settore giovanile: studio post-partita delle squadre U17 e U15 e analisi pre-partita degli avversari.",
  },
  {
    club: "FC Trapani 1905",
    logo: "/fc-trapani-1905.png",
    ruolo: "First Team Analyst & Scout",
    periodo: "2024",
    desc: "Analisi video e report tattici per lo staff tecnico della prima squadra in Serie C: studio post-partita della propria squadra e analisi pre-partita degli avversari.",
  },
  {
    club: "Scout Underrated",
    logo: "/scout-underrated.jpeg",
    ruolo: "Match Analyst & Scout",
    periodo: "2024 – In corso",
    desc: "Analisi individuali di calciatori attraverso video report e report scritti. Attività di scouting e ricerca di talenti emergenti.",
  },
  {
    club: "NapoliNetwork.com",
    logo: "/napolinetwork.jpeg",
    ruolo: "Tactical Analysis Journalist",
    periodo: "2022 – 2025",
    desc: "Redazione di articoli di approfondimento tattico: analisi di partite, sistemi di gioco, profili di calciatori e tematiche tattiche di carattere generale.",
  },
  {
    club: "SpaceViola.com",
    logo: "/spaceviola.jpeg",
    ruolo: "Tactical Analysis Journalist",
    periodo: "2021 – 2024",
    desc: "Produzione di contenuti tattici scritti per la testata: analisi di partite e squadre, approfondimenti su singoli calciatori e articoli di analisi tattica generale.",
  },
  {
    club: "Rever Roma",
    logo: "/rever-roma.jpeg",
    ruolo: "Match Analyst",
    periodo: "2021 – 2022",
    desc: "Analisi video e report scritti sulle prestazioni della propria squadra e studio tattico delle squadre avversarie a supporto dello staff tecnico.",
  },
];

const EsperienzeSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="esperienze" className="py-24 md:py-32 bg-dark-bg">
      <div className="container mx-auto">
        <div ref={ref} className={`scroll-reveal ${revealed ? "revealed" : ""}`}>
          <div className="section-label">Esperienze</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-text mb-3">
            Dove Ho Lavorato
          </h2>
          <p className="text-dark-text-muted mb-12">
            Le esperienze nel mondo del calcio che mi hanno formato sul campo.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {esperienze.map((exp, i) => (
              <div
                key={i}
                className="bg-dark-card rounded-xl p-6 border border-dark-card hover:border-primary/30 card-hover"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={exp.logo}
                    alt={exp.club}
                    className="w-12 h-12 rounded-xl object-cover bg-dark-bg shrink-0"
                  />
                  <div className="space-y-1 flex-1">
                    <h3 className="font-display font-bold text-dark-text">{exp.club}</h3>
                    <p className="text-sm font-medium text-primary">{exp.ruolo}</p>
                    <p className="text-xs text-dark-text-muted">{exp.periodo}</p>
                  </div>
                </div>
                <p className="text-sm text-dark-text-muted mt-4 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EsperienzeSection;
