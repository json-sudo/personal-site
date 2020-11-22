import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import DrawerNav from '../drawer/drawer.component'
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component'

import LightThemeIcon from '../../assets/svg/light-theme.icon'
import DarkThemeIcon from '../../assets/svg/dark-theme.icon'

import {DrawerContext} from '../../contexts/drawer.context'

import './header.styles.scss'

const Header = ({ appDomElementRef }) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const [darkTheme, setDarkTheme] = useState(false)

    const drawerState = {
        drawerIsOpen: { get: drawerIsOpen, set: setDrawerIsOpen }
    }

    const changeTheme = elementRef => {
        setDarkTheme(!darkTheme)

        elementRef.current.classList.toggle('dark-theme')
    }

    const mainHeaderRef = useRef(null)

    const toggleShadow = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            mainHeaderRef.current.classList.toggle('shadow')
        } else {
            mainHeaderRef.current.classList.toggle('shadow')
        }
    }

    document.onscroll = () => toggleShadow()

    return (
        <header ref={mainHeaderRef} className="header">
            <div className="title-wrapper">
                <span className="name">Jason Omemu</span>
                <span className="job-title">Frontend Engineer</span>
            </div>

            <div className="header-actions">
                <nav className="header-nav">
                    <ul>
                        <li><Link to="/">About Me</Link></li>
                        <li><Link to="/resume">CV/Resume</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact-me">Contact</Link></li>
                    </ul>
                </nav>

                <div className="theme-btn-wrapper">
                    {
                        darkTheme ?
                        <DarkThemeIcon
                            role="button"
                            title="Change the theme of this site"
                            focusable
                            clickHandler={() => changeTheme(appDomElementRef)}
                        />
                        :
                        <LightThemeIcon
                            role="button"
                            title="Change the theme of this site"
                            focusable
                            clickHandler={() => changeTheme(appDomElementRef)}
                        />
                    }
                </div>

                <DrawerContext.Provider value={drawerState}>
                    <HamburgerMenu />

                    <DrawerNav />
                </DrawerContext.Provider>

            </div>
        </header>
    )
}

export default Header
