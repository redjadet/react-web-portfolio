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
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p>
              I am {profile.name}, based in {profile.locationShort}. Day-to-day work is iOS and
              Flutter product engineering — architecture, offline resilience, native interop, and
              shipping with tests and CI.
            </p>
            <p>
              This site is a Vite + React + TypeScript portfolio demo: content lives in typed files,
              styling is intentional CSS, and the goal is a readable first impression rather than a
              CMS.
            </p>
          </div>
          <dl className={styles.facts}>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>{profile.availability}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>iOS · Flutter · production quality</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
