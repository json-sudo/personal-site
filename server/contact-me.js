const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const credentials = require('./config');

const transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: credentials.USERNAME,
    pass: credentials.PASSWORD
  }
}

const transporter = nodemailer.createTransport(transport)

router.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const subject = req.body.subject
    const content = `name: ${name} \n email: ${email} \n message: ${message} `

    const mail = {
      from: name,
      to: 'jason.omemu@gmail.com',
      subject: subject,
      text: content
    }

    transporter.sendMail(mail, (error, data) => {
      if (error) {
        res.json({
            status: false,
            message: 'Your message was not sent.',
            errorMessage: error.message
        })
      } else {
        res.json({
            status: true,
            message: 'Your message was sent successfully. Thanks for reaching out.'
        })
      }
    })
  })


const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(1001)