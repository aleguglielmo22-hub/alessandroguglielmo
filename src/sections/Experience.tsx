import { useLang } from '../i18n'
import { experiences } from '../data/experiences'
import { SECTION } from '../lib/sections'
import { Reveal } from '../components/Reveal'
import { LogoBadge } from '../components/LogoBadge'

export function Experience() {
  const { t, tr } = useLang()

  return (
    <section id={SECTION.experience} className="relative scroll-mt-24 overflow-hidden bg-night py-24 text-white md:py-32">
      {/* Alone arancione soffuso in basso a sinistra */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 size-[560px] rounded-full opacity-60 blur-[110px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,107,0,0.28) 0%, transparent 68%)',
        }}
      />

      <div className="shell relative">
        <Reveal>
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            <span className="font-body text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
              {t.experience.label}
            </span>
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.5rem,6.2vw,4.15rem)] leading-[0.95] font-medium text-white">
            {t.experience.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 70}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-400 hover:-translate-y-1 hover:border-accent/45 hover:bg-white/[0.06]">
                <div className="flex items-start gap-4">
                  <LogoBadge logo={exp.logo} name={exp.organization} className="size-14" dark />
                  <div className="min-w-0">
                    <h3 className="font-display text-[1.32rem] leading-snug font-semibold text-white">
                      {exp.organization}
                    </h3>
                    <p className="mt-1 font-body text-[14px] font-medium text-accent">
                      {tr(exp.role)}
                    </p>
                  </div>
                </div>

                <p className="mt-5 inline-block rounded-full border border-white/12 px-3 py-1 font-body text-[12px] font-medium tracking-wide text-white/55">
                  {tr(exp.period)}
                </p>

                <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                  {tr(exp.description)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
