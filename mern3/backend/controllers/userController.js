const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs');
const asyncHandler= require('express-async-handler');
const myUser= require('../model/userModel');
//@desc Register new user
//@route  POST  /api/users
//@access  Public
const registerUser = asyncHandler (async(req,res)=>{
const {name,email,password}=req.body
if(!name || !email || !password)
{
    res.status(400)
    throw new Error('Please enter all fields');
}
// check if user exists 
const userExists= await myUser.findOne({email})
if(userExists){
    res.status(400)
    throw new Error('User already exists')
}
// hash password
const salt= await bcrypt.genSalt(10);
const hashedPassword= await bcrypt.hash(password, salt);
// create user
const user= await myUser.create({
    name,
    email,
    password:hashedPassword,
})
if(user){
    res.status(201).json({
        _id:user.id,
        name:user.name,
        email:user.email,
        token: generateToken(user._id),
    })
}
else{
    res.status(400)
    throw new Error("invalid user data")}
});
//@desc Authenticate a user
//@route  POST  /api/users/login
//@access  Public
const loginUser = asyncHandler (async(req,res)=>{
    const {email, password}=req.body
    //check for user email
    const user= await myUser.findOne({email})
    if (user && (await bcrypt.compare(password, user.password))){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token: generateToken(user._id),
          
        })
    }
    else{
        res.status(400)
        throw new Error("invalid credentials")}
});
//@desc Get user data
//@route  GET /api/users/me
//@access private
const getMe = asyncHandler (async(req,res)=>{
    res.json({message:"display User data"})
});
//Generate JWT
const generateToken= (id)=>{
return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}
module.exports= {
    registerUser,
    loginUser,
    getMe,
}