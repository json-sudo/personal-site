import React, { useState } from 'react'

import DrawerNav from '../drawer/drawer.component'
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component'

import {DrawerContext} from '../../contexts/drawer.context'

import './header.styles.scss'

const Header = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const drawerState = {
        drawerIsOpen: { get: drawerIsOpen, set: setDrawerIsOpen }
    }

    return (
        <header className="header">
            <div className="stuff">kdfdk</div>

            <DrawerContext.Provider value={drawerState}>
                <HamburgerMenu />

                <DrawerNav />
            </DrawerContext.Provider>
        </header>
    )
}

export default Header
