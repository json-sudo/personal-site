import React, { useContext } from 'react'

import {DrawerContext} from '../../contexts/drawer.context'

import './hamburger-menu.styles.scss'

const HamburgerMenu = () => {
    const drawerContext = useContext(DrawerContext),
          drawerIsOpen = drawerContext.drawerIsOpen.get;

    return (
        <button className="hamburger-menu" onClick={() => drawerContext.drawerIsOpen.set(!drawerIsOpen)}>
            <span className="burger-line line1" />
            <span className="burger-line line2" />
            <span className="burger-line line3" />

            <span className="visually-hidden">Open the site's navigation links.</span>
        </button>
    )
}

export default HamburgerMenu