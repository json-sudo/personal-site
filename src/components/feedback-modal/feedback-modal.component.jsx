import React, { useState } from 'react'
import { Transition } from 'react-transition-group'

import Backdrop from '../backdrop/backdrop.component'

import ErrorIcon from '../../assets/svg/error.icon'
import SuccessIcon from '../../assets/svg/success.icon'

import './feedback-modal.styles.scss'

const FeedbackModal = ({ flag, message, handleClick }) => {
    const [modalIsOpen, setModalIsOpen] = useState(true)

    return (
        <>
            <Backdrop />

            <Transition in={modalIsOpen} timeout={300}>
                {
                    state => (
                        <dialog className={`feedback-modal feedback-modal-${state}`}>
                            <span onClick={() => {handleClick(); setModalIsOpen(false)}} role="button">&#10005;</span>

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