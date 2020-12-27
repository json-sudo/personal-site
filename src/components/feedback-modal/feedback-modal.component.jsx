import React from 'react'
import { Transition } from 'react-transition-group'

import Backdrop from '../backdrop/backdrop.component'

import ErrorIcon from '../../assets/svg/error.icon'
import SuccessIcon from '../../assets/svg/success.icon'

import './feedback-modal.styles.scss'

const FeedbackModal = ({ flag, message, handleClick, isOpen }) => {

    return (
        <>
            {
                isOpen ? <Backdrop /> : ""
            }

            <Transition in={isOpen} timeout={300}>
                {
                    state => (
                        <dialog className={`feedback-modal feedback-modal-${state}`}>
                            <span onClick={() => {handleClick()}} role="button">&#10005;</span>

                            {
                                flag ?
                                <SuccessIcon /> :
                                <ErrorIcon />
                            }

                            <p className="feedback-msg">{message}</p>
                        </dialog>
                    )
                }
            </Transition>
        </>
    )
}

export default FeedbackModal