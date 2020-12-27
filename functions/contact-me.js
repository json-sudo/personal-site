const nodemailer = require('nodemailer');

require('dotenv').config()
const { clientId, clientSecret, refreshToken  } = process.env

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: "OAuth2",
            user: "jason.omemu@gmail.com",
            clientId,
            clientSecret,
            refreshToken,
        }
    });

    transporter.sendMail({
        from: data.email,
        to: "jason.omemu@gmail.com",
        subject: data.subject,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
        `
    }, function(error, info) {
        if (error) {
            callback(error, {
                body: JSON.stringify({
                    'status': false,
                })
            });
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                'status': true,
                'message': 'Your message was sent successfully. Thanks for reaching out, I\'d get back to you as soon as possible 😊.'
            })
        });
        }
    });
}