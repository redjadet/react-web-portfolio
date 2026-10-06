import styles from './Skills.module.css'
import { useLocale } from '../i18n/useLocale'

export function Skills() {
  const { t } = useLocale()

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="shell">
        <h2 id="skills-title" className="section__title">
          {t.skills.title}
        </h2>
        <p className="section__lead">{t.skills.lead}</p>
        <div className={styles.grid}>
          {t.skillGroups.map((group) => (
            <article key={group.id} className={styles.group}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
