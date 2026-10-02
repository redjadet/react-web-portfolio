import styles from './Projects.module.css'
import { projects } from '../content/projects'

export function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0]
  const rest = featured ? projects.filter((project) => project.id !== featured.id) : []

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

        {!featured ? (
          <p className={styles.empty} role="status">
            Project list is empty. Add entries in <code>src/content/projects.ts</code>.
          </p>
        ) : (
          <>
            <a
              className={styles.featured}
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${featured.name} on GitHub (opens in a new tab)`}
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
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub (opens in a new tab)`}
                >
                  <h3 className={styles.cardName}>{project.name}</h3>
                  <p className={styles.cardBlurb}>{project.blurb}</p>
                  <ul className={styles.tags}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <span className={styles.cta} aria-hidden="true">
                    View on GitHub →
                  </span>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
