import styles from './Header.module.css'
import { profile } from '../content/profile'
import { useActiveSection, type SectionId } from '../hooks/useActiveSection'
import { useLocale } from '../i18n/useLocale'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const activeSection = useActiveSection()
  const { t } = useLocale()

  const links: { href: `#${SectionId}`; label: string; id: SectionId }[] = [
    { href: '#work', label: t.nav.work, id: 'work' },
    { href: '#skills', label: t.nav.skills, id: 'skills' },
    { href: '#about', label: t.nav.about, id: 'about' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ]

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <a
          className={styles.brand}
          href="#top"
          aria-label={`${profile.name} ${t.a11y.brandTop}`}
        >
          {profile.name}
        </a>
        <div className={styles.controls}>
          <nav className={styles.nav} aria-label={t.a11y.primaryNav}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  activeSection === link.id ? styles.active : undefined
                }
                aria-current={
                  activeSection === link.id ? 'location' : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className={styles.toggles}>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
