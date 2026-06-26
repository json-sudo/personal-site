import { ReactNode } from 'react'
import './skills-card.styles.scss'

type SkillsCardProps = {
    title: string;
    skills: string[];
    icon: ReactNode;
}

const SkillsCard = ({ title, skills, icon }: SkillsCardProps) => {
    return (
        <article className="skills-card">
            <header className="skills-card__header">
                <span className="skills-card__icon" aria-hidden="true">{icon}</span>
                <h3 className="skills-card__title">{title}</h3>
            </header>

            <ul className="skills-card__tags">
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </article>
    )
}

export default SkillsCard
