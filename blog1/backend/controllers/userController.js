
const UserModel= require('../model/User');
const bcrypt= require('bcryptjs');

 const getUsers= async(req,res,next)=>{
    let users;
    try{
  users = await UserModel.find();
  } catch(err){
    console.log(err);
  } 
if(!users){
    return res.status(404).json({message:'No Users Found'})
}
return res.status(200).json({users});
};
const signup=async(req,res,next)=>{
  const {name,email,password}=req.body;
  let existinguser;
  try{
    existinguser= await UserModel.findOne({email});
  } catch (err)
  { return console.log(err);}
  if(existinguser){
    return res.status(400).json({message:'User Already Exists!Login Instead'});
  }
  const hashedPassword= bcrypt.hashSync(password);
  const newUser= new UserModel({
    name,
    email,
    password:hashedPassword,
    blogs:[],
  });
  try{
    await newUser.save();
  }
  catch(err){console.log(err);}
  return res.status(201).json({newUser})
};
const login= async (req,res,next)=>{
  const{email,password}=req.body;
  let existinguser;
  try{
    existinguser= await UserModel.findOne({email});
  } catch (err)
  { return console.log(err);}
  if(!existinguser){
    return res.status(404).json({message:'could not find the user by the email'});
  }
  const isPasswordCorrect= bcrypt.compareSync(password,existinguser.password);
  if(!isPasswordCorrect){
    res.status(404).json({message:'Password incorrect'});
  }
  return res.status(404).json({message:'login successful'});
};

module.exports={getUsers,signup,login}