import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useLang } from '../i18n'
import { categories, sortedWorks } from '../data/works'
import type { WorkCategory } from '../data/works'
import { Reveal } from '../components/Reveal'
import { WorkCard } from '../components/WorkCard'
import { IconArrowLeft } from '../components/Icons'

type Filter = WorkCategory | 'all'

const VALID: Filter[] = ['all', ...categories.map((c) => c.id)]

function readFilter(param: string | null, hash: string): Filter {
  const raw = (param ?? hash.replace(/^#/, '')).toLowerCase()
  return (VALID as string[]).includes(raw) ? (raw as Filter) : 'all'
}

export default function Analisi() {
  const { t, tr } = useLang()
  const [searchParams, setSearchParams] = useSearchParams()
  // Il filtro arriva da ?cat=… (link del dropdown navbar) o dall'hash #…
  const [filter, setFilter] = useState<Filter>(() =>
    readFilter(searchParams.get('cat'), window.location.hash),
  )
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  const all = useMemo(() => sortedWorks(), [])

  // Sincronizza lo stato quando cambia la query string (es. click su un'altra voce del dropdown)
  useEffect(() => {
    setFilter(readFilter(searchParams.get('cat'), window.location.hash))
  }, [searchParams])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  // Posiziona la sottolineatura arancione sotto la tab attiva
  useEffect(() => {
    const update = () => {
      const el = tabRefs.current[filter]
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [filter, tr])

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: all.length }
    categories.forEach((c) => {
      map[c.id] = all.filter((w) => w.category === c.id).length
    })
    return map
  }, [all])

  const visible = filter === 'all' ? all : all.filter((w) => w.category === filter)

  const selectFilter = (next: Filter) => {
    setFilter(next)
    setSearchParams(next === 'all' ? {} : { cat: next }, { replace: true })
  }

  const tabs: { id: Filter; label: string }[] = [
    { id: 'all', label: t.works.all },
    ...categories.map((c) => ({ id: c.id as Filter, label: tr(c.label) })),
  ]

  return (
    <div className="bg-canvas pb-24 md:pb-32">
      {/* ── Header ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-52 right-0 size-[520px] rounded-full opacity-70 blur-[100px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,107,0,0.16) 0%, transparent 70%)',
          }}
        />
        <div className="shell relative pt-14 pb-12 md:pt-20">
          <Link
            to="/"
            className="group inline-flex min-h-[44px] items-center gap-2 text-[14px] font-medium text-muted transition-colors hover:text-accent"
          >
            <IconArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
            {t.works.back}
          </Link>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,8vw,5rem)] leading-[0.95] font-extrabold tracking-[-0.04em]">
            {t.works.pageTitle}
          </h1>
          <p className="mt-5 max-w-[62ch] text-[1.0625rem] leading-relaxed text-muted">
            {t.works.pageSubtitle}
          </p>
        </div>
      </section>

      {/* ── Tab filtri ─────────────────────────────────────────── */}
      <div className="sticky top-[72px] z-30 border-y border-line bg-canvas/85 backdrop-blur-xl">
        <div className="shell">
          <div className="no-scrollbar relative -mx-1 flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                ref={(el) => {
                  tabRefs.current[tab.id] = el
                }}
                onClick={() => selectFilter(tab.id)}
                aria-pressed={filter === tab.id}
                className={`relative flex min-h-[52px] shrink-0 items-center gap-2 px-4 font-display text-[15px] font-semibold whitespace-nowrap transition-colors duration-300 ${
                  filter === tab.id ? 'text-accent' : 'text-muted hover:text-ink'
                }`}
              >
                {tab.label}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[11px] font-bold transition-colors duration-300 ${
                    filter === tab.id ? 'bg-accent/12 text-accent' : 'bg-ink/5 text-muted'
                  }`}
                >
                  {counts[tab.id] ?? 0}
                </span>
              </button>
            ))}

            {/* Sottolineatura animata */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 h-[2px] bg-accent transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ left: indicator.left, width: indicator.width }}
            />
          </div>
        </div>
      </div>

      {/* ── Griglia lavori ─────────────────────────────────────── */}
      <div className="shell pt-12">
        {visible.length === 0 ? (
          <p className="py-20 text-center text-[15px] text-muted">{t.works.empty}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((work, i) => (
              // key con il filtro: rianima le card a ogni cambio di tab
              <Reveal key={`${filter}-${work.id}`} delay={Math.min(i, 6) * 70} className="h-full">
                <WorkCard work={work} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
