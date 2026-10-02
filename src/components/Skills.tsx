import styles from './Skills.module.css'
import { skillGroups } from '../content/skills'

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="shell">
        <p className="section__eyebrow">Skills</p>
        <h2 id="skills-title" className="section__title">
          Practical stacks, not a logo wall
        </h2>
        <p className="section__lead">
          Grouped by how I actually ship: platforms, architecture, demo craft, and delivery.
        </p>
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article key={group.id} className={styles.card}>
              <h3 className={styles.title}>{group.title}</h3>
              <ul className={styles.list}>
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
