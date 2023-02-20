const express= require('express');
const mongoose= require('mongoose');
const detenv= require('dotenv').config();
const port=process.env.PORT;
const cors= require('cors');
mongoose.set("strictQuery",false);
const app= express();
app.use(cors());
app.use(express.json());
 app.use("/myblog/user",require('./routes/userRoutes'));
 app.use("/myblog/blog",require('./routes/blogRouters'))
// app.use('/blog', (req,res,next)=>{
//     res.send('Hello worl I am back agin lolol')
// })
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
},()=>{console.log('connection success')});

app.listen(port,'localhost', ()=>{console.log(`our server is running perfectly on ${port}`)});
