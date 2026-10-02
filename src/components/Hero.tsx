import styles from './Hero.module.css'
import { profile } from '../content/profile'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-name">
      <div className={styles.atmosphere} aria-hidden="true">
        <div className={styles.orb} />
        <div className={styles.grid} />
      </div>

      <div className={`shell ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 id="hero-name" className={`${styles.brand} rise`}>
            {profile.name}
          </h1>
          <p className={`${styles.headline} rise rise-delay-1`}>{profile.headline}</p>
          <p className={`${styles.support} rise rise-delay-2`}>{profile.support}</p>
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
          <p className={styles.role}>{profile.role}</p>
          <div className={styles.mark}>IS</div>
          <div className={styles.visualMeta}>
            <span>iOS · Flutter · Web</span>
            <span>Public craft, production habits</span>
          </div>
        </aside>
      </div>
    </section>
  )
}
