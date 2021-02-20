import React from 'react'
import axios from 'axios'

import CustomButton from '../../components/custom-button/custom-button.component'
import FeedbackModal from '../../components/feedback-modal/feedback-modal.component'
import FormInput from '../../components/form-input/form-input.component'
import Loader from '../../components/loader/loader.component'

import MailDecor from '../../assets/svg/mail.decor'

import './contact.styles.scss'

class ContactPage extends React.Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        loading: false,
        feedbackMessage: '',
        feedbackIsOpen: false,
        responseStatus: false
    }

    handleInputChange = event => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }

    clearEmailInputs = () => {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    closeFeedback = () => {
        this.setState({ feedbackIsOpen: false })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ loading: true })

        let emailData = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }

        axios.post('/.netlify/functions/contact-me', emailData)
        .then(response => {
            this.setState({
                loading: false,
                feedbackIsOpen: true,
                feedbackMessage: response.data.message,
                responseStatus: true
            })

            this.clearEmailInputs()
        })
        .catch(error => {
            this.setState({
                loading: false,
                feedbackIsOpen: true,
                feedbackMessage: 'I\'m sorry, for some reason your message was not sent. Please check your connection and try to reach out again.',
                responseStatus: false
            })

            console.log(error.response)
        })
    }

    render() {
        const { name, email, message, subject } = this.state

        return (
            <div className="contact-page-container">
                <main className="contact-main-content">
                    <div className="contact-form-decor">
                        <svg id="small-decor" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 768">
                            <path d="M1 0h1366v404.89c-83.67 89.72-417.15 425.49-868 354.27C270.56 723.08 100 596.32 1 507.51" />
                        </svg>

                        <svg id="medium-decor" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250">
                            <path d="M-.5.5v250h188c-15.63-20.67-35.7-52.45-49-95-20.98-67.12-13.89-125.11-8-155"/>
                        </svg>

                        <svg id="big-decor" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 730 800">
                            <path d="M.5-.5v800h730c-49.8-34.25-176.35-131.18-242-309-87.87-238.02-1.96-445.81 18-491" />
                        </svg>

                        <div className="mail-decor-wrapper">
                            <MailDecor role="presentation" />
                        </div>
                    </div>

                    <form onSubmit={this.handleSubmit} method="post">
                        <h1>Leave me a message</h1>

                        <FormInput
                            id="name"
                            name="name"
                            label="Name"
                            handleChange={this.handleInputChange}
                            value={name}
                        />

                        <FormInput
                            id="email"
                            name="email"
                            label="Email"
                            handleChange={this.handleInputChange}
                            type="email"
                            value={email}
                        />

                        <FormInput
                            id="subject"
                            name="subject"
                            label="Subject"
                            handleChange={this.handleInputChange}
                            value={subject}
                        />

                        <FormInput
                            id="message"
                            name="message"
                            label="Message"
                            handleChange={this.handleInputChange}
                            rows={3.5}
                            type="textarea"
                            value={message}
                        />

                        <CustomButton>Send</CustomButton>
                    </form>
                </main>

                <Loader loading={this.state.loading} />

                <FeedbackModal
                    flag={this.state.responseStatus}
                    message={this.state.feedbackMessage}
                    handleClick={this.closeFeedback}
                    isOpen={this.state.feedbackIsOpen}
                />
            </div>
        )
    }
}

export default ContactPage
