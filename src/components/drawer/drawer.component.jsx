import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'

import {DrawerContext} from '../../contexts/drawer.context'

import './drawer.styles.scss'

const DrawerNav = () => {
    const drawerContext = useContext(DrawerContext),
          drawerIsOpen = drawerContext.drawerIsOpen.get;

    // const closeDrawer = () => drawerContext.drawerIsOpen.set(!drawerIsOpen)
    return (
        <div className={`drawer-container ${drawerIsOpen ? 'open' : ''}`}>

        </div>
    )
}

export default DrawerNav
