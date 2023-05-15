const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pablondiaz12@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pablondiaz12@gmail.com',
        subject: 'Good bye',
        text: `See you soon ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}