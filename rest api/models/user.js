const mongoose= require('mongoose');
const userSchema = new mongoose.Schema({
  id:Number,
  name :{
type:String,
required:true,
  } ,
  age:Number, 
});
module.exports= mongoose.model('users',userSchema);