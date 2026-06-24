import './skill-list.styles.scss'

type SkillListProps = {
    title?: string;
    skills: string[];
}

const SkillList = ({ title, skills }: SkillListProps) => {
    return (
        <div className='skill-list'>
            {title ? <div className="skill-list__title">{title}</div> : null}
            <ul className='skill-list__items'>
                {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    )
}

export default SkillList
