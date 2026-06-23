import type { Role } from '../types/roles'

export const Experiences: Role[] = [
    {
        id: 'otgsDeputyRole',
        role: 'Senior Software Engineer, Deputy Team Lead',
        startDate: 'Jan 2023',
        endDate: 'Present',
        company: 'OnTheGoSystems',
        duties: [
            {
                id: 'otgsDep1',
                duty: 'Direct full-stack delivery across TypeScript, React, Node.js Python and C# by owning architecture, code quality and execution from API and data layers through production UIs.',
            },
            {
                id: 'otgsDep2',
                duty: 'Designed and shipped an AI-first self-service support wizard (React/TypeScript) where ChatGPT produces structured issue summaries with semantic classification and keyword-driven documentation retrieval, paired with parsed environment debug checks on the bug path, cutting average customer triage from 1 day to 2 hours and improving solution-match accuracy by 45%.',
            }
        ]
    },
    {
        id: 'otgsRole',
        role: 'Software Engineer',
        startDate: 'Feb 2021',
        endDate: 'Dec 2022',
        company: 'OnTheGoSystems',
        duties: [
            {
                id: 'otgs1',
                duty: 'Cut new-developer onboarding and ramp-up time by ~50% by authoring product-specific engineering documentation covering architecture, reusable React/TypeScript patterns and common implementation pitfalls.',
            },
            {
                id: 'otgs2',
                duty: 'Raised release quality by building and maintaining unit, integration and end-to-end (E2E) test suites with Jest, Cypress, Playwright and Codeception across critical product workflows.'
            }
        ]
    },
    {
        id: 'sysnetRole',
        role: 'Intern Full-Stack Engineer',
        startDate: 'Jan 2020',
        endDate: 'Dec 2020',
        company: 'Sysnet Software Solutions',
        duties: [
            {
                id: 'sysnet1',
                duty: 'Built and maintained responsive full-stack web applications for government platforms using React, JavaScript, SCSS, PHP and SQL-backed systems.',
            },
            {
                id: 'sysnet2',
                duty: 'Delivered accessible, responsive, cross-browser public-facing applications in close partnership with UI/UX and backend engineers.'
            }
        ]
    }
]