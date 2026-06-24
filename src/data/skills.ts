import type { HowIWork, Languages, TechnicalSkills } from '../types/skills'

export const technicalSkills: TechnicalSkills = {
    frontend: {
        id: 'frontend',
        skills: [
            'React',
            'TypeScript',
            'JavaScript',
            'Redux',
            'Angular',
            'SCSS',
            'Jest',
            'Playwright',
            'Cypress',
            'Vite',
            'Accessibility',
        ],
    },
    backend: {
        id: 'backend',
        skills: [
            'C# / .NET',
            'Node.js',
            'Python',
            'PHP',
            'REST APIs',
            'API Design',
            'Authentication',
            'PostgreSQL',
            'SQL Server',
            'SQL',
        ],
    },
    cloud: {
        id: 'cloud',
        skills: [
            'Docker',
            'CI/CD',
            'GitHub Actions',
            'AWS',
            'Azure',
            'Terraform',
            'Kubernetes',
            'Git',
        ],
    },
}

export const howIWorkSkills: HowIWork = {
    softSkills: {
        id: 'softSkills',
        skills: [
            'Cross-Functional Collaboration',
            'Technical mentorship',
            'Code review & architecture',
            'Continuous learning',
            'Problem solving',
            'Leadership',
            'High adaptability'
        ]
    }
}

export const languageSkills: Languages = {
    language: {
        id: 'languages',
        skills: [
            'English (native)',
            'Spanish (A2)',
            'French (A2)',
            'German (A2)',
            'Dutch (A1)'
        ]
    }
}
