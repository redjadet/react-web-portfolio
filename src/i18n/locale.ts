export type Locale = 'en' | 'tr'

export const LOCALES: readonly Locale[] = ['en', 'tr'] as const

export const LOCALE_STORAGE_KEY = 'locale'

export function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'tr'
}

export function getBrowserLocale(): Locale {
  const candidates = [
    ...(typeof navigator !== 'undefined' && Array.isArray(navigator.languages)
      ? navigator.languages
      : []),
    typeof navigator !== 'undefined' ? navigator.language : undefined,
  ].filter((value): value is string => typeof value === 'string' && value.length > 0)

  for (const candidate of candidates) {
    if (candidate.toLowerCase().startsWith('tr')) {
      return 'tr'
    }
  }

  return 'en'
}

export function readStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    return isLocale(stored) ? stored : null
  } catch {
    return null
  }
}

export function resolveLocale(): Locale {
  return readStoredLocale() ?? getBrowserLocale()
}

export function persistLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    // Ignore quota / private-mode failures; in-memory locale still applies.
  }
}

export function applyDocumentLang(locale: Locale): void {
  document.documentElement.lang = locale
}
