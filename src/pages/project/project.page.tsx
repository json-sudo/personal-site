import { Redirect, useParams } from 'react-router-dom'

import ProjectDetail from '../../components/project-detail/project-detail.component'
import { getProjectBySlug, projects } from '../../data/projects'

const ProjectPage = () => {
    const { slug } = useParams<{ slug: string }>()
    const project = slug ? getProjectBySlug(slug) : undefined

    if (!project) {
        return <Redirect to="/projects" />
    }

    const index = projects.findIndex((item) => item.slug === project.slug)
    const prev = index > 0 ? projects[index - 1] : null
    const next = index < projects.length - 1 ? projects[index + 1] : null

    return (
        <ProjectDetail
            project={project}
            prev={prev ? { slug: prev.slug, title: prev.title } : null}
            next={next ? { slug: next.slug, title: next.title } : null}
        />
    )
}

export default ProjectPage
