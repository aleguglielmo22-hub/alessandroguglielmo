import { useState } from 'react'
import { image, initials } from '../lib/assets'

type LogoBadgeProps = {
  /** Nome file in `public/images/` — null o mancante ⇒ fallback con iniziali */
  logo: string | null
  name: string
  className?: string
  dark?: boolean
}

/**
 * Logo dell'ente/club. Se il file non esiste o non è ancora stato caricato,
 * mostra automaticamente un placeholder con le iniziali.
 */
export function LogoBadge({ logo, name, className = 'size-12', dark = false }: LogoBadgeProps) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(logo) && !failed

  const shell = dark
    ? 'bg-white/5 ring-1 ring-white/10 text-white/70'
    : 'bg-white ring-1 ring-line text-muted'

  return (
    <span
      className={`inline-grid shrink-0 place-items-center overflow-hidden rounded-xl ${shell} ${className}`}
    >
      {showImage ? (
        <img
          src={image(logo!)}
          alt={name}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="size-full object-contain p-1.5"
        />
      ) : (
        <span
          aria-hidden="true"
          className="font-body text-[13px] font-bold tracking-tight select-none"
        >
          {initials(name)}
        </span>
      )}
    </span>
  )
}
