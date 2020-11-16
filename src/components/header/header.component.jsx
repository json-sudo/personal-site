import React, { useState } from 'react'

import DrawerNav from '../drawer/drawer.component'
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component'

import LightThemeIcon from '../../assets/svg/light-theme.icon'

import {DrawerContext} from '../../contexts/drawer.context'

import './header.styles.scss'

const Header = ({ appDomElementRef }) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const drawerState = {
        drawerIsOpen: { get: drawerIsOpen, set: setDrawerIsOpen }
    }

    const changeTheme = elementRef => {
        console.log("click")
        elementRef.current.classList.toggle('dark-theme')
    }

    return (
        <header className="header">
            <div className="stuff">kdfdk</div>

            <DrawerContext.Provider value={drawerState}>
                <HamburgerMenu />

                <DrawerNav />
            </DrawerContext.Provider>

            <div className="theme-btn-wrapper">
                <LightThemeIcon
                    role="button"
                    title="Change the theme of this site"
                    focusable
                    clickHandler={() => changeTheme(appDomElementRef)}
                />
            </div>
        </header>
    )
}

export default Header
