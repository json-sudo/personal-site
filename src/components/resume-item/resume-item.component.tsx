import { ReactNode } from 'react'
import './resume-item.styles.scss'

type ResumeItemProps = {
    title: string;
    titleID: string;
    children: ReactNode;
}

const ResumeItem = ({title, titleID, children}: ResumeItemProps) => {
    return (
        <section className='resume-item' aria-labelledby={titleID}>
            <div className="resume-item__title">
                <h2 id={titleID}>{title}</h2>
                <div className="resume-title-line" />
            </div>
            <div className='resume-item-content'>
                {children}
            </div>
        </section>
    )
}

export default ResumeItem
