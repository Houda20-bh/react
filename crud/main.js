const express= require('express');
const app=express();
const mongoose= require('mongoose');
mongoose.set('strictQuery', false);
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/crud',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{console.log('connection success')});
//schema
const sch={
    name:String,
    email:String,
    id:Number
}
const mymodel=mongoose.model("User",sch);
//post
app.post('/post', async(req,res)=>{
    console.log('we will create data lolol');
    const data=new mymodel({
        name:req.body.name,
        email:req.body.email,
        id:req.body.id
    });
    const user= await data.save();
    res.json(user);
})

//put
app.put('/update/:id',async(req,res)=>{
console.log('we are updating our data loool');
const upid= req.params.id;
const upname= req.body.name;
const upemail= req.body.email;
mymodel.findOneAndUpdate({id:upid},{$set:{name:upname,email:upemail}},{new:true},
    (err,data)=>{
if(err){res.send('ERRRO NO WAY')}
       else{
        if(data== null){res.send("Nothing found we dont have this ID")}
        else{ res.send(data)}
       }
    });
});
// fetch Get 
app.get('/fetch/:id',(req,res)=>{
    fetchid=req.params.id;
    mymodel.find(({id:fetchid}),(err,data)=>{
        if(err){res.send('something went wrong ERRRRRR')}
        else {
            if(data.length==0)//[]
        {res.send('data does not find thanks')}
        else{res.send(data);}
        }
    })
})
//read all data

app.get('/fetch',(req,res)=>{
    
    mymodel.find((err,data)=>{
        if(err){res.send('something went wrong ERRRRRR')}
        else {
            if(data.length==0)//[]
        {res.send('data does not find thanks')}
        else{res.send(data);}
        }
    })
})
//Delete 
app.delete('/del/:id',(req,res)=>{
    const delid=req.params.id;
    mymodel.findOneAndDelete(({id:delid}),(err,data)=>{
    if (err){res.send('ERRRROR DO NOT TRY AGAIN')}
    else{
        if (data== null){res.send('Id not found')}
        else{res.send(data);}
    }
        
    });
    
})

app.listen(3000, ()=>{console.log('our server running on port 3000 lol')});
