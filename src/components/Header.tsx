import styles from './Header.module.css'
import { profile } from '../content/profile'
import { useActiveSection, type SectionId } from '../hooks/useActiveSection'

const links: { href: `#${SectionId}`; label: string; id: SectionId }[] = [
  { href: '#work', label: 'Work', id: 'work' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

export function Header() {
  const activeSection = useActiveSection()

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <a className={styles.brand} href="#top">
          {profile.name}
        </a>
        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.id ? styles.active : undefined}
              aria-current={activeSection === link.id ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
