const { default: mongoose } = require('mongoose');
const Blog = require('../model/Blog');
const blogModel= require('../model/Blog');
const myUser= require('../model/User')
const getallBlogs = async(req,res,next)=>{
    let blogs;
    try{
        blogs= await blogModel.find();
    }
    catch(err){
        console.log(err)
    }
    if(!blogs){
        return res.status(404).json({message:'No blog '})
    }
    return res.status(200).json({blogs})
};
const Addblog= async (req,res,next)=>{
    const{title,description,image,user}=req.body;
    let existingUser;
    try{
        existingUser= await myUser.findById(user);
    }
    catch(erro){
        return console.log(erro);
    }
    if(!existingUser){
        return res.status(400).json({message:"unable to find user by this ID thanks"})
    }
    const blog= new Blog({
        title,
        description,
        image,
        user,
    });
    try{
       const session= await mongoose.startSession();
       session.startTransaction();
       await blog.save({session});
       existingUser.blogs.push(blog);
       await existingUser.save({session});
       await session.commitTransaction();
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:err})
    }
    return res.status(200).json({blog})
};
const updateBlog= async(req,res,next)=>{
    const{title,description}=req.body;
    const blogId=req.params.id;
    let blog;
    try{
         blog= await blogModel.findByIdAndUpdate(blogId,{
            title,
            description,
        })}
        catch(err){ return console.log(err)}
   if(!blog){
    return res.status(500).json({message:"Unable To Update the Blog"})
   }
   return res.status(200).json({blog});
};
const getById= async (req,res,next)=>{
    const id= req.params.id;
    let blog;
    try{
        blog= await blogModel.findById(id);
    } 
    catch(err){return console.log(err);}
    if(!blog){
        return res.status(404).json({message:"No blog Found"});
    }
    return res.status(200).json({blog});
}
const deleteBlog= async(req,res,next)=>{
    const id=req.params.id;
    let blog;
    try{
        blog= await blogModel.findByIdAndRemove(id).populate("user");
         await blog.user.blogs.pull(blog);
         await blog.user.save();
    }
    catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(500).json({message:"Unable to delete"});
    }
    return res.status(200).json({message:"Successfully Delete"})
};
const getByUserId= async(req,res,next)=>{
    const userId=req.params.id;
    let userBlogs;
    try{ 
        userBlogs= await myUser.findById(userId).populate('blogs');
    }
    catch(erro){return console.log(erro);}
    if(!userBlogs){
        return res.status(404).json({message:"no Blog Found"});
    }
    return res.status(200).json({blogs:userBlogs});

}
module.exports={getallBlogs,Addblog,updateBlog,getById,deleteBlog,getByUserId};