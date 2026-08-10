/**
 * Costruisce l'URL corretto di un file dentro `public/`, tenendo conto
 * del `base` di Vite (necessario su GitHub Pages: /alessandroguglielmo/).
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

/** Immagini in `public/images/` */
export function image(filename: string): string {
  return asset(`images/${filename}`)
}

/** Iniziali usate come fallback quando il logo non è disponibile. */
export function initials(name: string): string {
  return name
    .replace(/[^\p{L}\s]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('')
}
