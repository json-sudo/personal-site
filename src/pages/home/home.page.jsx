import React, {useState, useRef} from 'react'
import { config } from 'react-transition-group'
import cloudinary from 'cloudinary-core'
import { Link } from 'react-router-dom'

import CustomButton from '../../components/custom-button/custom-button.component'
import FeedbackModal from '../../components/feedback-modal/feedback-modal.component'

import GithubIcon from '../../assets/svg/github.icon'
import LinkedInIcon from '../../assets/svg/linkedin.icon'
import TwitterIcon from '../../assets/svg/twitter.icon'

import './home.styles.scss'

const cl = cloudinary.Cloudinary.new({ cloud_name: 'dynamicjson' })

const HomePage = () => {
    cl.responsive()

    const [animationsAreEnabled, setanimationsAreEnabled] = useState(true),
          [feedbackIsOpen, setFeedbackIsOpen] = useState(false);

    const introCardRef = useRef(null)

    const toggleAnimations = () => {
        setanimationsAreEnabled(!animationsAreEnabled)

        introCardRef.current.classList.toggle('greet')
        introCardRef.current.classList.toggle('intro-card-animation-off')

        config.disabled = animationsAreEnabled

        setFeedbackIsOpen(true)

        setTimeout(() => setFeedbackIsOpen(false), 2500)
    }

    const closeFeedback = () => {
        setFeedbackIsOpen(false)
    }

    return (
        <div className="home-page-container">
            <main ref={introCardRef} className="intro-card greet">
                <div className="pic-wrapper intro-item">
                    <img
                        src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1605545162/IMG-1905_2_p3vo4c.jpg"
                        alt="Me, smiling and sitting on a chair."
                    />

                    <div className="intro-actions-container">
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                    </div>
                </div>

                <div className="about-container intro-item">
                    <h1 className="page-title">Hi, I'm <span className="highlight">Jason.</span></h1>

                    <p>
                        I'm passionate about building things and solving problems with accessible code.
                        <br /><br />
                        I've been interested in tech since I was about 14 years old.
                        Some years later, I decided to go with coding full time and in 2018, I was part
                        of some selected Africans for Google's Udacity scholarship program
                        in partnership with Andela under the web development track. Since then, I've
                        been coding for the web. I'm currently seeking a full-time role where I can help a
                        firm reach their goals and learn a lot from other staff as well.
                        <br /><br />
                        Outside tech, I love to spend time learning about cultures and languages and I'm sort of a poor
                        man's polyglot but I aim to finally get to B2 level in some languages in the coming months.
                        I absolutely love good music and can't believe the talent of some peeople at times. I'm a huge
                        football (soccer) fan and very much enjoy its tactical and analytical parts.
                    </p>
                </div>



                <div className="socials-container intro-item">
                    <div className="socials-wrapper">
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
                </div>
            </main>

            <div className="decor" />

            <div className="other-items-container">
                <CustomButton onClick={toggleAnimations}>Turn {animationsAreEnabled ? 'off' : 'on'} all animations</CustomButton>

                <Link to="/credits">View attribution for icons used on this site.</Link>
            </div>

            {
                feedbackIsOpen ?
                <FeedbackModal
                    flag={true}
                    message={animationsAreEnabled ? 'All animations are now turned back on...Do carry on 🙂.' : 'All animations have been turned off...As you were 🙂.'}
                    handleClick={closeFeedback}
                /> :
                ''
            }
        </div>
    )
}

export default HomePage

TODO // fix turning off transition property anmation not working and animations coming back on other pages.