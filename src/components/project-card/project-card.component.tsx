import { Link } from 'react-router-dom'

import type { Project } from '../../types/project'

import './project-card.styles.scss'

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <article className="project-card">
            <Link to={`/projects/${project.slug}`} className="project-card__media" aria-hidden="true" tabIndex={-1}>
                <img src={project.image} alt="" />
            </Link>

            <div className="project-card__body">
                <p className="project-card__year">{project.year}</p>

                <h2 className="project-card__title">
                    <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                </h2>

                <p className="project-card__tagline">{project.tagline}</p>
                <p className="project-card__summary">{project.summary}</p>

                <ul className="project-card__tags" aria-label={`${project.title} tech stack`}>
                    {project.cardTags.map((tag, index) => (
                        <li key={`${tag}-${index}`}>{tag}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ProjectCard
