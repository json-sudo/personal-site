import React from 'react'
import { Link } from 'react-router-dom'

import './projects.styles.scss'

const ProjectsPage = () => {
    return (
        <div className="projects-page-container">
            <h1 className="projects-heading">What I've been working on</h1>

            <main className="projects">
                <section
                    className="project"
                    aria-labelledby="spod-project"
                    aria-describedby="spod-description"
                >
                    <div className="project-images">
                        <Link to="/projects/spod">
                            <img
                                src="https://res.cloudinary.com/dynamicjson/image/upload/v1605890491/spod-images_kvmeyx.png"
                                alt="Screenshots of the Spod Integrated homepage on mobile, tablet and laptop"
                            />
                        </Link>
                    </div>

                    <div className="project-description">
                        <h2 id="spod-project">Spod Integrated</h2>

                        <p id="spod-description">
                            A website for a company that deals in commercial cleaning, chemical sales and equipment leasing.

                            <Link to="/projects/spod">View Project &#8594;</Link>
                        </p>
                    </div>
                </section>

                <section
                    className="project"
                    aria-labelledby="crown-clothing-project"
                    aria-describedby="crown-clothing-description"
                >
                    <div className="project-images">
                        <Link aria-hidden="true" to="/projects/crown-clothing">
                            <img
                                src="https://res.cloudinary.com/dynamicjson/image/upload/v1605892299/crwn-clothing-images_utb3vv.png"
                                alt=""
                            />
                        </Link>
                    </div>

                    <div className="project-description">
                        <h2 id="crown-clothing-project">Crown Clothing Inc.</h2>

                        <p id="crown-clothing-description">
                            An e-commerce application built with React & Firebase for a
                            fictional clothing company.
                            <Link to="/projects/crown-clothing">View Project &#8594;</Link>
                        </p>
                    </div>
                </section>

                <section
                    className="project"
                    aria-labelledby="drupex-project"
                    aria-describedby="drupex-description"
                >
                    <div className="project-images">
                        <Link to="/projects/drupex">
                            <img
                                src="https://res.cloudinary.com/dynamicjson/image/upload/v1605896958/drupex-images_xsbv7x.png"
                                alt=""
                            />
                        </Link>
                    </div>

                    <div className="project-description">
                        <h2 id="drupex-project">Drupex</h2>

                        <p id="drupex-description">
                            A drug prescription application that uses machine learning to
                            ensure prescriptions are safe and correct for the patient.

                            <Link to="/projects/drupex">View Project &#8594;</Link>
                        </p>
                    </div>
                </section>

                <section
                    className="project"
                    aria-labelledby="drupex-project"
                    aria-describedby="drupex-description"
                >
                    <div className="project-images">
                        <Link to="/projects/drupex">
                            <img
                                src="https://res.cloudinary.com/dynamicjson/image/upload/v1605896958/drupex-images_xsbv7x.png"
                                alt=""
                            />
                        </Link>
                    </div>

                    <div className="project-description">
                        <h2 id="drupex-project">Frogger, The Remake</h2>

                        <p id="drupex-description">
                            A drug prescription application that uses machine learning to
                            ensure prescriptions are safe and correct for the patient.

                            <Link to="/projects/frogger">View Project &#8594;</Link>
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ProjectsPage
