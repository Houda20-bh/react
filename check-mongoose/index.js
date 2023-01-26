const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const Person = require("./Person");
const dbURI= "mongodb+srv://mango:WDKvZtMxyBD4WKKT@cluster0.q8dghnx.mongodb.net/myFirstData?retryWrites=true&w=majority"
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>console.log('connected to db'))
.catch((erro)=>console.log('erro'));
//Create and Save a Record of a Model
const person = new Person({ name:"Bilel",age:9, favoriteFoods:['pizza']});
 person.save();
 console.log(person);
 //Create Many Records with model.create()
const arrayOfPeople =[
    {name:'bolbol', age:9, favoriteFoods:['burger','pizza','juice']},
    {name:'houda', age:33, favoriteFoods:['chocolat','cake']},
    {name:'Aboudi', age:6, favoriteFoods:['Pizza','rice']},
    {name:'aaa', age:8, favoriteFoods:['Cake','fruits']},
];

   const people= Person.create(arrayOfPeople);

   console.log(people);
   //Use model.find() to Search Your Database
  const people1= Person.find({name:"Bilel"});
  console.log(people1);
  //Use model.findById() to Search Your Database By _id
   const people2= Person.findById("63d2471d81932d7e82e23dd7");
  console.log(people2);
// //Perform Classic Updates by Running Find, Edit, then Save

   


   
   

