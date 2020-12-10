import React from 'react'
import { Link } from 'react-router-dom'

import './blog.styles.scss'

const BlogPage = () => {
    return (
        <div className="blog-container blog-page-container">
            <h1>My Blog posts</h1>

            <main>
                <article aria-labelledby="toptal-application-supplement" aria-describedby="toptal-post-description" className="blog-post-preview">
                    <h2 id="toptal-application-supplement">
                        <Link to="/blog/toptal-application">Toptal Application Supplement</Link>
                    </h2>

                    <p id="toptal-post-description">
                        I'm a creative frontend engineer with 3 years experience in web development.
                        I'm excited by this opportunity to join a team of talented individuals
                        and look forward to contributing to impressive solutions and learning along the way...
                    </p>
                </article>
            </main>
        </div>
    )
}

export default BlogPage
