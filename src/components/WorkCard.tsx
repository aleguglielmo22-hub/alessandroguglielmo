import { useState } from 'react'
import { useLang } from '../i18n'
import { categories, typeLabels } from '../data/works'
import type { Work } from '../data/works'
import { image } from '../lib/assets'
import { IconExternal } from './Icons'

export function WorkCard({ work }: { work: Work }) {
  const { tr } = useLang()
  const [imgFailed, setImgFailed] = useState(false)
  const category = categories.find((c) => c.id === work.category)
  const showImage = Boolean(work.thumbnail) && !imgFailed

  const inner = (
    <>
      {/* Thumbnail 16:10 — placeholder grigio se assente */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-line/70">
        {showImage ? (
          <img
            src={image(work.thumbnail!)}
            alt={tr(work.title)}
            loading="lazy"
            decoding="async"
            onError={() => setImgFailed(true)}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="size-full"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, rgba(128,124,118,0.14) 0 1px, transparent 1px 11px)',
            }}
          />
        )}

        <span className="absolute top-3 left-3 rounded-full bg-accent px-2.5 py-1 font-body text-[11px] font-bold tracking-wide text-white uppercase">
          {tr(typeLabels[work.type])}
        </span>

        {category && (
          <span className="absolute top-3 right-3 rounded-full bg-ink/85 px-2.5 py-1 font-body text-[11px] font-semibold tracking-wide text-canvas backdrop-blur-sm">
            {tr(category.label)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[1.22rem] leading-snug font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
          {tr(work.title)}
        </h3>
        <p className="mt-2.5 line-clamp-3 text-[14.5px] leading-relaxed text-muted">
          {tr(work.description)}
        </p>
        <p className="mt-5 flex items-center gap-2 border-t border-line pt-4 font-body text-[12.5px] font-medium tracking-wide text-muted">
          {work.date}
          {work.link && <IconExternal className="size-3.5 text-accent" />}
        </p>
      </div>
    </>
  )

  const shell =
    'group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-400'

  // ⚠️ La card diventa cliccabile solo se `link` è valorizzato in works.ts
  if (work.link) {
    return (
      <a
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${shell} hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_22px_45px_-26px_rgba(20,20,20,0.4)]`}
      >
        {inner}
      </a>
    )
  }

  return <article className={shell}>{inner}</article>
}
