import type { L10n } from '../i18n'

/**
 * Dati anagrafici, contatti e link.
 * ⚠️ PERSONALIZZARE: per aggiornare il CV sostituisci il PDF in `public/`
 * mantenendo lo stesso nome file, oppure cambia il nome qui sotto.
 * Metti `null` per nascondere tutti i pulsanti "Scarica CV".
 */
export const cvUrl: string | null = `${import.meta.env.BASE_URL}Alessandro_Guglielmo_CV.pdf`

export const email = 'aleguglielmo22@gmail.com'

export type ContactLink = {
  id: string
  label: string
  value: L10n
  href: string
  external: boolean
}

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    value: { it: email, en: email },
    href: `mailto:${email}`,
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: { it: 'Alessandro Guglielmo', en: 'Alessandro Guglielmo' },
    href: 'https://www.linkedin.com/in/alessandro-guglielmo-587339222/',
    external: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: { it: '@thethirdman_fc', en: '@thethirdman_fc' },
    href: 'https://www.instagram.com/thethirdman_fc/',
    external: true,
  },
  {
    id: 'x',
    label: 'X (Twitter)',
    value: { it: '@AleGuglielmo_', en: '@AleGuglielmo_' },
    href: 'https://x.com/AleGuglielmo_',
    external: true,
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    value: { it: '@thethirdman_fc', en: '@thethirdman_fc' },
    href: 'https://www.tiktok.com/@thethirdman_fc',
    external: true,
  },
]
