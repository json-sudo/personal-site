import React, { useEffect } from 'react'
import cloudinary from 'cloudinary-core'
import { Link } from 'react-router-dom'

import DownloadIcon from '../../assets/svg/download.icon'
import GithubIcon from '../../assets/svg/github.icon'
import LinkedInIcon from '../../assets/svg/linkedin.icon'
import RightArrowIcon from '../../assets/svg/right-arrow.icon'

import './home.styles.scss'

const cl = cloudinary.Cloudinary.new({ cloud_name: 'dynamicjson' })

const HomePage = () => {
    useEffect(() => {
        cl.responsive()
    }, [])

    return (
        <div className="home-page-container">
            <main className="home-page">
                <section className="hero">
                    <div className="hero__bg-glow" aria-hidden="true" />

                    <div className="hero__content">
                        <h1 className="hero__title">
                            Hi, I'm <span className="highlight">Jason.</span>
                        </h1>

                        <p className="hero__description">
                        I'm a Senior full-stack software engineer building accessible, well-architected products end to end.
                        </p>

                        <div className="hero__actions">
                            <Link to="/resume"><DownloadIcon />Resume</Link>
                            <Link to="/projects"><RightArrowIcon />Projects</Link>
                        </div>

                        <div className="hero__socials">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/json-sudo"
                            >
                                <GithubIcon title="Check out my repos on Github" />
                            </a>

                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/jason-omemu/"
                            >
                                <LinkedInIcon title="Connect with me on LinkedIn" />
                            </a>
                        </div>
                    </div>

                    <aside className="hero__profile-card">
                        <div className="hero__profile-media">
                            <div className="hero__profile-glow">
                                <div className="hero__profile-image-container">
                                    <img
                                        src="https://res.cloudinary.com/dynamicjson/image/upload/v1781626392/IMG_1337_2-removebg-preview_v3gmkb.png"
                                        alt="Profile photo of me"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="hero__profile-info">
                            <p className="hero__profile-name">Jason Omemu</p>
                            <p className="hero__profile-title">
                                Senior Software Engineer @OnTheGoSystems
                            </p>
                        </div>

                        <ul className="hero__skill-tags" aria-label="Core skills">
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>C#</li>
                            <li>Systems Design</li>
                            <li>A11y</li>
                        </ul>
                    </aside>
                </section>

                <section className="about" id="about">
                    <div className="about__heading">
                        <p className="section-label">About me</p>
                        <h2 className="about__title">Building products people rely on.</h2>
                    </div>

                    <div className="about__body">
                        <p>
                            I've been interested in tech since I was about 14 years old.
                            Some years later, I decided to go with coding full time and in 2018, I was part
                            of some selected Africans for Google's Udacity scholarship program
                            in partnership with Andela under the web development track. Since then, I've
                            been engineering software for the web.
                        </p>

                        <p>
                            Today, I work across the stack with React, TypeScript, Node.js, Python, C# and .NET and lead delivery for SaaS products used by customers worldwide.
                            I deploy on Azure and AWS with serverless functions, CI/CD pipelines, Terraform and Kubernetes.
                        </p>

                        <p>
                            Outside tech, I love to spend time learning about cultures and languages. I'm sort of a poor
                            man's polyglot and love spending some of my free time learning bits and pieces of new languages.
                            I absolutely love good music and can't believe the talent of some people at times. I'm a huge
                            football (soccer) fan and very much enjoy its tactical and analytical parts.
                        </p>

                        <Link to="/projects" className="about__link"><RightArrowIcon />See my work</Link>
                    </div>
                </section>

                <section className="skills" id="skills">
                    <header className="skills__header">
                        <p className="section-label">Skills</p>
                        <h2 className="skills__title">Across the stack.</h2>
                        <p className="skills__description">
                            From UI to infrastructure: the tools I currently reach for most often.
                        </p>
                    </header>

                    <div className="skills__grid">
                        <article className="skills__card">
                            <h3 className="skills__card-title">Frontend</h3>
                            <ul className="skills__tags">
                                <li>React</li>
                                <li>Jest</li>
                                <li>TypeScript</li>
                                <li>JavaScript</li>
                                <li>SCSS</li>
                                <li>Playwright</li>
                                <li>Cypress</li>
                                <li>Vite</li>
                                <li>Accessibility</li>
                            </ul>
                        </article>

                        <article className="skills__card">
                            <h3 className="skills__card-title">Backend</h3>
                            <ul className="skills__tags">
                                <li>Node.js</li>
                                <li>Python</li>
                                <li>C#/.NET</li>
                                <li>PostgreSQL</li>
                                <li>GraphQL</li>
                                <li>SQL</li>
                                <li>REST APIs</li>
                                <li>API Design</li>
                                <li>Authentication</li>
                            </ul>
                        </article>

                        <article className="skills__card">
                            <h3 className="skills__card-title">Cloud & DevOps</h3>
                            <ul className="skills__tags">
                                <li>Docker</li>
                                <li>CI/CD</li>
                                <li>AWS</li>
                                <li>Git</li>
                                <li>Azure</li>
                                <li>Terraform</li>
                                <li>Kubernetes</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <section className="projects-cta" id="projects">
                    <p className="section-label">Projects</p>
                    <h2 className="projects-cta__title">Selected work.</h2>
                    <Link to="/projects" className="projects-cta__link"><RightArrowIcon />View all projects</Link>
                </section>
            </main>
        </div>
    )
}

export default HomePage
