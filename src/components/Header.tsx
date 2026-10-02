import styles from './Header.module.css'
import { profile } from '../content/profile'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className={styles['site-header']}>
      <div className={`shell ${styles['site-header__inner']}`}>
        <a className={styles['site-header__brand']} href="#top">
          {profile.name}
        </a>
        <nav className={styles['site-header__nav']} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
