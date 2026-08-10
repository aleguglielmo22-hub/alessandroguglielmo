import type { ReactNode } from 'react'
import { useLang } from '../i18n'
import { SECTION } from '../lib/sections'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { ProfilePhoto } from '../components/ProfilePhoto'

/**
 * Evidenzia in arancione bold i frammenti indicati in `highlights`
 * (definiti nei dizionari i18n) all'interno del paragrafo.
 */
function highlight(text: string, fragments: string[]): ReactNode {
  const found = fragments.filter((f) => text.includes(f))
  if (found.length === 0) return text

  const pattern = new RegExp(`(${found.map(escapeRegExp).join('|')})`, 'g')
  return text.split(pattern).map((chunk, i) =>
    found.includes(chunk) ? (
      <strong key={i} className="font-semibold text-accent">
        {chunk}
      </strong>
    ) : (
      chunk
    ),
  )
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function About() {
  const { t } = useLang()

  return (
    <section id={SECTION.about} className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="shell grid items-start gap-12 md:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* ── Foto ──────────────────────────────────────────────── */}
        <Reveal className="order-2 md:order-1 md:sticky md:top-28">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-4 -left-4 h-24 w-24 rounded-tl-[26px] border-t-2 border-l-2 border-accent/70"
            />
            <div className="relative overflow-hidden rounded-[26px] bg-line">
              <ProfilePhoto alt={t.hero.photoAlt} className="aspect-4/5 w-full" />
            </div>
          </div>
        </Reveal>

        {/* ── Testo ─────────────────────────────────────────────── */}
        <div className="order-1 md:order-2">
          <Reveal>
            <SectionLabel>{t.about.label}</SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-bold">
              {t.about.titleBefore}
              <span className="text-accent">{t.about.titleAccent}</span>
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5">
            {t.about.bio.map((paragraph, i) => (
              <Reveal key={i} delay={140 + i * 90}>
                <p className="max-w-[62ch] text-[1.0625rem] leading-[1.75] text-ink/75">
                  {highlight(paragraph, t.about.highlights)}
                </p>
              </Reveal>
            ))}
          </div>

          {/* ── Stats ───────────────────────────────────────────── */}
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {t.about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-[clamp(1.9rem,4.5vw,2.75rem)] leading-none font-extrabold tracking-tight text-accent">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-[13px] leading-snug text-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
