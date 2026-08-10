type IconProps = { className?: string }

const base = 'shrink-0'

export const IconDownload = ({ className = 'size-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
    <path
      d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconArrowRight = ({ className = 'size-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
    <path
      d="M5 12h14m0 0-6-6m6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconArrowLeft = ({ className = 'size-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
    <path
      d="M19 12H5m0 0 6-6m-6 6 6 6"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconArrowUp = ({ className = 'size-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
    <path
      d="M12 19V5m0 0-6 6m6-6 6 6"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconChevronDown = ({ className = 'size-3.5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
    <path
      d="m6 9 6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconMenu = ({ className = 'size-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const IconClose = ({ className = 'size-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const IconMail = ({ className = 'size-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="m4 8 7.1 4.7a2 2 0 0 0 2.2 0L20.5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const IconLinkedIn = ({ className = 'size-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`${base} ${className}`}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.4 8.75 23 10.9 23 14.1V21h-4v-6.1c0-1.46-.03-3.34-2.06-3.34-2.06 0-2.38 1.59-2.38 3.23V21h-4V9Z" />
  </svg>
)

export const IconInstagram = ({ className = 'size-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" />
  </svg>
)

export const IconX = ({ className = 'size-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`${base} ${className}`}>
    <path d="M17.53 3H20.5l-6.49 7.41L21.75 21h-5.96l-4.67-6.1L5.77 21H2.8l6.94-7.93L2.25 3h6.11l4.22 5.58L17.53 3Zm-1.04 16.2h1.65L7.6 4.71H5.83L16.49 19.2Z" />
  </svg>
)

export const IconTikTok = ({ className = 'size-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`${base} ${className}`}>
    <path d="M16.5 3c.35 1.9 1.44 3.36 3.5 3.63v2.6c-1.31.06-2.55-.28-3.72-1.03v5.9c0 4.4-4.35 6.9-7.6 4.9-2.28-1.4-2.9-4.5-1.5-6.7 1.1-1.72 3.1-2.5 5.03-2.16v2.85c-.3-.1-.6-.14-.94-.12-1.2.06-2.16 1.1-2.06 2.3.1 1.2 1.14 2.1 2.34 2 .95-.08 1.72-.78 1.9-1.7.05-.24.06-.5.06-.75V3h3Z" />
  </svg>
)

export const IconExternal = ({ className = 'size-3.5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
    <path
      d="M14 5h5v5M19 5l-8 8M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const contactIcons = {
  email: IconMail,
  linkedin: IconLinkedIn,
  instagram: IconInstagram,
  x: IconX,
  tiktok: IconTikTok,
} as const
