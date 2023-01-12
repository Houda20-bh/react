var nodemailer = require('nodemailer');
var transporter =  nodemailer .createTransport({
  service: 'gmail',
  auth: {
    user: 'bh.houda14@gmail.com',
    pass: 'xxxxyyyyy'
  }
});
var mailOptions = {
    from: 'bh.houda14@gmail.com',
    to: '	hhottab12@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });