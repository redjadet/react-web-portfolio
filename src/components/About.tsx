import styles from './About.module.css'
import { profile } from '../content/profile'
export function About() {
  return (
    <section
      id="about"
      className={['section', styles.about].join(' ')}
      aria-labelledby="about-title"
    >
      <div className={['shell', styles.layout].join(' ')}>
        <div className={styles.copy}>
          <h2 id="about-title" className="section__title">
            Experience with real product constraints
          </h2>
          <p>
            I am a senior mobile engineer based in Istanbul. My experience spans
            banking, payments, telecom and secure communications, including
            native iPhone and iPad apps, shared iOS frameworks and
            cross-platform delivery.
          </p>
          <p>
            I have led mobile development, mentored engineers and automated
            build and release workflows. My public projects make architecture
            decisions, platform integration and testing practices easy to
            review.
          </p>
          <p>
            I bring the same care to AI-assisted development: useful context,
            scoped changes, human review and verification.
          </p>
        </div>
        <dl className={styles.facts}>
          <div>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Working arrangements</dt>
            <dd>{profile.arrangements}</dd>
          </div>
          <div>
            <dt>Availability</dt>
            <dd>{profile.availability}</dd>
          </div>
          <div>
            <dt>Education</dt>
            <dd>
              BSc Computer Engineering · Işık University
              <br />
              MBA · Maltepe University
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
