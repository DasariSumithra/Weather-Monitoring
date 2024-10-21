// alertService.js
require('dotenv').config();
const nodemailer = require('nodemailer');

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service
    auth: {
        user: email,
        pass: password
    }
});

// Example function to send an alert
const sendAlert = (recipient, message) => {
    const mailOptions = {
        from: email,
        to: recipient,
        subject: 'Weather Alert',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

module.exports = { sendAlert };
