const nodemailer = require('nodemailer');


// Configuring transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAILID,
        pass: process.env.SENDER_EMAIL_APP_PASSWORD
    }
});



// Options
const mailOptions = (emailID , filepath) => {
    return {
        from: process.env.SENDER_EMAILID,
        to: emailID,
        subject: 'Your Daily Reminder at 9am',
        text: 'Please find your attachment',
        attachments: [
            {
                filename: 'Registered-Users.csv',             
                path: filepath
            },
        ]
    }
};



const sendMail = async(emailID , filepath) => {
     transporter.sendMail(mailOptions(emailID , filepath), (error, info) => {
        if (error) {
            return console.error('Email failed:', error);
        }
        console.log('Email sent:', info.response);
    });
}



module.exports = {
    sendMail
}