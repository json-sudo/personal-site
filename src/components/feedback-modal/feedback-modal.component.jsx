import React from 'react'

import Backdrop from '../backdrop/backdrop.component'

import ErrorIcon from '../../assets/svg/error.icon'
import SuccessIcon from '../../assets/svg/success.icon'

import './feedback-modal.styles.scss'

const FeedbackModal = ({ flag, message, handleClick }) => {
    return (
        <>
            <Backdrop />

            <dialog className="feedback-modal">
                <span onClick={handleClick} role="button">&#10005;</span>

                {
                    flag ?
                    <SuccessIcon /> :
                    <ErrorIcon />
                }

                <p className="feedback-msg">{message}</p>
            </dialog>
        </>
    )
}

export default FeedbackModal