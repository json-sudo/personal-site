export type SkillCategory = {
    id: string;
    skills: string[];
}

export type TechnicalSkills = {
    frontend: SkillCategory;
    backend: SkillCategory;
    cloud: SkillCategory;
}

export type HowIWork = {
    softSkills: SkillCategory;
}

export type Languages = {
    language: SkillCategory;
}
