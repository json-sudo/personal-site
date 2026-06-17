export type StateAccessor<T> = {
    get: T
    set: (value: T) => void
}

export type AnimationsContextValue = {
    animationsAreEnabled: StateAccessor<boolean>
}

export type DrawerContextValue = {
    drawerIsOpen: StateAccessor<boolean>
}
