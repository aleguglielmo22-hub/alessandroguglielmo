import { useLang } from '../i18n'
import { education, tools } from '../data/education'
import { SECTION } from '../lib/sections'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { LogoBadge } from '../components/LogoBadge'

export function Education() {
  const { t, tr } = useLang()

  return (
    <section id={SECTION.education} className="scroll-mt-24 bg-canvas py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <SectionLabel>{t.education.label}</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.5rem,6.2vw,4.15rem)] leading-[0.95] font-medium">
            {t.education.title}
          </h2>
        </Reveal>

        {/* ── Timeline ──────────────────────────────────────────── */}
        <ol className="relative mt-14 md:mt-16">
          {/* Linea verticale sfumata arancione → grigio */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-px md:left-[calc(7rem+7px)]"
            style={{
              background:
                'linear-gradient(to bottom, var(--color-accent) 0%, rgba(255,107,0,0.35) 30%, var(--color-line) 100%)',
            }}
          />

          {education.map((item, i) => (
            <Reveal as="li" key={item.id} delay={i * 70} className="relative block">
              <div className="grid grid-cols-[auto_1fr] gap-x-5 pb-11 md:grid-cols-[7rem_auto_1fr] md:gap-x-7">
                {/* Anno (desktop: colonna dedicata a sinistra della linea) */}
                <span className="col-start-2 row-start-1 mb-2 font-body text-[13px] font-semibold tracking-[0.12em] text-accent uppercase md:col-start-1 md:row-start-1 md:mb-0 md:justify-self-end md:pt-0.5 md:text-right">
                  {item.year === 'ongoing' ? t.education.ongoing : item.year}
                </span>

                {/* Dot sulla linea */}
                <span
                  aria-hidden="true"
                  className="col-start-1 row-span-2 row-start-1 mt-1.5 size-[15px] shrink-0 rounded-full border-[3px] border-canvas bg-accent ring-1 ring-accent/30 md:col-start-2 md:row-start-1"
                />

                <div className="col-start-2 row-start-2 md:col-start-3 md:row-span-2 md:row-start-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <LogoBadge logo={item.logo} name={item.institution} className="size-10" />
                    <h3 className="font-display text-[1.32rem] leading-snug font-semibold text-ink">
                      {tr(item.title)}
                    </h3>
                  </div>
                  <p className="mt-2 font-body text-[15px] font-medium text-ink/60">
                    {item.institution}
                  </p>
                  <p className="mt-2.5 max-w-[58ch] text-[15px] leading-relaxed text-muted">
                    {tr(item.description)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* ── Software & Strumenti ──────────────────────────────── */}
        <div className="mt-6 border-t border-line pt-14">
          <Reveal>
            <h3 className="font-display text-[1.62rem] font-semibold">{t.education.toolsTitle}</h3>
            <p className="mt-2 max-w-[52ch] text-[15px] text-muted">{t.education.toolsSubtitle}</p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-line bg-surface/60 px-4 py-2 font-body text-[14px] font-medium text-ink/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
