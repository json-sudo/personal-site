import { useContext } from 'react'
import { config } from 'react-transition-group'
import { Link } from 'react-router-dom'

import GithubIcon from '../../assets/svg/github.icon'
import LinkedInIcon from '../../assets/svg/linkedin.icon'

import animationsAreOnContext from '../../contexts/animations.context'

import './site-footer.styles.scss'

const ANIMATIONS_TOGGLE_ID = 'site-footer-animations-toggle'

const SiteFooter = () => {
    const animationsContext = useContext(animationsAreOnContext)
    const animationsAreEnabled = animationsContext.animationsAreEnabled.get

    const toggleAnimations = () => {
        const next = !animationsAreEnabled

        animationsContext.animationsAreEnabled.set(next)
        document.body.classList.toggle('transitions-off', !next)
        config.disabled = !next
    }

    return (
        <footer className="site-footer">
            <div className="site-footer__brand">
                <p className="site-footer__name">Jason Omemu</p>
                <p className="site-footer__title">Senior Software Engineer</p>
                <p className="site-footer__tagline">
                    Building accessible, well-architected products end to end.
                </p>
            </div>

            <nav className="site-footer__nav" aria-label="Footer navigation">
                <p className="site-footer__nav-label">Navigation</p>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/contact-me">Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>

            <div className="site-footer__settings">
                <div className="site-footer__socials">
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

                <div className="site-footer__switch">
                    <input
                        id={ANIMATIONS_TOGGLE_ID}
                        type="checkbox"
                        checked={animationsAreEnabled}
                        onChange={toggleAnimations}
                    />
                    <label htmlFor={ANIMATIONS_TOGGLE_ID}>
                        <span>Animations {animationsAreEnabled ? 'on' : 'off'}</span>
                    </label>
                </div>
            </div>

            <div className="site-footer__copyright">
                <p>&copy; {new Date().getFullYear()} Jason Omemu.</p>
            </div>
        </footer>
    )
}

export default SiteFooter
