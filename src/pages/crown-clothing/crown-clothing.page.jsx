import React, { useRef } from 'react'

import ProjectsFooter from '../../components/projects-footer/projects-footer.component'
import ScrollToTopButton from '../../components/scroll-to-top/scroll-to-top.component'

import FirebaseIcon from '../../assets/svg/firebase.icon'
import NetlifyIcon from '../../assets/svg/netlify.icon'
import NodejsIcon from '../../assets/svg/nodejs.icon'
import ReactLogo from '../../assets/svg/react-logo.icon'
import ReduxIcon from '../../assets/svg/redux.icon'
import SassLogo from '../../assets/svg/sass-logo.icon'
import StripeIcon from '../../assets/svg/stripe.icon'
import StyledComponentsIcon from '../../assets/img/styled-components.png'

import './crown-clothing.styles.scss'

const CrownClothingPage = () => {
    const crwnClothingPageRef = useRef(null)

    return (
        <div ref={crwnClothingPageRef} id="crwn-clothing-page" className="project-container">
            <ScrollToTopButton
                pathToTop="/projects/crown-clothing#crwn-clothing-page"
                pageRef={crwnClothingPageRef}
            />

            <h1>Crown Clothing Inc.</h1>

            <section aria-describedby="crwn-clothing-description" className="project-intro">
                <p id="crwn-clothing-description">
                    Crown CLothing Inc. is a fictional company used by
                    <a
                        href="https://twitter.com/AndreiNeagoie"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {' '}Andrei Neagoie{' '}
                    </a>

                    and {' '}

                    <a
                        href="https://twitter.com/slingingkeys?"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Yihua Zhang{' '}
                    </a>

                    in their{' '}

                    <a
                        href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ZTM course{' '}
                    </a>

                    - Complete React Developer in 2020.
                </p>

                <div className="project-actions-container">
                    <div className="project-stack crwn-stack">
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
                            <StripeIcon role="presentation" />
                            <span>Stripe</span>
                        </div>

                        <div className="stack-item">
                            <ReduxIcon role="presentation" />
                            <span>Redux</span>
                        </div>

                        <div className="stack-item">
                            <NodejsIcon role="presentation" />
                            <span>Express.js</span>
                        </div>

                        <div className="stack-item">
                            <NetlifyIcon role="presentation" />
                            <span>Netlify</span>
                        </div>

                        <div className="stack-item">
                            <img role="presentation" src={StyledComponentsIcon} alt="Styled components logo."/>
                            <span>Styled Components</span>
                        </div>
                    </div>

                    <div className="project-actions">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/jaym97/crown-clothing"
                        >
                            Check out the code for this project here.
                        </a>

                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://jays-crown-clothing.netlify.app/"
                        >
                            View the site live here.
                        </a>
                    </div>
                </div>
            </section>

            <main className="project-description crwn-description">
                <img
                    className="project-homepage-img"
                    id="crwn-img"
                    src="https://res.cloudinary.com/dynamicjson/image/upload/v1605873644/Crwn-clothing_swf25t.png"
                    alt="Screenshot of part of the Crown Clothing app homepage."
                />

                <section
                    className="project-region why-region"
                    aria-labelledby="crown-stack-why-heading"
                    aria-describedby="crown-stack-why-description"
                >
                    <h3 id="crown-stack-why-heading">Why I chose the stack I used</h3>

                    <p id="crown-stack-why-description">
                        The course covers everything state management from hooks, context api, graphql,
                        and more. After spending time with each one, I decided to leave the ones
                        I felt most comfortable with in the codebase - like a get-together of state management
                        tools of some sort. I used redux, without sagas, context api and hooks. Some functionality,
                        like signing in the user if it's the same visitor to the app, would be most efficiently handled
                        with a lifecycle method. So a class-based component was used for this.
                        <br /><br />
                    </p>

                </section>

                <section
                    className="project-region problems-region"
                    aria-labelledby="crown-problems-heading"
                    aria-describedby="crown-problems-description"
                >
                    <h3 id="crown-problems-heading">Problems I ran into.</h3>

                    <p id="crown-problems-description">
                        The client code of this project was separated into a different folder
                        with the server at the root. So for a little while I had trouble
                        setting up the build command on netlify. Again, I had to figure out
                        how to handle react routing on production but for netlify this time.
                        I found an article {' '}
                        <a
                            href="https://dev.to/easybuoy/deploying-react-app-from-github-to-netlify-3a9j"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </a>
                        {' '} that helped with this. I needed a netlify.toml file as explained in the netlify docs
                        as well.
                    </p>
                </section>

                <div className="project-region project-screenshots">
                    <img
                        id="crwn-screenshot"
                        src="https://res.cloudinary.com/dynamicjson/image/upload/v1606661778/crwn-shop-page_gy8ktd.png"
                        alt="Full-page screenshot of the shop page of the crown clothing web app."
                    />

                    <div className="img-group">
                        <img
                            src="https://res.cloudinary.com/dynamicjson/image/upload/v1606665871/crwn-clothing-mobile2_egcb7k.png"
                            alt="Screenshot of cart items on a mobile screen. A brown brim, a blue beanie and a brown shearling have been added to the cart."
                        />

                        <img
                            src="https://res.cloudinary.com/dynamicjson/image/upload/v1606663602/crwn-checkout-page_se57uv.png"
                            alt="Screenshot of the checkout page."
                        />
                    </div>
                </div>

                <section
                    className="project-region learned-lessons"
                    aria-labelledby="crown-lessons-heading"
                    aria-describedby="crown-lessons-description"
                >
                    <h3 id="crown-lessons-heading">What I learned and plan to add</h3>

                    <p id="crown-lessons-description">
                        This project helped me learn a lot of state management tools that can be used with
                        react. I, more importantly, learned when each would be more useful than the other
                        as with all programming tools really.
                        <br /><br />
                        To make the project a little less generic, I styled it my own way, brought in a
                        little color scheme and separated the sign in and sign up pages. I also worked a
                        lot on the app's accessibility and plan to add a few more features and improvements
                        like a means for the user to see a record of everything they've 'ordered' on the app
                        to further improve the project's semblance to something in the real world and improve
                        the contact page's content.
                    </p>
                </section>
            </main>

            <ProjectsFooter />
        </div>
    )
}

export default CrownClothingPage
