import type { SvgIconProps } from '../../types/svg-icon'

const CodeIcon = ({ themeColor = 'var(--p-accent-strong)' }: SvgIconProps) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 13.3333L18.3333 9.99996L15 6.66663" stroke={themeColor} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 6.66663L1.66666 9.99996L5 13.3333" stroke={themeColor} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.0833 3.33337L7.91666 16.6667" stroke={themeColor} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default CodeIcon
