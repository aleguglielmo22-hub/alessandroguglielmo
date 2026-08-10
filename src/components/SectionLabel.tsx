/** Label di sezione: linea arancione + testo maiuscolo. */
export function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      <span className="font-body text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
        {children}
      </span>
    </span>
  )
}
