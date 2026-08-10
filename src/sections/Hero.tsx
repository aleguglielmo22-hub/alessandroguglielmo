import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { cvUrl } from '../data/profile'
import { SECTION } from '../lib/sections'
import { IconArrowRight, IconDownload } from '../components/Icons'
import { ProfilePhoto } from '../components/ProfilePhoto'

export function Hero() {
  const { t } = useLang()

  return (
    <section id={SECTION.hero} className="relative overflow-hidden">
      {/* Glow radiale arancione in alto a destra */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[680px] rounded-full opacity-70 blur-[90px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,107,0,0.20) 0%, rgba(255,107,0,0.07) 42%, transparent 70%)',
        }}
      />

      <div className="shell relative grid items-center gap-14 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28 lg:gap-20">
        {/* ── Colonna testo ─────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="font-body text-[11px] font-semibold tracking-[0.24em] text-accent uppercase opacity-0 [animation:fade-up_0.8s_cubic-bezier(0.22,1,0.36,1)_0.05s_forwards]">
            {t.hero.eyebrow}
          </p>

          <h1 className="mt-5 font-display text-[clamp(3.7rem,13.5vw,9.6rem)] leading-[0.86] font-medium tracking-[-0.01em]">
            <span className="block opacity-0 [animation:fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.15s_forwards]">
              {t.hero.firstName}
            </span>
            <span className="block text-accent opacity-0 [animation:fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.28s_forwards]">
              {t.hero.lastName}
            </span>
          </h1>

          <p className="mt-6 flex items-center gap-3 font-display text-[clamp(1.25rem,2.9vw,1.75rem)] font-normal text-muted opacity-0 [animation:fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.42s_forwards]">
            <span className="hidden h-px w-10 bg-ink/20 md:inline-block" aria-hidden="true" />
            {t.hero.role}
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-3 opacity-0 [animation:fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.55s_forwards] sm:flex-row sm:items-center">
            <Link
              to="/analisi"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-accent px-8 font-body text-[15px] font-semibold text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_16px_34px_-14px_var(--color-accent)]"
            >
              {t.hero.ctaWorks}
              <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* ⚠️ PERSONALIZZARE: link CV in src/data/profile.ts */}
            <a
              href={cvUrl ?? '#'}
              {...(cvUrl ? { download: '', target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-ink/15 px-8 font-body text-[15px] font-semibold text-ink transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <IconDownload className="size-4" />
              {t.hero.ctaCv}
            </a>
          </div>
        </div>

        {/* ── Colonna foto (nascosta su mobile) ─────────────────── */}
        <div className="relative hidden justify-self-center opacity-0 [animation:fade-in_1.1s_cubic-bezier(0.22,1,0.36,1)_0.35s_forwards] md:block">
          {/* Quadrato arancione decorativo offset */}
          <div
            aria-hidden="true"
            className="absolute -right-6 -bottom-6 size-44 rounded-[26px] bg-accent"
          />
          <div className="relative w-[min(380px,32vw)] overflow-hidden rounded-[28px] bg-line shadow-[0_30px_70px_-32px_rgba(20,20,20,0.45)]">
            <ProfilePhoto alt={t.hero.photoAlt} eager className="aspect-4/5 w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
