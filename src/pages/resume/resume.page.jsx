import { Link } from 'react-router-dom'
import ResumeItem from '../../components/resume-item/resume-item.component'
import DownloadIcon from '../../assets/svg/download.icon'
import './resume.styles.scss'
import { Experiences } from '../../data/roles'
import ExperienceItem from '../../components/experience-item/experience-item.component'


const ResumePage = () => {
    return (
        <div id="my-resume-page" className="resume-page-container">
            <div className="resume-page-header">
                <span className="page-label">Resume</span>
                <Link
                    to="/files/my-resume.pdf"
                    download
                    target="_blank"
                >
                    <DownloadIcon />
                    Download PDF
                </Link>
                <h1 className="resume-heading">Jason Omemu</h1>
                <span>Senior Software Engineer</span>
            </div>

            <main className="resume-categories-container">
                <section aria-labelledby="experience-title" className="resume-category">
                    <div className="category-details">
                        <div className="category-detail title-detail">
                            <ResumeItem title='Summary' titleID='summary'>
                                <p>Senior Software Engineer with 6+ years shipping full-stack SaaS in TypeScript, React, Node.js, PHP, Python and C# from API and data layers to accessible, production-grade Uis that over 250k WPML users and stakeholders rely on daily. Re-engineered customer-facing REST APIs for 20% faster response times, shipped data-driven billing and AI-assisted diagnostic features that cut average support triage from 1 day to 2 hours and kept production releases reliable through automated testing and CI/CD. Deputy team lead who multiplies a team's output through championing clear documentation, clean architecture, automated testing, code review and mentorship.</p>
                            </ResumeItem>

                            <ResumeItem title='Experience' titleID='experience'>
                                {Experiences.map((experience) => {
                                    return (
                                        <ExperienceItem key={experience.id} experience={experience} />
                                    )
                                })}
                            </ResumeItem>
                            
                        </div>
                    </div>
                </section>

                <section aria-labelledby="education-title" className="resume-category">
                    <div className="category-details">
                        <div className="category-detail title-detail">
                            <h2 className="category-title" id="education-title">Education</h2>

                            <div className="category-detail-header">
                                <h3 className="category-detail-title">2015 - 2019</h3>

                                <h4>Afe Babalola University (ABUAD)</h4>
                            </div>

                            <ul className="detail-items">
                                <li>B.SC. Computer Science</li>
                            </ul>
                        </div>
                        <div className="category-detail">
                            <div className="category-detail-header">
                                <h3 className="category-detail-title">2021 - 2022</h3>

                                <h4>University of Benin</h4>
                            </div>

                            <ul className="detail-items">
                                <li>M.SC. Computer Science</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="skills-title" className="resume-category">

                    <div className="category-details">
                        <div className="category-detail title-detail">
                            <h2 className="category-title" id="skills-title">Skillset</h2>

                            <div className="category-detail-header title-header">

                                <h3 className="category-detail-title">Soft Skills</h3>
                            </div>

                            <ul className="detail-items">
                                <li>Teamwork</li>
                                <li>Continuous learning</li>
                                <li>Problem solving</li>
                                <li>Critical thinking</li>
                                <li>Leadership</li>
                                <li>High adaptibility</li>
                            </ul>
                        </div>

                        <div className="category-detail">
                            <div className="category-detail-header">
                                <h3 className="category-detail-title">Technical Skills</h3>
                            </div>

                            <ul className="detail-items">
                                <li>Vanilla Javascript</li>
                                <li>React.js + Redux/Context API/Hooks</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Accessibility</li>
                                <li>Working with algorithms</li>
                                <li>Design, UI and UX</li>
                                <li>Git and Github/Gitlab</li>
                                <li>Node.js</li>
                                <li>NPM and Yarn</li>
                                <li>MySQL, Express.js and GraphQL</li>
                                <li>Adobe's Photoshop and Illustrator</li>
                            </ul>
                        </div>

                        <div className="category-detail">
                            <div className="category-detail-header">
                                <h3 className="category-detail-title">Languages</h3>
                            </div>

                            <ul className="detail-items">
                                <li>English (first language)</li>
                                <li>Spanish (A2)</li>
                                <li>German (A2)</li>
                                <li>Dutch(A1)</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ResumePage