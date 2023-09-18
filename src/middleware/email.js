const nodemailer = require('nodemailer');


const sendEmail = async (option) =>{
    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
    })

    // Define Email Options
    const emailOption = {
        from: 'Dashboard@shopping.com',
        to: option.to,
        subject: option.subject,
        html:option.html
    }
    //await transporter.sendMail(emailOption);
    transporter.sendMail(emailOption, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
}

module.exports = sendEmail