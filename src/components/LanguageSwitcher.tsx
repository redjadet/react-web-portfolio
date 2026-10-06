import styles from './LanguageSwitcher.module.css'
import { LOCALES, type Locale } from '../i18n/locale'
import { useLocale } from '../i18n/useLocale'

const labels: Record<Locale, string> = {
  en: 'EN',
  tr: 'TR',
}

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div
      className={styles.switcher}
      role="group"
      aria-label={t.a11y.language}
    >
      {LOCALES.map((code) => {
        const selected = locale === code
        return (
          <button
            key={code}
            type="button"
            className={selected ? styles.active : undefined}
            onClick={() => setLocale(code)}
            aria-pressed={selected}
            aria-label={code === 'en' ? 'English' : 'Türkçe'}
            lang={code}
            title={code === 'en' ? 'English' : 'Türkçe'}
          >
            {labels[code]}
          </button>
        )
      })}
    </div>
  )
}
