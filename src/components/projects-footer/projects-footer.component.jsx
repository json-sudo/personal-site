import React from 'react'
import { Link } from 'react-router-dom'

import './projects-footer.styles.scss'

const ProjectsFooter = () => {
    return (
        <footer className="projects-footer">
            <Link to="/projects">View my other projects</Link>
        </footer>
    )
}

export default ProjectsFooter
