import { useLang } from '../i18n'
import { IconArrowUp } from './Icons'

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-line bg-canvas">
      <div className="shell flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-center text-[13px] text-muted sm:text-left">{t.footer.rights}</p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group inline-flex min-h-[44px] items-center gap-2 text-[13px] font-medium text-muted transition-colors hover:text-accent"
        >
          {t.footer.top}
          <IconArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  )
}
