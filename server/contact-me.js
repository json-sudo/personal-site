const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const credentials = require('./config');

const transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: credentials.USERNAME,
        pass: credentials.PASSWORD
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Server is ready to take messages')
    }
})

router.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const subject = req.body.subject
    const content = `name: ${name} \n email: ${email} \n\n message: ${message} `

    const mail = {
      from: `Sender Name: <${email}>`,
      to: 'jason.omemu@gmail.com',
      subject: subject,
      text: content
    }

    console.log(mail.from)

    transporter.sendMail(mail, (error) => {
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