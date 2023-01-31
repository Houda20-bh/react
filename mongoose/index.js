const express = require('express');
const Person = require('./Person');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = express();
// const url='mongodb+srv://Houda:3TSxRZDZUlwvUOhg@cluster0.u55oo7p.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect("mongodb://localhost/test",{useNewUrlParser: true,useUnifiedTopology: true}); 

// adding one person

// async function start()
// {
//     const person1 = await Person.create({name:'Bilel', age:9,favoriteFoods:['pizza']});
   
// }
// start();
// Create Many Records with model.create()
// const arrayOfPeople =[
//     {name:'Aboudi', age:6,favoriteFoods:['pizza','rice']},
//     {name:'Houda', age:33,favoriteFoods:['pizza', 'cake', 'chocolat']},
//     {name:'Nadia', age:30,favoriteFoods:['pizza','rice','burger']}
// ];
// const People1=  Person.create(arrayOfPeople);
//Use model.find() to Search Your Database
// async function start()
// {
//     const myPeople= await Person.find();
// console.log(myPeople);
// }
// start();

//Use model.findOne() to Return a Single Matching Document from Your Database
// async function start()
// {
//     const people1=  await Person.findOne({name:"Bilel"});
//     console.log(people1);
// }
// start();

//Use model.findById() to Search Your Database By _id
// async function start()
// {
//     const people2= await Person.findById('63d8647b861d051885e88fc9');
// console.log(people2);
// }
// start();
//Perform Classic Updates by Running Find, Edit, then Save
// Person.findById(("63d8647b861d051885e88fc9"),(erro,result)=>{
//     if(erro){console.log(erro)}
//     else{result.favoriteFoods.push('candy');
//       console.log(result);
//       result.save();
// }
// });
//Perform New Updates on a Document Using model.findOneAndUpdate()
// Person.findOneAndUpdate({name:"Aboudi"},{age:20},{new:true},(error,data)=>{
//     if(error){console.log(error);}
//     else {console.log(data);}
// });
//Delete One Document Using model.findByIdAndRemove
// Person.findByIdAndRemove(('63d8647b861d051885e88fc9'),(error,deletedperson)=>{
// if(!error){console.log(deletedperson);}
// });
//MongoDB and Mongoose - Delete Many Documents with model.remove()
// Person.remove({name:'Nadia'},(error,date)=>{
//     if(!error){console.log(data)}
// });
//Chain Search Query Helpers to Narrow Search Results
Person.find({favoriteFoods:{$all:['pizza']}}).sort({age:'asc'}).limit(2).select('name').exec((error, data)=>{
    if(!error){console.log(data)}
});
app.listen(5000,()=>{
    console.log('our server running perfectly on port 5000')
})