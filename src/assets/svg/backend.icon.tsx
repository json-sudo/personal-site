import type { SvgIconProps } from '../../types/svg-icon'

const BackendIcon = ({ themeColor = 'var(--p-accent-strong)' }: SvgIconProps) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_548)">
            <path d="M16.6667 1.66663H3.33332C2.41285 1.66663 1.66666 2.41282 1.66666 3.33329V6.66663C1.66666 7.5871 2.41285 8.33329 3.33332 8.33329H16.6667C17.5871 8.33329 18.3333 7.5871 18.3333 6.66663V3.33329C18.3333 2.41282 17.5871 1.66663 16.6667 1.66663Z" stroke={themeColor} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.6667 11.6666H3.33332C2.41285 11.6666 1.66666 12.4128 1.66666 13.3333V16.6666C1.66666 17.5871 2.41285 18.3333 3.33332 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6666V13.3333C18.3333 12.4128 17.5871 11.6666 16.6667 11.6666Z" stroke={themeColor} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 5H5.00833" stroke={themeColor} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 15H5.00833" stroke={themeColor} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_2_548">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
        </svg>

    )
}

export default BackendIcon
