import type { Dictionary } from './it'

/**
 * ENGLISH dictionary — interface copy.
 * Content (education, experience, services, work) lives in `src/data/`.
 */
export const en: Dictionary = {
  meta: {
    title: 'AG — Football Analyst',
    description:
      'Alessandro Guglielmo — Football Analyst. Tactical analysis, match analysis and scouting for clubs, coaching staff and sports media.',
  },

  nav: {
    about: 'About',
    education: 'Education',
    experience: 'Experience',
    analysis: 'Analysis',
    services: 'Services',
    contact: 'Contact',
    cv: 'Download CV',
    menu: 'Open menu',
    close: 'Close menu',
    langLabel: 'Switch language',
  },

  hero: {
    eyebrow: 'Welcome to my portfolio',
    firstName: 'Alessandro',
    lastName: 'Guglielmo',
    role: 'Football Analyst',
    ctaWorks: 'See my work',
    ctaCv: 'Download CV',
    photoAlt: 'Alessandro Guglielmo',
  },

  about: {
    label: 'About',
    titleBefore: 'Football seen through different ',
    titleAccent: 'eyes',
    bio: [
      'Watching a match has never been enough for me: I have always needed to understand the reason behind every decision, the mechanism behind every movement, the exact moment a single action changes everything. That instinct led me to tactical analysis and scouting, where I combine live observation, video analysis and data to deliver a complete, usable reading of the game.',
      'I have worked alongside coaching staff in Serie C, written for specialist media outlets and assessed players in international contexts. What sets me apart is versatility, attention to detail and the ability to shape my work around what each project actually needs — whether that means preparing a match, evaluating a player or telling the story of the game through content.',
    ],
    highlights: ['tactical analysis and scouting', 'versatility, attention to detail'],
    stats: [
      { value: '100+', label: 'Analyses delivered' },
      { value: '10+', label: 'Collaborations' },
      { value: '50+', label: 'Articles written' },
    ],
  },

  education: {
    label: 'Education',
    title: 'Training & Qualifications',
    ongoing: 'Ongoing',
    toolsTitle: 'Software & Tools',
    toolsSubtitle: 'The tools I use daily to tag, analyse, edit and visualise.',
  },

  experience: {
    label: 'Experience',
    title: "Where I've Worked",
    ongoing: 'Present',
  },

  works: {
    label: 'Portfolio',
    title: 'My Work',
    seeAll: 'See full archive',
    pageTitle: 'Analysis',
    pageSubtitle:
      'All of my work: tactical analyses, opposition studies, player reports and in-depth articles.',
    back: 'Back to Home',
    all: 'All',
    empty: 'Nothing in this category yet.',
    open: 'Open',
  },

  services: {
    label: 'Services',
    title: 'What I Can Do for You',
    subtitle:
      'Professional services for clubs, coaching staff, sporting directors and sports media.',
    cta: 'Contact me for info',
  },

  contact: {
    label: 'Contact',
    title: "Let's talk.",
    subtitle:
      'Got a project in mind, a collaboration to propose or simply want to know more? Drop me a line — I always reply.',
  },

  footer: {
    rights: '© 2026 Alessandro Guglielmo — All rights reserved',
    top: 'Back to top',
  },
}
