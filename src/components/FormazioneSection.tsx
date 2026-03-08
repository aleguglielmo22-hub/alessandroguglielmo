// Formazione section with institution logos
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  { year: "In corso", title: "Laurea Triennale in Scienze Motorie nel Calcio", place: "Università San Raffaele", desc: "Percorso focalizzato sull'analisi tattica, la preparazione atletica e la data analysis applicata al calcio.", logo: "/universita-san-raffaele.svg" },
  { year: "2025", title: "Fundamentals on Data Analytics", place: "Boolean", desc: "Fondamenti di analisi dati applicati al contesto sportivo.", logo: "/boolean.png" },
  { year: "2024", title: "Talent Identification in Football", place: "The Football Association", desc: "Corso della federazione inglese sull'identificazione e valutazione dei talenti calcistici.", logo: "/the-fa.png" },
  { year: "2024", title: "Match Analyst Live Tag Pro", place: "Match Analysis Academy", desc: "Formazione sull'utilizzo del software LiveTag Pro per il tagging e l'analisi video in tempo reale.", logo: "/match-analysis-academy.jpeg" },
  { year: "2022", title: "Tactical Master", place: "Panini Digital Sport Platform", desc: "Approfondimento avanzato sulla tattica calcistica e l'analisi dei sistemi di gioco.", logo: "/panini-dsp.jpeg" },
  { year: "2021", title: "Professional Match Analyst", place: "LF Scouting", desc: "Corso professionale sulle metodologie di match analysis e scouting.", logo: "/lf-scouting.webp" },
  { year: "2021", title: "Match Analyst PRO", place: "Emiscouting", desc: "Formazione professionale sull'analisi tattica e l'utilizzo di software di video analysis.", logo: "/emiscouting.png" },
];

const software = [
  "Premiere Pro", "After Effects", "DaVinci Resolve", "LiveTagPro", "Metrica Sports", "NacSport", "Klipdraw",
  "Once Sport", "FotMob", "SofaScore", "Wyscout", "Tableau", "Excel", "Google Sheets",
];

const FormazioneSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="formazione" className="py-24 md:py-32" style={{ '--background': '36 33% 97%', '--background-alt': '0 0% 100%', '--foreground': '0 0% 8%', '--muted-foreground': '0 0% 48%', '--border': '0 0% 85%', '--card': '0 0% 100%', '--muted': '36 10% 90%', backgroundColor: 'hsl(36 33% 97%)' } as React.CSSProperties}>
      <div className="container mx-auto">
        <div ref={ref} className={`scroll-reveal ${revealed ? "revealed" : ""}`}>
          <div className="section-label">Formazione</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-[#141414]">Percorso di Studi</h2>

          {/* Timeline */}
          <div className="relative pl-8 md:pl-12 space-y-10">
            {/* Vertical line */}
            <div className="absolute left-3 md:left-5 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-[#d4d4d4]" />

            {timeline.map((item, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div className="absolute -left-[22px] md:-left-[30px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-[#f9f7f4]" />
                <div className="space-y-1">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-display font-bold text-foreground">{item.title}</h3>
                  <div className="flex items-center gap-2">
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt={item.place}
                        className="w-6 h-6 rounded object-cover"
                      />
                    )}
                    <p className="text-sm font-medium text-muted-foreground">{item.place}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Software */}
          <div className="mt-16 pt-10 border-t border-border">
            <h3 className="text-xl font-display font-bold mb-2">Software &amp; Strumenti</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Gli applicativi con cui lavoro quotidianamente per analisi, montaggio e dati.
            </p>
            <div className="flex flex-wrap gap-3">
              {software.map((s) => (
                <span key={s} className="chip-hover">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormazioneSection;
