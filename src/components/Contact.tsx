import styles from './Contact.module.css'
import { profile } from '../content/profile'

export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="shell">
        <p className="section__eyebrow">Contact</p>
        <h2 id="contact-title" className="section__title">
          Let’s talk about the next build
        </h2>
        <div className={styles.panel}>
          <p className={styles.note}>
            Prefer email for hiring conversations, GitHub for code, LinkedIn for a quick intro.
          </p>
          <div className={styles.actions}>
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a
              className="btn btn--ghost"
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            <a
              className="btn btn--ghost"
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
          <p className={styles.email}>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </section>
  )
}
