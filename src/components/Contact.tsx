import styles from './Contact.module.css'
import { profile } from '../content/profile'
import { ExternalLink } from './ExternalLink'
export function Contact() {
  return (
    <section
      id="contact"
      className={['section', styles.contact].join(' ')}
      aria-labelledby="contact-title"
    >
      <div className={['shell', styles.layout].join(' ')}>
        <div>
          <h2 id="contact-title" className={styles.title}>
            Let’s build something reliable.
          </h2>
          <p className={styles.note}>
            Open to iOS, Flutter and mobile engineering opportunities.
            <br />
            Remote from Türkiye, or hybrid and onsite in Istanbul.
          </p>
          <div className={styles.actions}>
            <a
              className={['btn', styles.emailButton].join(' ')}
              href={'mailto:' + profile.email}
            >
              Email me
            </a>
            <ExternalLink href={profile.links.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={profile.links.github}>GitHub</ExternalLink>
          </div>
          <a className={styles.email} href={'mailto:' + profile.email}>
            {profile.email}
          </a>
        </div>
        <p className={styles.invitation}>
          For hiring conversations, tell me about the product, team and the
          role.
        </p>
      </div>
    </section>
  )
}
