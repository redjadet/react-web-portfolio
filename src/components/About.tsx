import styles from './About.module.css'
import { useLocale } from '../i18n/useLocale'

export function About() {
  const { t } = useLocale()
  const educationLines = t.about.educationValue.split('\n')

  return (
    <section
      id="about"
      className={['section', styles.about].join(' ')}
      aria-labelledby="about-title"
    >
      <div className={['shell', styles.layout].join(' ')}>
        <div className={styles.copy}>
          <h2 id="about-title" className="section__title">
            {t.about.title}
          </h2>
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
        <dl className={styles.facts}>
          <div>
            <dt>{t.about.location}</dt>
            <dd>{t.profile.location}</dd>
          </div>
          <div>
            <dt>{t.about.arrangements}</dt>
            <dd>{t.profile.arrangements}</dd>
          </div>
          <div>
            <dt>{t.about.availability}</dt>
            <dd>{t.profile.availability}</dd>
          </div>
          <div>
            <dt>{t.about.education}</dt>
            <dd>
              {educationLines.map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
