export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

export function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    return isTheme(stored) ? stored : null
  } catch {
    return null
  }
}

export function resolveTheme(): Theme {
  return readStoredTheme() ?? getSystemTheme()
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.style.colorScheme = theme

  const themeColor = document.querySelector('meta[name="theme-color"]')
  if (themeColor) {
    themeColor.setAttribute(
      'content',
      theme === 'dark' ? '#0b181e' : '#102f3b',
    )
  }
}

export function persistTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Ignore quota / private-mode failures; in-memory theme still applies.
  }
}
