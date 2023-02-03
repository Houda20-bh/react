require ('dotenv').config();
const express = require('express');
const app= express();
const mongoose = require('mongoose');
app.use(express.json());
mongoose.set('strictQuery', false);
mongoose.connect(process.env.url_data, ()=>console.log("connect to db"));
app.use('/api/users',require('./routes/userRoutes'))
app.listen(process.env.PORT,()=> console.log('server Started'));