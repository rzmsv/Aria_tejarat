const nodemailer = require("nodemailer");

const main = async (from,subject,message)=>{
     var transporter = nodemailer.createTransport({
          service: 'gmail',
          port: 587,
          host:"smtp.ethereal.email",
          ignoreTLS: false,
          secure: false,
          auth: {
            user: 'rmussavi@gmail.com',
            pass: 'rezarezaza198     reza'
          }
     });
     var mailOptions = {
          from: `${from}`,
          to: 'rmussavi@gmail.com',
          subject: `${subject}`,
          text: `${message}`
        };
        
     transporter.sendMail(mailOptions, function(error, info){
          if (error) {
          console.log(error);
          } else {
          console.log('Email sent: ' + info.response);
          }
     });
}

module.exports = main