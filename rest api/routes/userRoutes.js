const express = require('express');
const router= express.Router();
const user= require('../models/user');
const bodyParser= require('body-parser');
router.get('/',async (req,res)=>{
    try{
        const users= await user.find() ;
        res.json(users);
    }
        catch{
            res.status(501).json({message: err.message})
        }
})
//post
router.post('/',async(req,res) => {
    
    const a1= new user({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,});
        const person1= await a1.save();
        res.json(person1);
    });

// //put
router.put('/:id',async(req,res)=>{
    const upid=req.params.id;
    const updatedname=req.body.name;
    const updatedage=req.body.age;
 
    user.findOneAndUpdate({id:upid},{$set:{name:updatedname,age:updatedage}},{new:true},(err,data)=>{
        if(err){res.send ("WROOOOG  NOT FOUND")}
        else{ if (data== null){
            res.send("nothing found")}
        else{res.send(data)}}
    });  
});
//delete
router.delete('/:id',async(req,res)=>{
const delid=req.params.id;
user.findOneAndDelete(({id:delid}), (err,data)=>{
  
   if(err){res.send ("WROOOOG DO NOT FOUND")}
   else{
    if(data==null){ res.send("wrong Id Dear")}
    else{ res.send(data);}
   } })
});
module.exports= router;