import AwardIcon from '../../assets/svg/award.icon'
import './certificate-item.styles.scss'

type CertificateItemProps = {
    title: string;
    issuingOrg: string;
    date: string;
}

const CertificateItem = ({title, issuingOrg, date}: CertificateItemProps) => {
    return (
        <div className='education-item'>
            <div className='certificate-item__heading'>
                <AwardIcon themeColor="var(--p-accent-strong)" />
                <h3>{title}</h3>
            </div>

            <div className='certificate-item__details'>
                <span>{issuingOrg}</span>
                <span className='date'>{date}</span>
            </div>
        </div>
    )
}

export default CertificateItem
