
const express = require ('express');
const path = require ('path');
const bodyParser= require('body-parser');
 // intialize
 const app= express();

 app.use(bodyParser.urlencoded({extended:false}));
 // home route
 app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'./views/index.html'))
 });
 // result route
 app.post("/", (req,res)=>{
    const sum = Number (req.body.num1 )+ Number (req.body.num2);
    res.send('<h4><i>your resulat is:</i></h4>'+'<h3> <button>' + sum +'</h3> </button>');
 });
 // listen to the server

 app.listen (8000, ()=>{ 
    console.log('our server running on port 8000 .... lol')
 });

