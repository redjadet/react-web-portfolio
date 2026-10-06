import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { ThemeContext } from './ThemeContext'
import {
  applyTheme,
  persistTheme,
  readStoredTheme,
  resolveTheme,
  type Theme,
} from './theme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => resolveTheme())
  const [manual, setManual] = useState(() => readStoredTheme() !== null)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    if (manual) return

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? 'dark' : 'light')
    }

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [manual])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      persistTheme(next)
      return next
    })
    setManual(true)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
