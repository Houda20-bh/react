const bodyParser= require('body-parser');
const express = require('express');
const path = require ('path');

const app = express();
const adminRoutes = require ("./routes/admin.js");
const shopRoutes = require ("./routes/shop.js");
const PORT = 9000;
app.use(bodyParser.urlencoded({extended:false}));
app.use("/admin",adminRoutes);
app.use(shopRoutes);
// app.get("/product",(req,res,next)=>{
// console.log(req.body);
// console.log(req.body.litle);
// res.redirect('/');
// });
app.use((req,res,next)=>{
res.status(404).sendFile(path.join(__dirname,"views","404.html"));
});

app.listen(PORT,()=>{
console.log('our server running on port 900')
});