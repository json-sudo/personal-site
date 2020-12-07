import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Transition } from 'react-transition-group'

import Backdrop from '../backdrop/backdrop.component'

import {DrawerContext} from '../../contexts/drawer.context'

import './drawer.styles.scss'

const DrawerNav = () => {
    const drawerContext = useContext(DrawerContext),
          drawerIsOpen = drawerContext.drawerIsOpen.get;

    const closeDrawer = () => drawerContext.drawerIsOpen.set(!drawerIsOpen)

    let backdrop;

    backdrop = drawerIsOpen ? <Backdrop clickHandler={closeDrawer} /> : ''

    return (
        <>
            {backdrop}

            <Transition in={drawerIsOpen} timeout={300}>
                {
                    state => (
                        <div className={`drawer-container drawer-container-${state}`}>
                            <header className="drawer-header">
                                <button
                                    className="close-btn"
                                    aria-label="Close navigation drawer"
                                    onClick={() => closeDrawer()}
                                >
                                    &times;
                                </button>
                            </header>

                            <nav>
                                <ul className="drawer-nav">
                                    <li onClick={() => closeDrawer()}><Link to="/">About Me</Link></li>
                                    <li onClick={() => closeDrawer()}><Link to="/resume">CV/Resume</Link></li>
                                    <li onClick={() => closeDrawer()}><Link to="/projects">Projects</Link></li>
                                    <li onClick={() => closeDrawer()}><Link to="/contact-me">Leave a Message</Link></li>
                                </ul>
                            </nav>
                        </div>
                    )
                }
            </Transition>
        </>
    )
}

export default DrawerNav
