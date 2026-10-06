import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LocaleContext } from './LocaleContext'
import {
  applyDocumentLang,
  persistLocale,
  resolveLocale,
  type Locale,
} from './locale'
import { applyDocumentMeta, getMessages } from './messages'

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => resolveLocale())

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    persistLocale(next)
  }, [])

  useEffect(() => {
    applyDocumentLang(locale)
    applyDocumentMeta(locale)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: getMessages(locale),
    }),
    [locale, setLocale],
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}
