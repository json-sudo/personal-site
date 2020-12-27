const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

require('dotenv').config()
const { clientId, clientSecret, refreshToken  } = process.env

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    // fixing acesstoken expiring
    // from https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a
    const createTransporter = async () => {
        const oauth2Client = new OAuth2(
            clientId,
            clientSecret,
            "https://developers.google.com/oauthplayground"
        );

        oauth2Client.setCredentials({
            refresh_token: refreshToken
        });

        // wrapping in a promise as getAccessToken requires a callback and doesn't
        // support async/await
        const accessToken = await new Promise((resolve, reject) => {
            oauth2Client.getAccessToken((err, token) => {
                if (err) {
                reject("Failed to create access token");
                }
                resolve(token);
            });
        });

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "jason.omemu@gmail.com",
                clientId,
                clientSecret,
                refreshToken,
                accessToken
            },
        });

        return transporter
    }

    const sendMail = async emailData => {
        let emailTransporter = await createTransporter();

        await emailTransporter.sendMail(emailData, function(error, info) {
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

    sendMail({
        from: data.email,
        to: "jason.omemu@gmail.com",
        subject: data.subject,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
        `
    })
}