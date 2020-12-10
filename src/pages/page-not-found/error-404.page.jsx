import React from 'react'

import './error-404.styles.scss'

const Error404Page = () => {
    return (
        <div className="error-page-container">
            <h1>Sorry, the page you're looking for does not exist. <br />Try a different URL</h1>

            <img
                src="https://res.cloudinary.com/dynamicjson/image/upload/v1596897337/404-error_b0yvps.png"
                alt="Vector drawing of 404 error."
            />
        </div>
    )
}

export default Error404Page
