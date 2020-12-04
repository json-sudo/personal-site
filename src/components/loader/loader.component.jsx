import React from 'react'

import Backdrop from '../backdrop/backdrop.component'

import './loader.styles.scss'

const LoaderComponent = ({ loading }) => {
    return (
        <>
            {
                loading ?
                <Backdrop /> :
                ''
            }

            <div className={`loader-container ${loading ? '' : 'inactive'}`}>
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
                <span className="bar bar5"></span>
            </div>
        </>
    )
}

export default LoaderComponent
