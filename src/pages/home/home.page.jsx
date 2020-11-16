import React from 'react'
import { Link } from 'react-router-dom'

import GithubIcon from '../../assets/svg/github.icon'
import LinkedInIcon from '../../assets/svg/linkedin.icon'
import TwitterIcon from '../../assets/svg/twitter.icon'

import './home.styles.scss'

const HomePage = () => {
    return (
        <div className="home-page-container">
            <div className="intro-container">
                <section className="intro-card greet">
                    <div className="pic-wrapper">
                        <img
                            src="https://res.cloudinary.com/dynamicjson/image/upload/v1605545162/IMG-1905_2_p3vo4c.jpg"
                            alt="Me, smiling and sitting on a chair."
                        />
                    </div>

                    <div className="intro-actions-container">
                        <Link>Resume</Link>
                        <Link>Projects</Link>
                    </div>

                    <div className="socials-container">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/jaym97"
                        >
                            <GithubIcon
                                title="Check out my repos on Github"
                            />
                        </a>

                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/jason-omemu/"
                        >
                            <LinkedInIcon
                                title="Connect with me on LinkedIn"
                            />
                        </a>

                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://twitter.com/jason_omemu"
                        >
                            <TwitterIcon
                                title="Visit my Twitter profile"
                            />
                        </a>
                    </div>
                </section>
            </div>

            <main className="about-me-container">
                <h1 className="page-title">Hi There</h1>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet modi perferendis odit quam corporis laborum maiores ipsa optio debitis provident nihil et, error eveniet beatae minus culpa similique dolor fugiat.</p>
            </main>
        </div>
    )
}

export default HomePage
