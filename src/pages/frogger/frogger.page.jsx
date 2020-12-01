import React, { useRef } from 'react'
import CssIcon from '../../assets/svg/css.icon'
import GithubIcon from '../../assets/svg/github.icon'
import HtmlIcon from '../../assets/svg/html.icon'
import JavaScriptIcon from '../../assets/svg/javascript.icon'

import ProjectsFooter from '../../components/projects-footer/projects-footer.component'
import ScrollToTopButton from '../../components/scroll-to-top/scroll-to-top.component'

import './frogger.styles.scss'

const FroggerPage = () => {
    const froggerPageRef = useRef(null)

    return (
        <div ref={froggerPageRef} id="frogger-project-page" className="project-container">
            <ScrollToTopButton
                pathToTop="/projects/frogger#frogger-project-page"
                pageRef={froggerPageRef}
            />

            <h1>Frogger</h1>

            <section aria-describedby="drupex-description" className="project-intro">
                <p id="drupex-description">
                    Frogger is a classic arcade game that I remade as part of my
                    nanodegree coursework. The project was intended to test my understanding
                    of javascript at that point and I had fun making it my own way as well.
                </p>

                <div className="project-actions-container">
                    <div className="project-stack">
                        <h2>Project Stack</h2>

                        <div className="stack-item">
                            <HtmlIcon role="presentation" />
                            <span>HTML</span>
                        </div>

                        <div className="stack-item">
                            <CssIcon role="presentation" />
                            <span>CSS</span>
                        </div>

                        <div className="stack-item">
                            <JavaScriptIcon role="presentation" />
                            <span>JavaScript</span>
                        </div>

                        <div className="stack-item">
                            <GithubIcon id="frogger-stack-item" role="presentation" />
                            <span>Github Pages</span>
                        </div>
                    </div>

                    <div className="project-actions">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/jaym97/drupex"
                        >
                            Check out the code for this project here.
                        </a>

                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://jaym97.github.io/Frogger_Remake/"
                        >
                            View a live version here.
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FroggerPage
