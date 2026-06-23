export type ProjectSection = {
    title: string
    body: string
}

export type Project = {
    slug: string
    year: string
    title: string
    tagline: string
    summary: string
    stack: string[]
    cardTags: string[]
    image: string
    imageAlt: string
    liveUrl?: string
    githubUrl?: string
    sections: ProjectSection[]
}

export type ProjectNavLink = {
    slug: string
    title: string
}
