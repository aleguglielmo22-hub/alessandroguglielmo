import { useId } from 'react'

type AGLogoProps = {
  /** Altezza in px; la larghezza segue il viewBox */
  height?: number
  className?: string
  title?: string
}

/**
 * Simbolo AG — stesse forme del logo di AG Workspace / AG Studio.
 * Lettere in `--color-ink` (si adatta a tema chiaro/scuro), barra in `--color-accent`.
 */
export function AGLogo({ height = 140, className = '', title = 'AG — Alessandro Guglielmo' }: AGLogoProps) {
  const mask = `ag-mask-${useId().replace(/:/g, '')}`

  return (
    <svg
      viewBox="-22 -2 240 104"
      height={height}
      width={Math.round((height * 240) / 104)}
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <mask id={mask} maskUnits="userSpaceOnUse" x="-200" y="-200" width="700" height="500">
          <rect x="-200" y="-200" width="700" height="500" fill="#fff" />
          <polygon
            fill="#000"
            stroke="#000"
            strokeWidth={9}
            strokeLinejoin="miter"
            points="-14,58 61.2,58 67.6,76 -26,76"
          />
        </mask>
      </defs>
      <g transform="translate(25 0) skewX(-14)">
        <g
          mask={`url(#${mask})`}
          strokeWidth={0.6}
          style={{ fill: 'var(--color-ink)', stroke: 'var(--color-ink)' }}
        >
          <polygon points="0,100 34,0 66,0 100,100 76,100 50,26 24,100" />
          <polygon points="92.5,78 96,78 118,100 100,100" />
          <polygon points="190,0 118,0 96,22 96,78 118,100 186,100 186,44 140,44 140,62 164,62 164,78 128,78 118,68 118,32 128,22 184,22" />
        </g>
        <polygon style={{ fill: 'var(--color-accent)' }} points="-14,58 61.2,58 67.6,76 -26,76" />
      </g>
    </svg>
  )
}
