const mongoose = require('mongoose');
const Person = require("./Person")
mongoose.connect("mongodb+srv://mango:WDKvZtMxyBD4WKKT @cluster0.q8dghnx.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });
//Create and Save a Record of a Model
const person = new Person({ name:"Bilel",age:9, favoriteFoods:['pizza']});
 person.save();
 console.log(person)
const arrayOfPeople =[
    {name:'bolbol', age:9, favoriteFoods:['burger']},
    {name:'houda', age:33, favoriteFoods:['chocolat']},
    {name:'Aboudi', age:6, favoriteFoods:['Pizza']},
    {name:'aaa', age:8, favoriteFoods:['Cake']},
]

   Person.create(arrayOfPeople);
   

