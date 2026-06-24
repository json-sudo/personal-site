import './education-item.styles.scss'

type EducationItemProps = {
    title: string;
    endDate: string;
    school: string;
    location: string;
}

const EducationItem = ({title, endDate, school, location}: EducationItemProps) => {
    return (
        <div className='education-item'>
            <div className="education-item__heading">
                <h3>{title}</h3>
                <span>{endDate}</span>
            </div>
            <div className='education-item__details'>
                <span className='school'>{school}</span>
                <span className='location'>{location}</span>
            </div>
        </div>
    )
}

export default EducationItem
