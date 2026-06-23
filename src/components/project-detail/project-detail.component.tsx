import { Link } from 'react-router-dom'

import GithubIcon from '../../assets/svg/github.icon'
import GlobeIcon from '../../assets/svg/globe.icon'
import RightArrowIcon from '../../assets/svg/right-arrow.icon'

import type { Project, ProjectNavLink } from '../../types/project'

import './project-detail.styles.scss'

type ProjectDetailProps = {
    project: Project
    prev: ProjectNavLink | null
    next: ProjectNavLink | null
}

const ProjectDetail = ({ project, prev, next }: ProjectDetailProps) => {
    return (
        <div className="project-detail-page">
            <div className="project-detail-page__inner">
                <Link to="/projects" className="project-detail-page__back">
                    <RightArrowIcon strokeColor="currentColor" />
                    All projects
                </Link>

                <header className="project-detail-page__hero">
                    <p className="project-detail-page__year">{project.year}</p>
                    <h1 className="project-detail-page__title">{project.title}</h1>
                    <p className="project-detail-page__tagline">{project.tagline}</p>

                    <div className="project-detail-page__meta">
                        <div className="project-detail-page__stack">
                            <p className="project-detail-page__stack-label">Project stack</p>
                            <ul className="project-detail-page__stack-tags">
                                {project.stack.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="project-detail-page__actions">
                            {project.liveUrl ? (
                                <a
                                    className="project-detail-page__action project-detail-page__action--primary"
                                    href={project.liveUrl}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <GlobeIcon />
                                    Live demo
                                </a>
                            ) : null}

                            {project.githubUrl ? (
                                <a
                                    className="project-detail-page__action project-detail-page__action--secondary"
                                    href={project.githubUrl}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <GithubIcon title="View source on GitHub" />
                                    GitHub
                                </a>
                            ) : null}
                        </div>
                    </div>
                </header>

                <figure className="project-detail-page__figure">
                    <img src={project.image} alt={project.imageAlt} />
                </figure>

                <div className="project-detail-page__sections">
                    {project.sections.map((section, index) => (
                        <article
                            key={section.title}
                            className={`project-detail-page__section project-detail-page__section--${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <p className="project-detail-page__section-index">
                                {String(index + 1).padStart(2, '0')}
                            </p>
                            <h2 className="project-detail-page__section-title">{section.title}</h2>
                            <p className="project-detail-page__section-body">{section.body}</p>
                        </article>
                    ))}
                </div>

                <nav className="project-detail-page__nav" aria-label="Project navigation">
                    {prev ? (
                        <Link to={`/projects/${prev.slug}`} className="project-detail-page__nav-link">
                            <RightArrowIcon strokeColor="currentColor" />
                            {prev.title}
                        </Link>
                    ) : (
                        <span />
                    )}

                    <Link to="/projects" className="project-detail-page__nav-link project-detail-page__nav-link--center">
                        All projects
                    </Link>

                    {next ? (
                        <Link
                            to={`/projects/${next.slug}`}
                            className="project-detail-page__nav-link project-detail-page__nav-link--next"
                        >
                            {next.title}
                            <RightArrowIcon strokeColor="currentColor" />
                        </Link>
                    ) : (
                        <span />
                    )}
                </nav>
            </div>
        </div>
    )
}

export default ProjectDetail
