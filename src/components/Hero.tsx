import styles from './Hero.module.css'
import { profile } from '../content/profile'

export function Hero() {
  return (
    <section className={`${styles.hero} shell`} aria-labelledby="hero-name">
      <div className={styles.copy}>
        <p className={`${styles.role} rise`}>{profile.role}</p>
        <h1 id="hero-name" className={`${styles.brand} rise rise-delay-1`}>
          {profile.name}
        </h1>
        <p className={`${styles.headline} rise rise-delay-2`}>{profile.headline}</p>
        <p className={`${styles.summary} rise rise-delay-2`}>{profile.summary}</p>
        <p className={`${styles.meta} rise rise-delay-3`}>
          {profile.location}
          <span aria-hidden="true"> · </span>
          <span className={styles.metaBreak}>{profile.availability}</span>
        </p>
        <div className={`${styles.actions} rise rise-delay-3`}>
          <a className="btn btn--primary" href="#work">
            Selected work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact
          </a>
        </div>
      </div>

      <aside className={`${styles.visual} rise rise-delay-1`} aria-hidden="true">
        <div className={styles.mark}>
          <span>Portfolio</span>
          IS
        </div>
        <div className={styles.visualFooter}>
          <strong>iOS · Flutter · Web demos</strong>
          <span>Public craft, production habits</span>
        </div>
      </aside>
    </section>
  )
}
