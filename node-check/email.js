var nodemailer = require('nodemailer');
var transporter =  nodemailer .createTransport({
  service: 'gmail',
  auth: {
    user: 'bh.houda14@gmail.com',
    pass: 'houdahattab'
  }
});
var mailOptions = {
    from: 'bh.houda14@gmail.com',
    to: '	kbkhaled12@gmail.com',
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