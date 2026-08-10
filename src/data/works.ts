import type { L10n } from '../i18n'

export type WorkCategory = 'match-studio' | 'team-studio' | 'player-report' | 'articoli'
export type WorkType = 'Video' | 'PDF' | 'Report' | 'Slides' | 'Articolo'

export type Work = {
  id: string
  title: L10n
  description: L10n
  category: WorkCategory
  type: WorkType
  /** Formato GG/MM/AAAA */
  date: string
  /** ⚠️ PERSONALIZZARE: nome file in `public/images/` (es. 'lavori/trapani-crotone.jpg'), null = placeholder grigio */
  thumbnail: string | null
  /** ⚠️ PERSONALIZZARE: link a YouTube / Drive / PDF / articolo. Se null la card non è cliccabile. */
  link: string | null
}

/** Ordine delle tab filtro in /analisi. */
export const categories: { id: WorkCategory; label: L10n }[] = [
  { id: 'match-studio', label: { it: 'Match Studio', en: 'Match Studio' } },
  { id: 'team-studio', label: { it: 'Team Studio', en: 'Team Studio' } },
  { id: 'player-report', label: { it: 'Player Report', en: 'Player Report' } },
  { id: 'articoli', label: { it: 'Articoli', en: 'Articles' } },
]

/** Etichetta del badge tipo, tradotta. */
export const typeLabels: Record<WorkType, L10n> = {
  Video: { it: 'Video', en: 'Video' },
  PDF: { it: 'PDF', en: 'PDF' },
  Report: { it: 'Report', en: 'Report' },
  Slides: { it: 'Slides', en: 'Slides' },
  Articolo: { it: 'Articolo', en: 'Article' },
}

/**
 * ────────────────────────────────────────────────────────────────
 * I LAVORI. Per aggiungerne uno: copia un oggetto, cambia i campi.
 * Comparirà automaticamente in /analisi e — se tra i 4 più recenti —
 * nell'anteprima in homepage. Non serve toccare altro.
 * I dati qui sotto sono SEGNAPOSTO da sostituire con i lavori reali.
 * ────────────────────────────────────────────────────────────────
 */
export const works: Work[] = [
  {
    id: 'match-studio-1',
    title: {
      it: 'Analisi prestazione — Trapani vs Crotone',
      en: 'Performance analysis — Trapani vs Crotone',
    },
    description: {
      it: 'Studio post-partita della prestazione offensiva: costruzione dal basso, ampiezza e occupazione degli half-space.',
      en: 'Post-match study of the attacking performance: build-up from the back, width and half-space occupation.',
    },
    category: 'match-studio',
    type: 'Video',
    date: '18/04/2025',
    thumbnail: null,
    link: null,
  },
  {
    id: 'match-studio-2',
    title: {
      it: 'Le transizioni difensive in un 4-3-3',
      en: 'Defensive transitions in a 4-3-3',
    },
    description: {
      it: 'Analisi di una singola fase di gioco su tre partite consecutive, con clip tagliate e annotazioni grafiche.',
      en: 'Analysis of one phase of play across three consecutive matches, with cut clips and on-screen annotations.',
    },
    category: 'match-studio',
    type: 'Slides',
    date: '02/03/2025',
    thumbnail: null,
    link: null,
  },
  {
    id: 'team-studio-1',
    title: {
      it: 'Opposition report — Avellino',
      en: 'Opposition report — Avellino',
    },
    description: {
      it: 'Studio dei prossimi avversari su 5 partite: struttura offensiva, blocco difensivo, transizioni e palle inattive.',
      en: 'Opponent study across 5 matches: attacking structure, defensive block, transitions and set pieces.',
    },
    category: 'team-studio',
    type: 'PDF',
    date: '11/02/2025',
    thumbnail: null,
    link: null,
  },
  {
    id: 'team-studio-2',
    title: {
      it: 'Il pressing a uomo del Benevento',
      en: "Benevento's man-oriented press",
    },
    description: {
      it: 'Report tattico sui meccanismi di pressione alta e sui trigger di attivazione della squadra avversaria.',
      en: 'Tactical report on high-pressing mechanisms and the opposition’s pressing triggers.',
    },
    category: 'team-studio',
    type: 'Report',
    date: '20/01/2025',
    thumbnail: null,
    link: null,
  },
  {
    id: 'player-report-1',
    title: {
      it: 'Player report — Esterno offensivo, classe 2005',
      en: 'Player report — Winger, born 2005',
    },
    description: {
      it: 'Valutazione completa: caratteristiche fisiche, tecniche e tattiche, punti di forza e aree di miglioramento.',
      en: 'Full assessment: physical, technical and tactical attributes, strengths and areas to improve.',
    },
    category: 'player-report',
    type: 'PDF',
    date: '09/12/2024',
    thumbnail: null,
    link: null,
  },
  {
    id: 'player-report-2',
    title: {
      it: 'Video report — Mediano di rottura',
      en: 'Video report — Ball-winning midfielder',
    },
    description: {
      it: 'Montaggio video commentato sui duelli difensivi, la copertura degli spazi e la prima costruzione.',
      en: 'Annotated video edit on defensive duels, space coverage and first-phase build-up.',
    },
    category: 'player-report',
    type: 'Video',
    date: '15/11/2024',
    thumbnail: null,
    link: null,
  },
  {
    id: 'articoli-1',
    title: {
      it: 'Perché il terzo uomo decide le partite',
      en: 'Why the third man decides matches',
    },
    description: {
      it: 'Approfondimento tattico sul principio del terzo uomo e sul suo impatto nella rottura delle linee di pressione.',
      en: 'A tactical deep dive into the third-man principle and its impact on breaking pressing lines.',
    },
    category: 'articoli',
    type: 'Articolo',
    date: '28/10/2024',
    thumbnail: null,
    link: null,
  },
  {
    id: 'articoli-2',
    title: {
      it: 'Il ritorno del difensore che porta palla',
      en: 'The return of the ball-carrying defender',
    },
    description: {
      it: 'Analisi di come la conduzione dal basso stia ridefinendo il profilo del centrale moderno.',
      en: 'How carrying the ball out from the back is redefining the profile of the modern centre-back.',
    },
    category: 'articoli',
    type: 'Articolo',
    date: '05/09/2024',
    thumbnail: null,
    link: null,
  },
]

/** GG/MM/AAAA → timestamp, per ordinare i lavori dal più recente. */
export function parseDate(date: string): number {
  const [d, m, y] = date.split('/').map(Number)
  return new Date(y, (m ?? 1) - 1, d ?? 1).getTime()
}

export function sortedWorks(): Work[] {
  return [...works].sort((a, b) => parseDate(b.date) - parseDate(a.date))
}
