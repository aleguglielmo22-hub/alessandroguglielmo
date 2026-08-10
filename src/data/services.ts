import type { L10n } from '../i18n'

export type Service = {
  id: string
  /** Numero grande mostrato nella card */
  number: string
  title: L10n
  description: L10n
  /**
   * PREZZO — oggi `null` per tutti: la card non mostra nulla.
   * Per attivare la vendita basta valorizzarlo, es. `price: { it: 'da 250 €', en: 'from €250' }`.
   * Nessuna modifica al JSX è necessaria.
   */
  price: L10n | null
  /** CTA specifica della card, mostrata solo se presente (es. { it: 'Richiedi', en: 'Request' }) */
  cta: L10n | null
}

export const services: Service[] = [
  {
    id: 'team-studio',
    number: '01',
    title: { it: 'Team Studio', en: 'Team Studio' },
    description: {
      it: 'Studio completo dei prossimi avversari attraverso la visione di 3-6 partite. Report testuale e/o video con focus su fase offensiva, difensiva, transizioni e palle inattive. Pensato per staff tecnici che vogliono preparare le partite con un vantaggio informativo.',
      en: 'A complete study of upcoming opponents based on 3-6 matches. Written and/or video report focused on the attacking phase, defensive phase, transitions and set pieces. Built for coaching staff who want to prepare matches with an informational edge.',
    },
    price: null,
    cta: null,
  },
  {
    id: 'player-analysis',
    number: '02',
    title: { it: 'Player Analysis', en: 'Player Analysis' },
    description: {
      it: 'Analisi approfondita di singoli calciatori con report che evidenzia caratteristiche fisiche, tecniche e tattiche, punti di forza e aree di miglioramento. Il servizio è disponibile sia per club, società e agenzie — a supporto di decisioni di mercato e preparazione tattica — sia direttamente con il calciatore, attraverso consulenze one-to-one mirate a lavorare sugli aspetti specifici del suo gioco.',
      en: "An in-depth analysis of individual players, with a report covering physical, technical and tactical attributes, strengths and areas to improve. Available both to clubs and agencies — supporting recruitment decisions and tactical preparation — and directly to players, through one-to-one consultancy targeting specific aspects of their game.",
    },
    price: null,
    cta: null,
  },
  {
    id: 'match-studio',
    number: '03',
    title: { it: 'Match Studio', en: 'Match Studio' },
    description: {
      it: 'Analisi video e scritte di singole partite o situazioni di gioco specifiche. Dallo studio della prestazione della propria squadra all\'analisi di fasi di gioco particolari, con report dettagliati e montaggi video con clip tagliate, annotazioni e grafica. Uno strumento concreto per lo staff tecnico per valutare ciò che ha funzionato e ciò che va migliorato.',
      en: 'Video and written analysis of individual matches or specific game situations. From studying your own team\'s performance to breaking down particular phases of play, with detailed reports and video edits featuring cut clips, annotations and graphics. A practical tool for coaching staff to assess what worked and what needs improving.',
    },
    price: null,
    cta: null,
  },
  {
    id: 'football-writing',
    number: '04',
    title: { it: 'Football Writing', en: 'Football Writing' },
    description: {
      it: 'Contenuti scritti di approfondimento tattico per testate giornalistiche, blog sportivi o comunicazione interna di club. Approccio professionale e dati a supporto.',
      en: 'In-depth written tactical content for media outlets, sports blogs or a club\'s internal communications. A professional approach, backed by data.',
    },
    price: null,
    cta: null,
  },
  {
    id: 'scouting-set-pieces',
    number: '05',
    title: { it: 'Scouting & Set Pieces DB', en: 'Scouting & Set Pieces DB' },
    description: {
      it: 'Consulenze personalizzate per l\'individuazione di profili di calciatori in linea con le esigenze del club e proposte mirate per il mercato. Database di soluzioni su calci piazzati — corner, punizioni e rimesse laterali — da studiare, adattare e implementare nel proprio sistema di gioco.',
      en: 'Tailored consultancy to identify player profiles that match the club\'s needs, with targeted recruitment proposals. Plus a database of set-piece solutions — corners, free kicks and throw-ins — ready to be studied, adapted and implemented within your own system of play.',
    },
    price: null,
    cta: null,
  },
]
