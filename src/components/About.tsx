import styles from './About.module.css'
import { profile } from '../content/profile'

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="shell">
        <p className="section__eyebrow">About</p>
        <h2 id="about-title" className="section__title">
          Senior mobile engineer, clear demos
        </h2>
        <div className={styles.panel}>
          <p>
            I am {profile.name}, based in {profile.location.split('·')[0].trim()}. My day-to-day is
            iOS and Flutter product work — architecture, offline resilience, native interop, and
            shipping with tests and CI.
          </p>
          <p>
            This site is a Vite + React + TypeScript portfolio demo: content lives in typed files,
            styling is intentional CSS, and the goal is a readable first impression rather than a
            CMS.
          </p>
          <p>{profile.availability}.</p>
        </div>
      </div>
    </section>
  )
}
