import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n'
import { SECTION } from '../lib/sections'
import { categories } from '../data/works'
import { cvUrl } from '../data/profile'
import { IconChevronDown, IconClose, IconDownload, IconMenu } from './Icons'

const LOGO = (
  <span className="font-display text-[2rem] leading-none font-bold tracking-tight">
    {/* Logo testuale segnaposto: sostituibile con un file SVG/PNG */}
    <span className="text-accent">A</span>
    <span className="text-ink">G</span>
  </span>
)

export function Navbar() {
  const { t, lang, setLang, tr } = useLang()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Chiude i menu al cambio pagina
  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location.pathname, location.hash])

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Chiude il dropdown su click fuori / Esc
  useEffect(() => {
    if (!dropdownOpen) return
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setDropdownOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setDropdownOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [dropdownOpen])

  const anchor = (id: string) => `/#${id}`
  const linkClass =
    'relative font-body text-[15px] text-ink/75 transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-[width] after:duration-300 hover:after:w-full'

  const navLinks = [
    { to: anchor(SECTION.about), label: t.nav.about },
    { to: anchor(SECTION.education), label: t.nav.education },
    { to: anchor(SECTION.experience), label: t.nav.experience },
  ]
  const navLinksAfter = [
    { to: anchor(SECTION.services), label: t.nav.services },
    { to: anchor(SECTION.contact), label: t.nav.contact },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/80 bg-canvas/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-canvas/0'
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-6">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0 })}
          aria-label="Alessandro Guglielmo — home"
          className="transition-opacity hover:opacity-70"
        >
          {LOGO}
        </Link>

        {/* ── Desktop nav (≥900px) ─────────────────────────────── */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </Link>
          ))}

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((v) => !v)}
              className={`${linkClass} flex items-center gap-1.5`}
            >
              {t.nav.analysis}
              <IconChevronDown
                className={`size-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`absolute top-full left-1/2 w-60 -translate-x-1/2 pt-4 transition-all duration-200 ${
                dropdownOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-1 opacity-0'
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-line bg-surface p-1.5 shadow-[0_18px_50px_-20px_rgba(20,20,20,0.35)]">
                {categories.map((c) => (
                  <Link
                    key={c.id}
                    to={`/analisi?cat=${c.id}`}
                    className="block rounded-xl px-3.5 py-2.5 text-[15px] text-ink/80 transition-colors hover:bg-accent/8 hover:text-accent"
                  >
                    {tr(c.label)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinksAfter.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* ── Azioni ───────────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} label={t.nav.langLabel} />

          {/* ⚠️ PERSONALIZZARE: il link al CV si imposta in src/data/profile.ts (cvUrl) */}
          <a
            href={cvUrl ?? '#'}
            {...(cvUrl ? { download: '', target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-body text-[14px] font-semibold text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_10px_24px_-10px_var(--color-accent)] md:inline-flex"
          >
            <IconDownload className="size-4" />
            {t.nav.cv}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? t.nav.close : t.nav.menu}
            aria-expanded={mobileOpen}
            className="grid size-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* ── Menu mobile (<900px) ───────────────────────────────── */}
      <div
        className={`overflow-hidden border-t border-line bg-canvas/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 md:hidden ${
          mobileOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <nav className="shell flex flex-col gap-1 py-5">
          {[...navLinks].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="flex min-h-[48px] items-center border-b border-line/70 font-display text-[1.4rem] font-medium text-ink"
            >
              {l.label}
            </Link>
          ))}

          <div className="border-b border-line/70 py-3">
            <p className="font-display text-[1.4rem] font-medium text-ink">{t.nav.analysis}</p>
            <div className="mt-2 flex flex-col">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  to={`/analisi?cat=${c.id}`}
                  className="flex min-h-[44px] items-center pl-4 text-[15px] text-muted transition-colors hover:text-accent"
                >
                  {tr(c.label)}
                </Link>
              ))}
            </div>
          </div>

          {navLinksAfter.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="flex min-h-[48px] items-center border-b border-line/70 font-display text-[1.4rem] font-medium text-ink"
            >
              {l.label}
            </Link>
          ))}

          <a
            href={cvUrl ?? '#'}
            {...(cvUrl ? { download: '', target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="mt-4 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-accent px-6 font-body font-semibold text-white"
          >
            <IconDownload className="size-4" />
            {t.nav.cv}
          </a>
        </nav>
      </div>
    </header>
  )
}

function LangToggle({
  lang,
  setLang,
  label,
}: {
  lang: 'it' | 'en'
  setLang: (l: 'it' | 'en') => void
  label: string
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="relative flex items-center rounded-full border border-line p-0.5"
    >
      <span
        aria-hidden="true"
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(${lang === 'it' ? '0' : '100%'})`, left: '2px' }}
      />
      {(['it', 'en'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`relative z-10 w-9 py-1.5 font-body text-[12px] font-bold tracking-wider uppercase transition-colors duration-300 ${
            lang === code ? 'text-canvas' : 'text-muted hover:text-ink'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
