import styles from './Footer.module.css'
import { profile } from '../content/profile'
import { ExternalLink } from './ExternalLink'
import { useLocale } from '../i18n/useLocale'

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className={styles.footer}>
      <div className={['shell', styles.inner].join(' ')}>
        <p>© 2026 {profile.name}</p>
        <div className={styles.links}>
          <ExternalLink href={profile.links.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.links.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={profile.links.portfolioRepo}>
            {t.footer.websiteSource}
          </ExternalLink>
        </div>
      </div>
    </footer>
  )
}
