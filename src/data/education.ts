import type { L10n } from '../i18n'

export type EducationItem = {
  id: string
  /** Anno o `ongoing` per "In corso" / "Ongoing" */
  year: string | 'ongoing'
  title: L10n
  institution: string
  description: L10n
  /** Nome file in `public/images/`, oppure null per il placeholder con iniziali */
  logo: string | null
}

/** Ordine cronologico inverso: la prima voce è la più recente. */
export const education: EducationItem[] = [
  {
    id: 'san-raffaele',
    year: 'ongoing',
    title: {
      it: 'Laurea Triennale in Scienze Motorie nel Calcio',
      en: "Bachelor's Degree in Sport Science for Football",
    },
    institution: 'Università San Raffaele',
    description: {
      it: "Percorso focalizzato sull'analisi tattica, la preparazione atletica e la data analysis applicata al calcio.",
      en: 'A programme focused on tactical analysis, physical preparation and data analysis applied to football.',
    },
    logo: 'universita-san-raffaele.svg',
  },
  {
    id: 'boolean',
    year: '2025',
    title: { it: 'Fundamentals on Data Analytics', en: 'Fundamentals on Data Analytics' },
    institution: 'Boolean',
    description: {
      it: 'Fondamenti di analisi dati applicati al contesto sportivo.',
      en: 'Data analysis fundamentals applied to the sporting context.',
    },
    logo: 'boolean.png',
  },
  {
    id: 'the-fa',
    year: '2024',
    title: { it: 'Talent Identification in Football', en: 'Talent Identification in Football' },
    institution: 'The Football Association',
    description: {
      it: "Corso della federazione inglese sull'identificazione e valutazione dei talenti calcistici.",
      en: 'An English FA course on identifying and assessing footballing talent.',
    },
    logo: 'the-fa.png',
  },
  {
    id: 'match-analysis-academy',
    year: '2024',
    title: { it: 'Match Analyst Live Tag Pro', en: 'Match Analyst Live Tag Pro' },
    institution: 'Match Analysis Academy',
    description: {
      it: "Formazione sull'utilizzo del software LiveTag Pro per il tagging e l'analisi video in tempo reale.",
      en: 'Training on LiveTag Pro for real-time tagging and video analysis.',
    },
    logo: 'match-analysis-academy.jpeg',
  },
  {
    id: 'panini-dsp',
    year: '2022',
    title: { it: 'Tactical Master', en: 'Tactical Master' },
    institution: 'Panini Digital Sport Platform',
    description: {
      it: "Approfondimento avanzato sulla tattica calcistica e l'analisi dei sistemi di gioco.",
      en: 'An advanced deep dive into football tactics and the analysis of playing systems.',
    },
    logo: 'panini-dsp.jpeg',
  },
  {
    id: 'lf-scouting',
    year: '2021',
    title: { it: 'Professional Match Analyst', en: 'Professional Match Analyst' },
    institution: 'LF Scouting',
    description: {
      it: 'Corso professionale sulle metodologie di match analysis e scouting.',
      en: 'A professional course on match analysis and scouting methodologies.',
    },
    logo: 'lf-scouting.webp',
  },
  {
    id: 'emiscouting',
    year: '2021',
    title: { it: 'Match Analyst PRO', en: 'Match Analyst PRO' },
    institution: 'Emiscouting',
    description: {
      it: "Formazione professionale sull'analisi tattica e l'utilizzo di software di video analysis.",
      en: 'Professional training in tactical analysis and video analysis software.',
    },
    logo: 'emiscouting.png',
  },
]

/**
 * Software & Strumenti — solo nomi, nessun livello o percentuale.
 * Per aggiungerne uno basta aggiungere una stringa a questo array.
 */
export const tools: string[] = [
  'Premiere Pro',
  'After Effects',
  'DaVinci Resolve',
  'LiveTagPro',
  'Metrica Sports',
  'NacSport',
  'Klipdraw',
  'Once Sport',
  'FotMob',
  'SofaScore',
  'Wyscout',
  'Tableau',
  'Excel',
  'Google Sheets',
]
