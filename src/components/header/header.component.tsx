import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import DrawerNav from '../drawer/drawer.component'
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component'

import LightThemeIcon from '../../assets/svg/light-theme.icon'
import DarkThemeIcon from '../../assets/svg/dark-theme.icon'

import { DrawerContext } from '../../contexts/drawer.context'

import {
    applyThemeFromStorage,
    getResolvedTheme,
    setUserTheme,
    subscribeToSystemTheme,
    type Theme,
} from '../../utils/theme'

import type { DrawerContextValue } from '../../types/context'

import './header.styles.scss'

const Header = () => {
    const headerRef = useRef<HTMLElement>(null)
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)
    const [resolvedTheme, setResolvedTheme] = useState<Theme>(getResolvedTheme)
    const [isScrolled, setIsScrolled] = useState(false)

    const isDarkTheme = resolvedTheme === 'dark'

    const drawerState: DrawerContextValue = {
        drawerIsOpen: { get: drawerIsOpen, set: setDrawerIsOpen },
    }

    useEffect(() => {
        applyThemeFromStorage()

        return subscribeToSystemTheme(setResolvedTheme)
    }, [])

    const changeTheme = () => {
        const nextTheme: Theme = isDarkTheme ? 'light' : 'dark'

        setUserTheme(nextTheme)
        setResolvedTheme(nextTheme)
    }

    useEffect(() => {
        const headerEl = headerRef.current
        if (!headerEl) return

        const threshold = headerEl.offsetHeight * 1.08

        const handleScroll = () => {
            setIsScrolled(window.scrollY > threshold)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            ref={headerRef}
            className={`header${isScrolled ? ' header--scrolled' : ''}`}
        >
            <div className="header-wrapper">
                <div className="title-wrapper">
                    <span className="name">Jason Omemu</span>
                    <span className="job-title">Senior Software Engineer</span>
                </div>

                <div className="header-actions">
                    <nav className="header-nav">
                        <ul>
                            <li><Link to="/">About Me</Link></li>
                            {/* <li><Link to="/resume">Resume</Link></li> */}
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact-me">Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="theme-btn-wrapper">
                        {
                            isDarkTheme ?
                            <LightThemeIcon
                                role="button"
                                title="Switch to light mode"
                                focusable
                                clickHandler={changeTheme}
                            />
                            :
                            <DarkThemeIcon
                                role="button"
                                title="Switch to dark mode"
                                focusable
                                clickHandler={changeTheme}
                            />
                        }
                    </div>

                    <DrawerContext.Provider value={drawerState}>
                        <HamburgerMenu />

                        <DrawerNav />
                    </DrawerContext.Provider>

                </div>
            </div>
        </header>
    )
}

export default Header
