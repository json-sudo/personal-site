import React, { useRef } from 'react'

import ProjectsFooter from '../../components/projects-footer/projects-footer.component'
import ScrollToTopButton from '../../components/scroll-to-top/scroll-to-top.component'

import PhpLogo from '../../assets/svg/php-logo.icon'
import ReactLogo from '../../assets/svg/react-logo.icon'
import SassLogo from '../../assets/svg/sass-logo.icon'

import './spod.styles.scss'

const SpodPage = () => {
    const spodPageRef = useRef(null)

    return (
        <div id="spod-project-page" ref={spodPageRef} className="project-container">
            <ScrollToTopButton
                pathToTop="/projects/spod#spod-project-page"
                pageRef={spodPageRef}
            />

            <h1>Spod Integrated</h1>

            <section aria-describedby="spod-description" className="project-intro">
                <p id="spod-description">
                    Spod Integrated is a private company based in the Port Harcourt, Nigeria.
                    I got the job of creating the company's site which would contain information
                    about their services, what they're about and how to contact them. You can also
                    request for a service directly from the site.
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
                            <PhpLogo role="presentation" />
                            <span>PHP</span>
                        </div>
                    </div>

                    <div className="project-actions">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/jaym97/spod-cleaning"
                        >
                            Check out the code for this project here.
                        </a>

                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://spodintegrated-nigerialimited.com"
                        >
                            View a live version here.
                        </a>
                    </div>
                </div>
            </section>

            <main className="project-description">
                <img
                    className="project-homepage-img"
                    id="spod-img"
                    src="https://res.cloudinary.com/dynamicjson/image/upload/v1605873645/spod-tablet-view_gwtknf.png"
                    alt="Screenshot of part of the Spod Integrated homepage on a tablet."
                />

                <section
                    className="project-region why-region"
                    aria-labelledby="spod-stack-why-heading"
                    aria-describedby="spod-stack-why-description"
                >
                    <h3 id="spod-stack-why-heading">Why I chose the stack I used</h3>

                    <p id="spod-stack-why-description">
                        This project is generally for informative purposes so a simple
                        SPA architecture like React with pages that loaded up almost instantly seemed like a good fit.
                        React's state management also made it easy to handle fetches and control behaviours reacting to any state changes.
                        The project is hosted with Hostgator as they had a hosting plan that covered emails which is the primary way to
                        contact the company from the site. I went with PHP to handle the email backend logic as the hosting plan
                        didn't cover Node.js for the backend.
                        <br /><br />
                        I personally prefer to use Scss for styling when I have to decide mostly because it feels like
                        vanilla CSS with a few super powers. Yes, yes I like vanilla CSS haha.
                    </p>

                </section>

                <section
                    className="project-region problems-region"
                    aria-labelledby="spod-problems-heading"
                    aria-describedby="spod-problems-description"
                >
                    <h3 id="spod-problems-heading">Problems I ran into.</h3>

                    <p id="spod-problems-description">
                        Figuring out the simplest way to handle email requests was easily the biggest challenge I had
                        because, initially, I hadn't realized that the Hostgator plan didn't cover Node.js code.
                        <br /><br />
                        So after a few hours wondering what I did wrong to get Express and nodemailer mad at me,
                        I found out I had to find a 'non-node' way to handle emails.
                        <br />
                        I didn't have much experience setting up
                        emails at the time so I wasn't hundred percent aware of all the options out there.
                        <br /><br />
                        I had to comb through articles to decide which was worth trying and was a good fit for my
                        situation. I eventually decided it would be simpler to just use PHP.
                        <br /><br />
                        React router's navigation in production was a minor issue I had to solve.
                        I found an article on how to deal with this if your site is hosted on a platform like
                        Hostgator {' '}
                        <a
                            href="https://medium.com/dev-genius/deploying-your-react-app-to-hostgator-quick-and-painless-9807cf939532"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here.
                        </a>
                    </p>
                </section>

                <div className="project-region project-screenshots">
                    <img
                        src="https://res.cloudinary.com/dynamicjson/image/upload/v1606149792/spod-home-laptop_fkygvd.png"
                        alt="Full-page screenshot of the homepage of the Spod Integrated site."
                    />

                    <div className="img-group">
                        <img
                            src="https://res.cloudinary.com/dynamicjson/image/upload/v1606149790/spod-cleaning-page_cz7ysf.png"
                            alt="Screenshot of the cleaning services page."
                        />

                        <img
                            src="https://res.cloudinary.com/dynamicjson/image/upload/v1606388128/spod-services_gcyhlb.png"
                            alt="Screenshot of services page."
                        />
                    </div>
                </div>

                <section
                    className="project-region learned-lessons"
                    aria-labelledby="spod-lessons-heading"
                    aria-describedby="spod-lessons-description"
                >
                    <h3 id="spod-lessons-heading">What I learned</h3>

                    <p id="spod-lessons-description">
                        This project helped me get used to hosting react projects on sites that
                        aren't built to host SPAs right off the bat. I learned more about
                        DNSs and got better working with custom emails.
                    </p>
                </section>
            </main>

            <ProjectsFooter />
        </div>
    )
}

export default SpodPage
