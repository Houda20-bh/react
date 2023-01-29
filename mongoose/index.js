const express = require('express');
const Person = require('./Person');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = express();
const url='mongodb+srv://Houda:3TSxRZDZUlwvUOhg@cluster0.u55oo7p.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url,() => console.log("Database connected!")) ; 


async function start()
{
    const person1 = await Person.create({name:'Bilel', age:9,favoriteFoods:['pizza']});
}
start();
app.listen(5000,()=>{
    console.log('our server running perfectly on port 5000')
})