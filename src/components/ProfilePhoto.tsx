import { useState } from 'react'
import { image } from '../lib/assets'

type ProfilePhotoProps = {
  alt: string
  className?: string
  /** true per la hero (immagine subito visibile), false altrove */
  eager?: boolean
}

/**
 * Foto profilo (`public/images/foto-profilo.jpeg`).
 * Finché il file non è stato caricato mostra un segnaposto "AG" invece di un buco.
 */
export function ProfilePhoto({ alt, className = '', eager = false }: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`grid place-items-center bg-line ${className}`}
        role="img"
        aria-label={alt}
      >
        <span
          aria-hidden="true"
          className="font-display text-[clamp(2.5rem,8vw,4rem)] font-black tracking-tight select-none"
        >
          <span className="text-accent/45">A</span>
          <span className="text-ink/20">G</span>
        </span>
      </div>
    )
  }

  return (
    <img
      src={image('foto-profilo.jpeg')}
      alt={alt}
      width={520}
      height={650}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}
