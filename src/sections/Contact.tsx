import { useLang } from '../i18n'
import { contactLinks } from '../data/profile'
import { SECTION } from '../lib/sections'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { contactIcons, IconArrowRight } from '../components/Icons'

export function Contact() {
  const { t, tr } = useLang()

  return (
    <section id={SECTION.contact} className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="shell flex flex-col items-center text-center">
        <Reveal>
          <SectionLabel>{t.contact.label}</SectionLabel>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-[clamp(3rem,8.5vw,5.8rem)] leading-[0.9] font-medium tracking-[-0.01em]">
            {t.contact.title}
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 max-w-[54ch] text-[1.0625rem] leading-relaxed text-muted">
            {t.contact.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 flex w-full max-w-3xl flex-wrap justify-center gap-3">
          {contactLinks.map((link, i) => {
            const Icon = contactIcons[link.id as keyof typeof contactIcons]
            return (
              <Reveal key={link.id} delay={180 + i * 60}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group inline-flex min-h-[52px] items-center gap-3 rounded-full border border-line px-6 text-[15px] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {Icon && <Icon className="size-5 text-muted transition-colors duration-300 group-hover:text-accent" />}
                  <span className="font-body font-semibold">{link.label}</span>
                  <span className="hidden text-muted transition-colors duration-300 group-hover:text-accent/80 sm:inline">
                    {tr(link.value)}
                  </span>
                  <IconArrowRight className="size-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
