import { createContext } from 'react'

import type { AnimationsContextValue } from '../types/context'

const animationsAreOnContext = createContext<AnimationsContextValue>({
    animationsAreEnabled: { get: true, set: () => {} },
})

export default animationsAreOnContext
