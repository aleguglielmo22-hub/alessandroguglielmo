import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { sortedWorks } from '../data/works'
import { SECTION } from '../lib/sections'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { WorkCard } from '../components/WorkCard'
import { IconArrowRight } from '../components/Icons'

/** Anteprima homepage: i 4 lavori più recenti, letti da `src/data/works.ts`. */
export function WorksPreview() {
  const { t } = useLang()
  const latest = sortedWorks().slice(0, 4)

  return (
    <section id={SECTION.works} className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <SectionLabel>{t.works.label}</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-bold">
                {t.works.title}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <Link
              to="/analisi"
              className="group inline-flex min-h-[44px] items-center gap-2 font-display text-[15px] font-semibold text-ink transition-colors hover:text-accent"
            >
              {t.works.seeAll}
              <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latest.map((work, i) => (
            <Reveal key={work.id} delay={i * 80} className="h-full">
              <WorkCard work={work} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
