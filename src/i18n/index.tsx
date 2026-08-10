import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { it } from './it'
import { en } from './en'
import type { Dictionary } from './it'

export type Lang = 'it' | 'en'

const DICTIONARIES: Record<Lang, Dictionary> = { it, en }
const STORAGE_KEY = 'ag-lang'

/** Testo bilingue: ogni contenuto in `src/data/` usa questa forma. */
export type L10n = { it: string; en: string }

type LangContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: Dictionary
  /** Estrae la stringa nella lingua attiva da un campo bilingue. */
  tr: (value: L10n) => string
}

const LangContext = createContext<LangContextValue | null>(null)

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'it'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'it' || stored === 'en') return stored
  return window.navigator.language?.toLowerCase().startsWith('it') ? 'it' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* localStorage non disponibile (private mode): la lingua resta per la sessione */
    }
  }, [])

  const toggleLang = useCallback(() => {
    setLang(lang === 'it' ? 'en' : 'it')
  }, [lang, setLang])

  // Aggiorna lang="" e i meta SEO quando cambia la lingua
  useEffect(() => {
    const dict = DICTIONARIES[lang]
    document.documentElement.lang = lang
    document.title = dict.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', dict.meta.description)
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', dict.meta.description)
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', lang === 'it' ? 'it_IT' : 'en_GB')
  }, [lang])

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: DICTIONARIES[lang],
      tr: (v: L10n) => v[lang],
    }),
    [lang, setLang, toggleLang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang deve essere usato dentro <LangProvider>')
  return ctx
}
