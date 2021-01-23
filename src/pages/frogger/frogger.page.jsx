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
                            Check out the repository.
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

            <main className="project-description">
                <img
                    id="frogger-img"
                    className="project-homepage-img"
                    src="https://res.cloudinary.com/dynamicjson/image/upload/v1606904947/frogger-mobile_tnswqc.png"
                    alt="Sceenshot of the frogger game about to the begin."
                />

                <section
                    className="project-region why-region"
                    aria-labelledby="frogger-stack-why-heading"
                    aria-describedby="frogger-stack-why-description"
                >
                    <h3 id="frogger-stack-why-heading">Why I chose the stack I used</h3>

                    <p id="frogger-stack-why-description">
                        Well, mostly, I had to. The project was designed to test how much I'd learned
                        about OOP (Object-Oriented Programming) concepts and not cooking up spaghetti code.
                        It was a lovely challenge at the time and I enjoyed taking it on.
                    </p>
                </section>

                <section
                    className="project-region problems-region"
                    aria-labelledby="frogger-problems-heading"
                    aria-describedby="frogger-problems-description"
                >
                    <h3 id="frogger-problems-heading">Problems I ran into.</h3>

                    <p id="frogger-problems-description">
                        My biggest challenge working on this project, which was more engaging than it was
                        frustrating thankfully, was figuring out how to listen for swipe movements
                        on touch screens. I found an article that helped with this and then I figured the rest from there.<br />
                        <br />
                        I had to spend time setting up speed levels for the bugs and sprite, setting up logic for
                        when felt natural to make the sprite collide with the bugs. I tried out different values and
                        eventually settled on what I felt was good enough.
                    </p>
                </section>

                <div className="project-region project-screenshots">
                    <div id="frogger-img-group" className="img-group">
                        <img
                            src="https://res.cloudinary.com/dynamicjson/image/upload/v1606907235/frogger-pick-character_n9wmdr.png"
                            alt="Screenshot of the patients request page for doctors."
                        />

                        <img
                            src="https://res.cloudinary.com/dynamicjson/image/upload/v1606908378/frogger-timed-mode_hrhklk.png"
                            alt="Full-page screenshot of the homepage of the frogger site."
                        />

                        <img
                            src="https://res.cloudinary.com/dynamicjson/image/upload/v1606908085/frogger-timed-mode_bktlzt.png"
                            alt="Screenshot of the patient request page."
                        />
                    </div>
                </div>

                <section
                    className="project-region learned-lessons"
                    aria-labelledby="frogger-lessons-heading"
                    aria-describedby="frogger-lessons-description"
                >
                    <h3 id="frogger-lessons-heading">What I learned and added to the project</h3>

                    <p id="frogger-lessons-description">
                        I learned how to listen for touch events. I had fun practising my ternary operators.
                        I also improved my research skills.
                        <br /><br />
                        I felt swiping was a more intuitive action while playing the game on mobile touch screens so
                        I felt I'd add that instead of putting buttons to work similarly to the keyboard listeners.
                        I also added a timed mode where you had two minutes to score as many points as you can. I also
                        tried to style the project in a unique way and ended up achieving that.
                    </p>
                </section>
            </main>

            <ProjectsFooter />
        </div>
    )
}

export default FroggerPage
