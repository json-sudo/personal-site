const STORAGE_KEY = 'theme'

export type Theme = 'light' | 'dark'

const THEME_COLORS: Record<Theme, string> = {
    light: '#F5F4EF',
    dark: '#0B1A1B',
}

export const applySystemThemeColorMeta = (): void => {
    const themeColorMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')

    if (themeColorMeta) {
        themeColorMeta.content = THEME_COLORS[getSystemTheme()]
    }
}

export const getSavedTheme = (): Theme | null => {
    const saved = localStorage.getItem(STORAGE_KEY)

    return saved === 'dark' || saved === 'light' ? saved : null
}

export const getSystemTheme = (): Theme => (
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
)

export const getResolvedTheme = (): Theme => getSavedTheme() ?? getSystemTheme()

export const applyThemeFromStorage = (): void => {
    const saved = getSavedTheme()

    if (saved) {
        document.documentElement.setAttribute('data-theme', saved)
    } else {
        document.documentElement.removeAttribute('data-theme')
    }

    applySystemThemeColorMeta()
}

export const setUserTheme = (theme: Theme): void => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
}

export const subscribeToSystemTheme = (callback: (theme: Theme) => void): (() => void) => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
        applySystemThemeColorMeta()

        if (!getSavedTheme()) {
            callback(media.matches ? 'dark' : 'light')
        }
    }

    media.addEventListener('change', handleChange)

    return () => media.removeEventListener('change', handleChange)
}
