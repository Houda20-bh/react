const express = require ('express');
const path = require('path');

// intialize 

const app = express();
//date time
app.use((req, res, next) => {
  const time = new Date();
  const day = time.getDay();
  const hour = time.getHours();
  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 20) {
    next();
  } else {
    res.render('404');
  }
});
// view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// home route
app.get('/', (req,res)=>{
res.render('index', {
    title:'thanks'
});
});
// contact route
app.get('/contact',(req,res)=>{
    res.render('contact',{
        title:'Contact us'
    });
});
app.get('/services',(req,res)=>{
    res.render('services',{
        title:'Our services'
    });
})
// start our server
app.listen (5000,()=>{
    console.log('our server is running on port 5000 ...lol')
});