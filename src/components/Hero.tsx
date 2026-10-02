import styles from './Hero.module.css'
import { profile } from '../content/profile'
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-name">
      <div className={['shell', styles.inner].join(' ')}>
        <div className={styles.copy}>
          <h1 id="hero-name" className={styles.name}>
            {profile.name}
          </h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.headline}>{profile.headline}</p>
          <p className={styles.support}>{profile.support}</p>
          <div className={styles.actions}>
            <a className="btn btn--primary" href="#work">
              Explore my work
            </a>
            <a className="btn btn--outline" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <img
          className={styles.portrait}
          src={import.meta.env.BASE_URL + 'ilker-sevim.jpg'}
          alt="Portrait of İlker Sevim"
          width="720"
          height="959"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  )
}
