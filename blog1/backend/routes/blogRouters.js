const express= require('express');
const {getallBlogs,Addblog,updateBlog,getById,deleteBlog,getByUserId} = require('../controllers/blogController')
const blogRouter = express.Router();
blogRouter.get('/',getallBlogs);
blogRouter.post('/add',Addblog);
blogRouter.put('/update/:id',updateBlog);
blogRouter.get('/:id',getById);
blogRouter.delete('/:id',deleteBlog);
blogRouter.get('/user/:id',getByUserId);
module.exports=blogRouter;