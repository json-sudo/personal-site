import type { Project } from '../types/project'

export const projects: Project[] = [
    {
        slug: 'campusfit',
        year: '2025',
        title: 'CampusFit',
        tagline: 'Full-stack campus fitness platform',
        summary:
            'Team-built fitness platform with goals, challenges, and leaderboards across a React/TypeScript SPA and Node.js API backed by PostgreSQL.',
        stack: [
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Supabase',
            'SCSS',
            'JWT',
        ],
        cardTags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Express'],
        image: 'https://res.cloudinary.com/dynamicjson/image/upload/v1781738521/CampusFit-06-17-2026_07_21_PM_adfkpz.png',
        imageAlt: 'Students exercising on a university campus track.',
        liveUrl: 'https://atlas-campusfit.netlify.app/',
        githubUrl: 'https://github.com/json-sudo/team-team-atlas',
        sections: [
            {
                title: 'Application Idea and Motivation',
                body: 'University and college students usually struggle to maintain fitness habits for a number of reasons including their busy schedules and lack of accountability. There are general fitness apps that exist but there are not many that are specifically built to the campus experience or leverage the potential of a university community. CampusFit is a web application that helps students set personal fitness goals, log their activity and participate in challenges designed for the entire campus which they can view on leaderboards. Students can personally track their goals and combine that with competing with other students on campus if they wish to help build a healthier and more active campus lifestyle. The target users are university students who want a simple, motivating way to stay on track with their fitness.',
            },
            {
                title: 'Architecture & Stack',
                body: 'The frontend is a feature-based React/TypeScript SPA with route-level modules for dashboard, goals, challenges, leaderboard, and profile. A Node.js/Express API owns business logic, JWT authentication with refresh-token rotation, and PostgreSQL via Supabase. API design was documented upfront so both sides could ship in parallel without blocking on schema changes.',
            },
            {
                title: 'Challenges',
                body: 'Coordinating auth across HttpOnly refresh cookies and Bearer access tokens required careful CORS and cookie configuration between the Netlify frontend and API host. Aggregating dashboard stats from multiple tables without N+1 queries meant designing SQL-friendly endpoints instead of stitching data on the client.',
            },
            {
                title: 'What I Learned',
                body: 'Splitting the repo into feature-owned frontend modules and route-scoped controllers made parallel work tractable for a five-person team. Clear API contracts mattered as much as the code — ambiguous response shapes caused more delay than any single technical bug.',
            },
            {
                title: 'Result',
                body: 'A deployed full-stack fitness platform with authenticated user flows, live goal progress, challenge participation, and leaderboard rankings — built with the same rigor I apply to production SaaS.',
            },
        ],
    },
    {
        slug: 'webrtc-live-captioning',
        year: '2025',
        title: 'WebRTC Live Captioning',
        tagline: 'Real-time multilingual captioning research',
        summary:
            'Research prototype measuring ASR and translation latency in WebRTC environments, with AudioWorklet chunking, WebSocket caption delivery, and WebVTT rendering.',
        stack: [
            'React',
            'TypeScript',
            'WebRTC',
            'Web Audio API',
            'WebSocket',
            'WebVTT',
            'Jest',
            'Playwright',
        ],
        cardTags: ['React', 'TypeScript', 'WebRTC', 'WebSocket', 'Web Audio API'],
        image: 'https://res.cloudinary.com/dynamicjson/image/upload/v1781734262/Screenshot_2026-06-17_at_18.00.22_voxdlr.png',
        imageAlt: 'Developer working on a real-time communication prototype.',
        githubUrl: 'https://github.com/json-sudo/webrtc-multilingual',
        sections: [
            {
                title: 'Context & Goal',
                body: 'I set out to understand whether real-time multilingual captions could stay within perceptual latency bounds in browser-based WebRTC — not a UI exercise, but a systems problem spanning microphone capture, ASR, translation, and render timing.',
            },
            {
                title: 'Architecture & Stack',
                body: 'Browser audio is captured via the Web Audio API and chunked through an AudioWorklet processor. Chunks stream over WebSocket to a simulated ASR/translation pipeline. Partial and final captions feed a live display and WebVTT track on a muted video element, with cue merging to prevent overlapping subtitles.',
            },
            {
                title: 'Challenges',
                body: 'Microphone permission timing, variable ASR latency between short and long utterances, and synchronizing caption cues with media playback required offset tracking and per-cue adjustments. Measuring end-to-end latency meant instrumenting each stage — capture, server processing, and render — not just trusting aggregate timers.',
            },
            {
                title: 'What I Learned',
                body: 'Caption quality degrades quickly when partial results are not merged carefully before promotion to final cues. Production live captioning needs explicit fallback paths for dropped WebSocket frames and permission revocations mid-stream.',
            },
            {
                title: 'Result',
                body: 'A working prototype with ~21ms average speech-to-text latency, ~123ms translation latency, and 95% accuracy under noisy conditions — with fine-grained metrics isolating bottlenecks across the pipeline.',
            },
        ],
    },
]

export const getProjectBySlug = (slug: string): Project | undefined =>
    projects.find((project) => project.slug === slug)
