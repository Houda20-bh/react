
const express = require('express');
const app = express();
// const path = require('path');
// const router = express.Router();
// router.use(function (req, res, next) {
//     const date = new Date();
//     if(date.getDay > 0 && date.getDay < 6 && date.getHours() > 12 && date.getHours < 17){
//         next();
//     }
// });


// router.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/index.html'));
// });
app.use(express.static(__dirname + '/index.html'))

// router.get('/contact',function(req,res){
//   res.sendFile(path.join(__dirname+'/contact.html'));
// });

// router.get('/services',function(req,res){
//   res.sendFile(path.join(__dirname+'/services.html'));
// });

// app.use('/', router);
app.listen(9000);

console.log('Running at Port 9000');