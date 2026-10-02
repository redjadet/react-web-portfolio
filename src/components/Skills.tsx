import styles from './Skills.module.css'
import { skillGroups } from '../content/skills'
export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="shell">
        <h2 id="skills-title" className="section__title">
          Skills &amp; engineering practices
        </h2>
        <p className="section__lead">
          Native mobile depth, cross-platform delivery and a practical web
          stack.
        </p>
        <div className={styles.grid}>
          {skillGroups.map((group) => (
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
