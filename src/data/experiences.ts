import type { L10n } from '../i18n'

export type ExperienceItem = {
  id: string
  organization: string
  /** Nome file in `public/images/`, oppure null per il placeholder con iniziali */
  logo: string | null
  role: L10n
  period: L10n
  description: L10n
}

export const experiences: ExperienceItem[] = [
  {
    id: 'guidonia',
    organization: 'Guidonia Montecelio 1937',
    logo: 'guidonia-montecelio.png',
    role: { it: 'Match Analyst U17 & U15', en: 'Match Analyst U17 & U15' },
    period: { it: '2025', en: '2025' },
    description: {
      it: 'Analisi video e report tattici per lo staff tecnico del settore giovanile: studio post-partita delle squadre U17 e U15 e analisi pre-partita degli avversari.',
      en: 'Video analysis and tactical reports for the academy coaching staff: post-match study of the U17 and U15 sides and pre-match opposition analysis.',
    },
  },
  {
    id: 'trapani',
    organization: 'FC Trapani 1905',
    logo: 'fc-trapani-1905.png',
    role: { it: 'First Team Analyst & Scout', en: 'First Team Analyst & Scout' },
    period: { it: '2024', en: '2024' },
    description: {
      it: 'Analisi video e report tattici per lo staff tecnico della prima squadra in Serie C: studio post-partita della propria squadra e analisi pre-partita degli avversari.',
      en: 'Video analysis and tactical reports for the first-team coaching staff in Serie C: post-match study of our own side and pre-match opposition analysis.',
    },
  },
  {
    id: 'scout-underrated',
    organization: 'Scout Underrated',
    logo: 'scout-underrated.jpg',
    role: { it: 'Match Analyst & Scout', en: 'Match Analyst & Scout' },
    period: { it: '2024 – In corso', en: '2024 – Present' },
    description: {
      it: 'Analisi individuali di calciatori attraverso video report e report scritti. Attività di scouting e ricerca di talenti emergenti.',
      en: 'Individual player analysis through video and written reports. Scouting work and the search for emerging talent.',
    },
  },
  {
    id: 'napolinetwork',
    organization: 'NapoliNetwork.com',
    logo: 'napolinetwork.jpg',
    role: { it: 'Tactical Analysis Journalist', en: 'Tactical Analysis Journalist' },
    period: { it: '2022 – 2025', en: '2022 – 2025' },
    description: {
      it: 'Redazione di articoli di approfondimento tattico: analisi di partite, sistemi di gioco, profili di calciatori e tematiche tattiche di carattere generale.',
      en: 'Writing in-depth tactical pieces: match analyses, playing systems, player profiles and broader tactical themes.',
    },
  },
  {
    id: 'spaceviola',
    organization: 'SpaceViola.com',
    logo: 'spaceviola.webp',
    role: { it: 'Tactical Analysis Journalist', en: 'Tactical Analysis Journalist' },
    period: { it: '2021 – 2024', en: '2021 – 2024' },
    description: {
      it: 'Produzione di contenuti tattici scritti per la testata: analisi di partite e squadre, approfondimenti su singoli calciatori e articoli di analisi tattica generale.',
      en: 'Producing written tactical content for the outlet: match and team analyses, deep dives on individual players and general tactical analysis.',
    },
  },
  {
    id: 'rever-roma',
    organization: 'Rever Roma',
    logo: 'rever-roma.jpeg',
    role: { it: 'Match Analyst', en: 'Match Analyst' },
    period: { it: '2021 – 2022', en: '2021 – 2022' },
    description: {
      it: 'Analisi video e report scritti sulle prestazioni della propria squadra e studio tattico delle squadre avversarie a supporto dello staff tecnico.',
      en: "Video analysis and written reports on our own team's performances, plus tactical study of opponents in support of the coaching staff.",
    },
  },
]
