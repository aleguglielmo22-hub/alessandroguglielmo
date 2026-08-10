import { useLang } from '../i18n'
import { services } from '../data/services'
import { SECTION } from '../lib/sections'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { IconArrowRight } from '../components/Icons'

export function Services() {
  const { t, tr } = useLang()

  return (
    <section id={SECTION.services} className="scroll-mt-24 bg-canvas py-24 md:py-32">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>{t.services.label}</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-bold">
              {t.services.title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted">{t.services.subtitle}</p>
          </Reveal>
        </div>

        {/* Griglia 3 + 2 centrate su desktop, colonna singola su mobile */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:mt-16 md:grid-cols-6">
          {services.map((service, i) => (
            <Reveal
              key={service.id}
              delay={i * 70}
              className={`h-full md:col-span-2 ${i === 3 ? 'md:col-start-2' : ''}`}
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-all duration-400 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_50px_-30px_rgba(20,20,20,0.4)]">
                {/* Linea arancione laterale che cresce all'hover */}
                <span
                  aria-hidden="true"
                  className="absolute top-7 bottom-7 left-0 w-[3px] origin-top scale-y-0 rounded-r bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
                />

                <span
                  aria-hidden="true"
                  className="block font-display text-[3.25rem] leading-none font-extrabold tracking-tight text-accent/15 transition-colors duration-400 group-hover:text-accent/30"
                >
                  {service.number}
                </span>

                <h3 className="mt-4 font-display text-[1.3rem] font-bold text-ink">
                  {tr(service.title)}
                </h3>

                <p className="mt-3.5 text-[15px] leading-relaxed text-muted">
                  {tr(service.description)}
                </p>

                {/* Prezzo: mostrato SOLO se valorizzato in src/data/services.ts */}
                {service.price && (
                  <p className="mt-5 font-display text-[1.05rem] font-bold text-ink">
                    {tr(service.price)}
                  </p>
                )}

                {/* CTA della singola card: mostrata SOLO se valorizzata */}
                {service.cta && (
                  <a
                    href={`#${SECTION.contact}`}
                    className="mt-5 inline-flex min-h-[44px] items-center gap-2 font-display text-[14px] font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    {tr(service.cta)}
                    <IconArrowRight className="size-4" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex justify-center">
            <a
              href={`#${SECTION.contact}`}
              className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-ink px-9 font-display text-[15px] font-semibold text-canvas transition-all duration-300 hover:bg-accent hover:shadow-[0_16px_34px_-14px_var(--color-accent)]"
            >
              {t.services.cta}
              <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
