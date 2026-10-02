import styles from './Footer.module.css'
import { profile } from '../content/profile'

const COPYRIGHT_YEAR = 2026

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <p>
          © {COPYRIGHT_YEAR} {profile.name}
        </p>
        <div className={styles.links}>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.links.portfolioRepo} target="_blank" rel="noreferrer">
            This repo
          </a>
        </div>
      </div>
    </footer>
  )
}
