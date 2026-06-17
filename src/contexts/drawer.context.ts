import { createContext } from 'react'

import type { DrawerContextValue } from '../types/context'

export const DrawerContext = createContext<DrawerContextValue>({
    drawerIsOpen: { get: false, set: () => {} },
})
