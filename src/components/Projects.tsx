import styles from './Projects.module.css'
import { projects } from '../content/projects'

function TagList({ tags }: { tags: string[] }) {
  return (
    <p className={styles.tags}>
      {tags.map((tag, index) => (
        <span key={tag}>
          {index > 0 ? <span className={styles.tagSep} aria-hidden="true"> · </span> : null}
          {tag}
        </span>
      ))}
    </p>
  )
}

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
              aria-label={`${featured.title} on GitHub (opens in a new tab)`}
            >
              <div className={styles.featuredCopy}>
                <p className={styles.kicker}>Featured</p>
                <h3 className={styles.name}>{featured.title}</h3>
                <p className={styles.repo}>{featured.repo}</p>
                <p className={styles.blurb}>{featured.blurb}</p>
                <TagList tags={featured.tags} />
                <span className={styles.cta}>
                  View on GitHub
                  <span aria-hidden="true"> →</span>
                </span>
              </div>
              <div className={styles.featuredPanel} aria-hidden="true">
                <span className={styles.featuredMark}>01</span>
                <span className={styles.featuredLabel}>Flagship mobile system</span>
              </div>
            </a>

            <ul className={styles.grid}>
              {rest.map((project, index) => (
                <li key={project.id}>
                  <a
                    className={styles.card}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub (opens in a new tab)`}
                  >
                    <span className={styles.index} aria-hidden="true">
                      {String(index + 2).padStart(2, '0')}
                    </span>
                    <h3 className={styles.cardName}>{project.title}</h3>
                    <p className={styles.cardRepo}>{project.repo}</p>
                    <p className={styles.cardBlurb}>{project.blurb}</p>
                    <TagList tags={project.tags} />
                    <span className={styles.cta} aria-hidden="true">
                      View on GitHub →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}
