import styles from './Projects.module.css'
import { projects } from '../content/projects'

export function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0]
  const rest = projects.filter((project) => project.id !== featured.id)

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="shell">
        <p className="section__eyebrow">Selected work</p>
        <h2 id="work-title" className="section__title">
          Public projects with production habits
        </h2>
        <p className="section__lead">
          A short, honest set of repositories — portfolio apps, comparison studies, and published Dart
          packages. Each link opens the public GitHub repo.
        </p>

        <a
          className={styles.featured}
          href={featured.href}
          target="_blank"
          rel="noreferrer"
        >
          <p className={styles.kicker}>Featured</p>
          <h3 className={styles.name}>{featured.name}</h3>
          <p className={styles.blurb}>{featured.blurb}</p>
          <ul className={styles.tags}>
            {featured.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </a>

        <div className={styles.grid}>
          {rest.map((project) => (
            <a
              key={project.id}
              className={styles.card}
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className={styles.cardName}>{project.name}</h3>
              <p className={styles.cardBlurb}>{project.blurb}</p>
              <ul className={styles.tags}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className={styles.cta}>View on GitHub →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
