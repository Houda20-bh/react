

const express = require('express');
const app= express();
app.get('/',function(req, res){
   res.send('hello world')
});

app.listen(9000,function(req, res){
    console.log('Running')
});
app.get('/houda',function (req, res) {
    const date = new Date();
    if(date.getDay > 0 && date.getDay < 7 && date.getHours() > 3 && date.getHours < 17){
       res.redirect('http://127.0.0.1:5500/index.html')
    }else{
        res.redirect('/goodbye');
    }
});





