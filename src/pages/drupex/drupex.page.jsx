import React, { useRef } from 'react'

import ProjectsFooter from '../../components/projects-footer/projects-footer.component'
import ScrollToTopButton from '../../components/scroll-to-top/scroll-to-top.component'

import FirebaseIcon from '../../assets/svg/firebase.icon'
import NetlifyIcon from '../../assets/svg/netlify.icon'
import ReactLogo from '../../assets/svg/react-logo.icon'
import ReduxIcon from '../../assets/svg/redux.icon'
import SassLogo from '../../assets/svg/sass-logo.icon'

import '../spod/spod.styles.scss'
import './drupex.styles.scss'

const DrupexPage = () => {
    const drupexPageRef = useRef(null)

    return (
        <div ref={drupexPageRef} id="drupex-project-page" className="project-container">
            <ScrollToTopButton
                pathToTop="/projects/drupex#drupex-project-page"
                pageRef={drupexPageRef}
            />

            <h1>Drupex</h1>

            <section aria-describedby="drupex-description" className="project-intro">
                <p id="drupex-description">
                    Drupex is the drug prescription application for a fictional
                    company. The application is a solution for a research project
                    that investigates the effects of prescription errors on patients.
                    I worked with my university professor and his student on the research
                    and took machine learning and data science courses in the process.
                </p>

                <div className="project-actions-container">
                    <div className="project-stack">
                        <h2>Project Stack</h2>

                        <div className="stack-item">
                            <ReactLogo role="presentation" />
                            <span>React</span>
                        </div>

                        <div className="stack-item">
                            <SassLogo role="presentation" />
                            <span>Sass</span>
                        </div>

                        <div className="stack-item">
                            <FirebaseIcon role="presentation" />
                            <span>Firebase</span>
                        </div>

                        <div className="stack-item">
                            <ReduxIcon role="presentation" />
                            <span>Redux</span>
                        </div>

                        <div className="stack-item">
                            <NetlifyIcon role="presentation" />
                            <span>Netlify</span>
                        </div>
                    </div>

                    <div className="project-actions">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/json-sudo/drupex"
                        >
                            Check out the repository.
                        </a>

                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://drupex.netlify.app/"
                        >
                            View a live version here.
                        </a>
                    </div>
                </div>
            </section>

            <main className="project-description">
                <img
                    className="project-homepage-img"
                    src="https://res.cloudinary.com/dynamicjson/image/upload/v1606753113/drupex-patient-home_nhjsb0.png"
                    alt="Screenshot of the patients page."
                />

                <section
                    className="project-region why-region"
                    aria-labelledby="drupex-stack-why-heading"
                    aria-describedby="drupex-stack-why-description"
                >
                    <h3 id="drupex-stack-why-heading">Why I chose the stack I used</h3>

                    <p id="drupex-stack-why-description">
                        React once again was a good choice for the frontend of this project. I went with
                        Firebase for the server side as it was easier for me to integrate with the client-side
                        and quickly set up authentication. I also wasn't very good with Express and Mongodb at
                        the time which would have been a good alternative so Firebase won the tussle with less
                        headache as its main premise haha.
                    </p>
                </section>

                <section
                    className="project-region problems-region"
                    aria-labelledby="drupex-problems-heading"
                    aria-describedby="drupex-problems-description"
                >
                    <h3 id="drupex-problems-heading">Problems I ran into.</h3>

                    <p id="drupex-problems-description">
                        The main issue I faced while developing this application was trying to find
                        the firebase command to only display patient requests assigned to the doctor
                        that is logged in. With the way my collections are set up and firebase works,
                        it's simply not possible to do this at the time of writing. I plan to revisit
                        the problem and find a suitable workaround.
                    </p>
                </section>

                <div className="project-region project-screenshots">
                    <img
                        id="drupex-screenshot"
                        src="https://res.cloudinary.com/dynamicjson/image/upload/v1606762574/drupex-home_mlpzg8.png"
                        alt="Full-page screenshot of the homepage of the drupex site."
                    />

                    <div id="drupex-img-group" className="img-group">
                        <img
                            src="https://res.cloudinary.com/dynamicjson/image/upload/v1606765379/drupex-doctors_z50wpg.png"
                            alt="Screenshot of the patients request page for doctors."
                        />

                        <img
                            src="https://res.cloudinary.com/dynamicjson/image/upload/v1606765882/drupex-patient-request_gytjrf.png"
                            alt="Screenshot of the patient request page."
                        />
                    </div>
                </div>

                <section
                    className="project-region learned-lessons"
                    aria-labelledby="drupex-lessons-heading"
                    aria-describedby="drupex-lessons-description"
                >
                    <h3 id="drupex-lessons-heading">What I learned and plan to add</h3>

                    <p id="drupex-lessons-description">
                        Apart from the dangers of wrong prescriptions, I learned a lot about
                        machine learning and data science. I got better with firebase functions
                        and setting up interactions between collections.
                        <br /><br />
                        I plan to eventually learn enough python and tensorflow to add the
                        prescription AI to the project and make general improvements to the code and UI.

                    </p>
                </section>
            </main>

            <ProjectsFooter />
        </div>
    )
}

export default DrupexPage
