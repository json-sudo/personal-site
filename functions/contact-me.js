const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

require('dotenv').config()
const { clientId, clientSecret, refreshToken  } = process.env

// fixing acesstoken expiring
// from https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1
const oauth2Client = new OAuth2(
    clientId,
    clientSecret,
    "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
    refresh_token: refreshToken
});
const accessToken = oauth2Client.getAccessToken()

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "jason.omemu@gmail.com",
            clientId,
            clientSecret,
            refreshToken,
            accessToken: accessToken
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