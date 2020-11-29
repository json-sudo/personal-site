import React, { useRef } from 'react'

import './scroll-to-top.styles.scss'

const ScrollToTopButton = ({ pageRef, pathToTop }) => {
    const scrollToTopRef = useRef(null)

    const toggleScrollToTop = () => {
        if(pageRef.current){
            if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
                scrollToTopRef.current.setAttribute('style', 'display: initial;')
            } else {
                scrollToTopRef.current.setAttribute('style', 'display: none;')
            }
        }
    }

    document.onscroll = () => toggleScrollToTop()

    return (
        <a
            href={pathToTop}
            ref={scrollToTopRef}
            className="scroll-to-top"
        >
            Go back to top
        </a>
    )
}

export default ScrollToTopButton
