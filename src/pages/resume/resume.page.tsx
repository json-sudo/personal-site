import CertificateItem from '../../components/certificate-item/certificate-item.component'
import EducationItem from '../../components/education-item/education-item.component'
import ExperienceItem from '../../components/experience-item/experience-item.component'
import ResumeItem from '../../components/resume-item/resume-item.component'
import SkillList from '../../components/skill-list/skill-list.component'
import { Experiences } from '../../data/roles'
import { howIWorkSkills, languageSkills, technicalSkills  } from '../../data/skills'
import DownloadIcon from '../../assets/svg/download.icon'
import './resume.styles.scss'


const ResumePage = () => {
    return (
        <div id="my-resume-page" className="resume-page-container">
            <div className="resume-page-header">
                <span className="page-label">Resume</span>
                <a
                    href="/files/my-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DownloadIcon />
                    View full PDF
                </a>
                <h1 className="resume-heading">Jason Omemu</h1>
                <span>Senior Software Engineer</span>
            </div>

            <main className="resume-categories-container">
                <ResumeItem title='Summary' titleID='summary'>
                    <p>Senior Software Engineer with 6+ years shipping full-stack SaaS in TypeScript, React, Node.js, PHP, Python and C# from API and data layers to accessible, production-grade UIs that over 250k WPML users and stakeholders rely on daily. Re-engineered customer-facing REST APIs for 20% faster response times, shipped data-driven billing and AI-assisted diagnostic features that cut average support triage from 1 day to 2 hours and kept production releases reliable through automated testing and CI/CD. Deputy team lead who multiplies a team's output through championing clear documentation, clean architecture, automated testing, code review and mentorship.</p>
                </ResumeItem>

                <ResumeItem title='Experience' titleID='experience'>
                    {Experiences.map((experience) => {
                        return (
                            <ExperienceItem key={experience.id} experience={experience} />
                        )
                    })}
                </ResumeItem>

                <ResumeItem className='skills' title='Skills' titleID='skills'>
                    <SkillList title='Frontend' skills={technicalSkills.frontend.skills} />
                    <SkillList title='Backend' skills={technicalSkills.backend.skills} />
                    <SkillList title='Cloud & DevOps' skills={technicalSkills.cloud.skills} />
                </ResumeItem>

                <ResumeItem className='skills' title='How I work' titleID='howIwork'>
                    <SkillList skills={howIWorkSkills.softSkills.skills} />
                </ResumeItem>

                <ResumeItem className='skills' title='Languages' titleID='languages'>
                    <SkillList skills={languageSkills.language.skills} />
                </ResumeItem>
                
                <ResumeItem className='education' title='Education & Certificates' titleID='education'>
                    <EducationItem
                        title='Master of Science'
                        endDate='Apr 2026'
                        school='Grand Valley State University'
                        location='Grand Rapids'
                    />
                    <EducationItem
                        title='Bachelor of Science'
                        endDate='Jun 2019'
                        school='Afe Babalola University'
                        location='Ekiti, Nigeria'
                    />
                </ResumeItem>

                <ResumeItem title='Certificates' titleID='certificates'>
                    <CertificateItem 
                        title='Complete Web Developer'
                        issuingOrg='ZTM Academy'
                        date='May 2025'
                    />
                    <CertificateItem 
                        title='React'
                        issuingOrg='TestDome'
                        date='Jan 2021'
                    />
                    <CertificateItem 
                        title='Google/Udacity Nanodegree Scholarship - Web Development'
                        issuingOrg='Andela'
                        date='Nov 2018'
                    />
                </ResumeItem>
            </main>
        </div>
    )
}

export default ResumePage