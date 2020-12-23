const nodemailer = require('nodemailer');
const { USERNAME, PASSWORD } = process.env
exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host:"smtp.zoho.com",
        port:"465",
        auth:{
            user: USERNAME,
            pass: PASSWORD
        }
    });

    transporter.sendMail({
        from: data.email,
        to: "email-me@jasonthefrontend.dev",
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
                    'message': 'I\'m sorry, for some reason your message was not sent. Please check your connection and try to reach out again.',
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