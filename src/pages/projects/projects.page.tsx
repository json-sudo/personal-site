import ProjectCard from '../../components/project-card/project-card.component'
import { projects } from '../../data/projects'

import './projects.styles.scss'

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <header className="projects-page__header">
                <p className="section-label">Projects</p>
                <h1 className="projects-page__title">Selected projects.</h1>
            </header>

            <main className="projects-page__grid">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </main>
        </div>
    )
}

export default ProjectsPage
