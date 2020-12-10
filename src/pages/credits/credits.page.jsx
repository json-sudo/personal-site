import React from 'react'

import CssIcon from '../../assets/svg/css.icon'
import DarkThemeIcon from '../../assets/svg/dark-theme.icon'
import ErrorIcon from '../../assets/svg/error.icon'
import FirebaseIcon from '../../assets/svg/firebase.icon'
import GithubIcon from '../../assets/svg/github.icon'
import HtmlIcon from '../../assets/svg/html.icon'
import JavaScriptIcon from '../../assets/svg/javascript.icon'
import LightThemeIcon from '../../assets/svg/light-theme.icon'
import LinkedInIcon from '../../assets/svg/linkedin.icon'
import NetlifyIcon from '../../assets/svg/netlify.icon'
import NodejsIcon from '../../assets/svg/nodejs.icon'
import PhpLogo from '../../assets/svg/php-logo.icon'
import ReactLogo from '../../assets/svg/react-logo.icon'
import ReduxIcon from '../../assets/svg/redux.icon'
import SassLogo from '../../assets/svg/sass-logo.icon'
import StripeIcon from '../../assets/svg/stripe.icon'
import SuccessIcon from '../../assets/svg/success.icon'
import TwitterIcon from '../../assets/svg/twitter.icon'

import './credits.styles.scss'

const CreditsPage = () => {
    return (
        <div className="credits-page-container">
            <h1>Credits for icons used on this site</h1>

            <main>
                <table className="credits-table">
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Credit</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><LightThemeIcon title="Light mode icon." /></td>
                            <td>
                                <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer">Freepik</a>
                                {' '}from <a href="http://flaticon.com" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
                            </td>
                        </tr>

                        <tr>
                            <td><DarkThemeIcon title="Dark mode icon." /></td>
                            <td>
                                <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer">Freepik</a>
                                {' '}from <a href="http://flaticon.com" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
                            </td>
                        </tr>

                        <tr>
                            <td><LinkedInIcon title="Linkedin icon." /></td>
                            <td>
                                <a href="https://www.flaticon.com/authors/pixel-perfect" target="_blank" rel="noopener noreferrer">Pixel perfect</a>
                                {' '}from <a href="http://flaticon.com" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
                            </td>
                        </tr>

                        <tr>
                            <td><GithubIcon title="Github icon." /></td>
                            <td>
                                <a href="https://www.flaticon.com/authors/pixel-perfect" target="_blank" rel="noopener noreferrer">Pixel perfect</a>
                                {' '}from <a href="http://flaticon.com" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
                            </td>
                        </tr>

                        <tr>
                            <td><TwitterIcon title="Twitter icon." /></td>
                            <td>
                                <a href="https://www.flaticon.com/authors/pixel-perfect" target="_blank" rel="noopener noreferrer">Pixel perfect</a>
                                {' '}from <a href="http://flaticon.com" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
                            </td>
                        </tr>

                        <tr>
                            <td><SassLogo title="SASS icon." /></td>
                            <td>
                                <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer">Freepik</a>
                                {' '}from <a href="http://flaticon.com" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
                            </td>
                        </tr>

                        <tr>
                            <td><SuccessIcon title="Successful icon." /></td>
                            <td>
                                <a href="https://www.flaticon.com/authors/kiranshastry" target="_blank" rel="noopener noreferrer">Kiranshastry</a>
                                {' '}from <a href="http://flaticon.com" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
                            </td>
                        </tr>

                        <tr>
                            <td><ErrorIcon title="Error icon." /></td>
                            <td>
                                <a href="https://www.flaticon.com/authors/kiranshastry" target="_blank" rel="noopener noreferrer">Kiranshastry</a>
                                {' '}from <a href="http://flaticon.com" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
                            </td>
                        </tr>

                        <tr>
                            <td><HtmlIcon title="HTML icon." /></td>
                            <td><a href="https://freeicons.io/" target="_blank" rel="noopener noreferrer">Freeicons.io</a></td>
                        </tr>

                        <tr>
                            <td><CssIcon title="CSS icon." /></td>
                            <td><a href="https://freeicons.io/" target="_blank" rel="noopener noreferrer">Freeicons.io</a></td>
                        </tr>

                        <tr>
                            <td><JavaScriptIcon title="JavaScript icon." /></td>
                            <td><a href="https://freeicons.io/" target="_blank" rel="noopener noreferrer">Freeicons.io</a></td>
                        </tr>

                        <tr>
                            <td><FirebaseIcon title="Firebase icon." /></td>
                            <td><a href="https://freeicons.io/" target="_blank" rel="noopener noreferrer">Freeicons.io</a></td>
                        </tr>

                        <tr>
                            <td><NetlifyIcon title="Netlify icon." /></td>
                            <td><a href="https://freeicons.io/" target="_blank" rel="noopener noreferrer">Freeicons.io</a></td>
                        </tr>

                        <tr>
                            <td><NodejsIcon title="NodeJs icon." /></td>
                            <td><a href="https://freeicons.io/" target="_blank" rel="noopener noreferrer">Freeicons.io</a></td>
                        </tr>

                        <tr>
                            <td><PhpLogo title="PHP icon." /></td>
                            <td><a href="https://freeicons.io/" target="_blank" rel="noopener noreferrer">Freeicons.io</a></td>
                        </tr>

                        <tr>
                            <td><ReactLogo title="ReactJs icon." /></td>
                            <td><a href="https://freeicons.io/" target="_blank" rel="noopener noreferrer">Freeicons.io</a></td>
                        </tr>

                        <tr>
                            <td><ReduxIcon title="Redux icon." /></td>
                            <td><a href="https://freeicons.io/" target="_blank" rel="noopener noreferrer">Freeicons.io</a></td>
                        </tr>

                        <tr>
                            <td><StripeIcon title="Stripe icon." /></td>
                            <td><a href="https://freeicons.io/" target="_blank" rel="noopener noreferrer">Freeicons.io</a></td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default CreditsPage
