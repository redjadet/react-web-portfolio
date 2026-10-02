import styles from './Projects.module.css'
import { projects, openSourceProjects } from '../content/projects'
import { ExternalLink } from './ExternalLink'
import { Arrow } from './Arrow'
export function Projects() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="shell">
        <h2 id="work-title" className="section__title">
          Selected work
        </h2>
        <p className="section__lead">
          Public projects that show how I design, build and verify software.
        </p>
        <ol className={styles.projects}>
          {projects.map((project, index) => (
            <li key={project.id} className={styles.project}>
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={styles.copy}>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.blurb}</p>
                <p className={styles.tags}>{project.tags.join(' · ')}</p>
                <div className={styles.links}>
                  {project.links.map((link) => (
                    <ExternalLink
                      key={link.href}
                      href={link.href}
                      className="text-link"
                      label={project.title + ': ' + link.label}
                    >
                      {link.label}
                      <Arrow />
                    </ExternalLink>
                  ))}
                </div>
              </div>
              <ul className={styles.evidence}>
                {project.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <h3 className={styles.moreTitle}>More open-source work</h3>
        <ul className={styles.more}>
          {openSourceProjects.map((project) => (
            <li key={project.id}>
              <h4>{project.title}</h4>
              <p>{project.blurb}</p>
              <ExternalLink
                href={project.href}
                className="text-link"
                label={project.title + ': View source'}
              >
                View source
                <Arrow />
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
