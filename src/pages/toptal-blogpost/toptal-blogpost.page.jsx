import React from 'react'

import './toptal-blogpost.styles.scss'

const ToptalBlogpostPage = () => {
    return (
        <div className="blog-container">
            <h1>My Toptal Application Supplement</h1>

            <main aria-describedby="toptal-post-description">
                <p id="toptal-post-description">
                    I'm passionate about developing influential solutions with accessible code.
                    I'm thrilled at the chance to partner with Toptal as a React developer and
                    confident I can help out with upcoming projects with Toptal's clients.
                    I have experience working with a company on large projects
                    and freelancing as a frontend engineer.
                    <br /><br />
                    In my last role, I developed the frontend for the website of two national
                    project bids. I worked with the backend team to ensure the client-side made
                    correct calls to the apis and worked with the designer to replicate the design for
                    the site with accessible code and helped the react-native team with testing the mobile
                    application for the project. Additionally, I collaborated with the backend team bugs in an existing
                    project to help the team improve its UX and fix some issues with the web application.
                    <br /><br />
                    I feel Toptal would be a wonderful fit for my professional and personal interests
                    and a great opportunity to create performant, accessible and aesthetic solutions that
                    provide users with a satisfying and effective experience.
                    <br /><br />
                    I look forward to the chance to work with and learn from talented professionals
                    at Toptal and show how my experience can be beneficial.
                    <br /><br />
                    This post references <a href="https://www.toptal.com/react" target="_blank" rel="noopener noreferrer">this Toptal page.</a>
                </p>
            </main>
        </div>
    )
}

export default ToptalBlogpostPage
