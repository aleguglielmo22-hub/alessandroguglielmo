import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Category = "tutti" | "match-studio" | "team-studio" | "player-report" | "articoli";

interface AnalisiCard {
  id: number;
  categoria: Category;
  tipo: string;
  titolo: string;
  desc: string;
  data: string;
}

const cards: AnalisiCard[] = [
  { id: 1, categoria: "match-studio", tipo: "Video", titolo: "Post-partita: analisi prestazione collettiva", desc: "Studio della fase offensiva e difensiva della propria squadra nell'ultimo match di campionato.", data: "GG/MM/AAAA" },
  { id: 2, categoria: "match-studio", tipo: "PDF", titolo: "Report post-partita con dati e clip", desc: "Analisi integrata con statistiche e sequenze video a supporto delle osservazioni tattiche.", data: "GG/MM/AAAA" },
  { id: 3, categoria: "team-studio", tipo: "Report", titolo: "Studio avversario: sistema di gioco e transizioni", desc: "Analisi del prossimo avversario basata sulla visione di 4 partite recenti.", data: "GG/MM/AAAA" },
  { id: 4, categoria: "team-studio", tipo: "Slides", titolo: "Presentazione pre-partita per lo staff", desc: "Slide sintetiche con punti di forza e debolezza dell'avversario per il briefing tecnico.", data: "GG/MM/AAAA" },
  { id: 5, categoria: "player-report", tipo: "Report", titolo: "Profilo completo: centrocampista Under 21", desc: "Valutazione tecnica, tattica e fisica con appendice statistica e clip di riferimento.", data: "GG/MM/AAAA" },
  { id: 6, categoria: "player-report", tipo: "PDF", titolo: "Scouting report: esterno offensivo", desc: "Analisi individuale di un talento emergente osservato in contesto internazionale.", data: "GG/MM/AAAA" },
  { id: 7, categoria: "articoli", tipo: "Articolo", titolo: "Il pressing alto nel calcio moderno", desc: "Approfondimento tattico sull'evoluzione del pressing alto e i modelli di riferimento.", data: "GG/MM/AAAA" },
  { id: 8, categoria: "articoli", tipo: "Articolo", titolo: "Analisi del sistema di gioco 3-4-2-1", desc: "Studio dettagliato del modulo con esempi pratici tratti dalle principali leghe europee.", data: "GG/MM/AAAA" },
];

const tabs: { key: Category; label: string }[] = [
  { key: "tutti", label: "Tutti" },
  { key: "match-studio", label: "Match Studio" },
  { key: "team-studio", label: "Team Studio" },
  { key: "player-report", label: "Player Report" },
  { key: "articoli", label: "Articoli" },
];

const catLabels: Record<string, string> = {
  "match-studio": "Match Studio",
  "team-studio": "Team Studio",
  "player-report": "Player Report",
  "articoli": "Articoli",
};

const Analisi = () => {
  const location = useLocation();
  const [active, setActive] = useState<Category>("tutti");

  useEffect(() => {
    const hash = location.hash.replace("#", "") as Category;
    if (tabs.some((t) => t.key === hash)) {
      setActive(hash);
    }
  }, [location.hash]);

  const filtered = active === "tutti" ? cards : cards.filter((c) => c.categoria === active);

  const getCount = (key: Category) =>
    key === "tutti" ? cards.length : cards.filter((c) => c.categoria === key).length;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen bg-background relative">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Torna alla Home
          </Link>

          <div className="section-label">Archivio</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">Analisi</h1>
          <p className="text-muted-foreground max-w-2xl mb-10">
            Tutti i miei lavori: analisi tattiche, studi sugli avversari, player report e articoli di approfondimento.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`relative px-4 py-3 text-sm font-medium transition-colors ${
                  active === tab.key ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                <span
                  className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                    active === tab.key
                      ? "bg-primary/15 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {getCount(tab.key)}
                </span>
                {active === tab.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((card) => (
              <div
                key={card.id}
                className="bg-background-alt rounded-xl overflow-hidden border border-border card-hover"
              >
                <div className="aspect-[16/10] bg-muted relative">
                  <span className="absolute top-3 left-3 text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    {card.tipo}
                  </span>
                  <span className="absolute top-3 right-3 text-xs font-semibold bg-foreground/80 text-background px-3 py-1 rounded-full">
                    {catLabels[card.categoria]}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-base mb-2">{card.titolo}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
                  <div className="border-t border-border pt-3">
                    <span className="text-xs text-muted-foreground">{card.data}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Analisi;
