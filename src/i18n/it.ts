/**
 * Dizionario ITALIANO — testi dell'interfaccia.
 * I contenuti (formazione, esperienze, servizi, lavori) stanno in `src/data/`.
 */
export const it = {
  meta: {
    title: 'AG — Football Analyst',
    description:
      'Alessandro Guglielmo — Football Analyst. Analisi tattica, match analysis e scouting per club, staff tecnici e testate giornalistiche.',
  },

  nav: {
    about: 'Chi Sono',
    education: 'Formazione',
    experience: 'Esperienze',
    analysis: 'Analisi',
    services: 'Servizi',
    contact: 'Contatti',
    cv: 'Scarica CV',
    menu: 'Apri menu',
    close: 'Chiudi menu',
    langLabel: 'Cambia lingua',
  },

  hero: {
    eyebrow: 'Benvenuto nel mio portfolio',
    firstName: 'Alessandro',
    lastName: 'Guglielmo',
    role: 'Football Analyst',
    ctaWorks: 'Scopri i miei lavori',
    ctaCv: 'Scarica CV',
    photoAlt: 'Alessandro Guglielmo',
  },

  about: {
    label: 'Chi Sono',
    titleBefore: 'Il calcio visto con altri ',
    titleAccent: 'occhi',
    bio: [
      "Non mi è mai bastato guardare una partita: ho sempre avuto bisogno di capire il perché di ogni scelta, il meccanismo dietro ogni movimento, il momento esatto in cui una giocata cambia tutto. Questo approccio mi ha portato all'analisi tattica e allo scouting, dove combino osservazione sul campo, analisi video e dati per offrire una lettura del gioco completa e funzionale.",
      "Ho lavorato con staff tecnici in Serie C, scritto per testate specializzate e analizzato talenti in contesti internazionali. Mi distinguono la versatilità, l'attenzione al dettaglio e la capacità di adattare il mio lavoro alle esigenze specifiche di ogni progetto — che si tratti di preparare una partita, valutare un calciatore o raccontare il gioco attraverso i contenuti.",
    ],
    // Frammenti evidenziati in arancione bold dentro la bio (match esatto sul testo sopra).
    highlights: ["analisi tattica e allo scouting", "versatilità, l'attenzione al dettaglio"],
    stats: [
      { value: '100+', label: 'Analisi fatte' },
      { value: '10+', label: 'Collaborazioni' },
      { value: '50+', label: 'Articoli scritti' },
    ],
  },

  education: {
    label: 'Formazione',
    title: 'Percorso Formativo',
    ongoing: 'In corso',
    toolsTitle: 'Software & Strumenti',
    toolsSubtitle:
      'Gli strumenti che uso quotidianamente per taggare, analizzare, montare e visualizzare.',
  },

  experience: {
    label: 'Esperienze',
    title: 'Dove Ho Lavorato',
    ongoing: 'In corso',
  },

  works: {
    label: 'Portfolio',
    title: 'I Miei Lavori',
    seeAll: 'Vedi archivio completo',
    pageTitle: 'Analisi',
    pageSubtitle:
      'Tutti i miei lavori: analisi tattiche, studi sugli avversari, player report e articoli di approfondimento.',
    back: 'Torna alla Home',
    all: 'Tutti',
    empty: 'Nessun lavoro in questa categoria, per ora.',
    open: 'Apri',
  },

  services: {
    label: 'Servizi',
    title: 'Cosa Posso Fare per Te',
    subtitle:
      'Servizi professionali per club, staff tecnici, direttori sportivi e testate giornalistiche.',
    cta: 'Contattami per info',
  },

  contact: {
    label: 'Contatti',
    title: 'Parliamone.',
    subtitle:
      'Hai un progetto in mente, una collaborazione da proporre o semplicemente vuoi saperne di più? Scrivimi — rispondo sempre.',
  },

  footer: {
    rights: '© 2026 Alessandro Guglielmo — Tutti i diritti riservati',
    top: 'Torna su',
  },
}

export type Dictionary = typeof it
