import './experience-item.styles.scss'
import type { Role } from '../../types/roles';

type ExperienceItemProps = {
    experience: Role
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
    return (
        <div className='experience-item'>
            <div className='experience-item-header'>
                <h3>{experience.role}</h3>
                <span className='start-end-date'>
                    {experience.startDate} - {experience.endDate}
                </span>
                <span className='company'>{experience.company}</span>
            </div>

            <div className='experience-duties'>
                <ul>
                    {
                        experience.duties.map((duty) => {
                            return (
                                <li key={duty.id}>{duty.duty}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ExperienceItem
