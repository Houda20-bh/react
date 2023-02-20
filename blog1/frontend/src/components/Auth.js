import React, { useDispatch, useState } from 'react'
import{Box,Button,TextField,Typography} from '@mui/material';
import axios from 'axios';
import{login} from'../Redux/authSlice';
const Auth = () => {
    const dispatch= useDispatch();
    const [inputs,setInputs]= useState({
        name:'', email:'',password:''});
    const handleChange= (e)=>{
        setInputs((prevState)=>({
            ...prevState,[e.target.name]:e.target.value
        }));
    };
    const sendRequest= async(type="login")=>{
    
        const res= await axios.post(`http://localhost:3001/myblog/user/login${type}`,{
        name:inputs.name,  
        email:inputs.email,
            password:inputs.password,}).catch(err=>console.log(err.res.data))
const data= await res.data;
        return data;
    };
    const handleSubmit= (e)=>{
      e.preventDefault();
      console.log(inputs);
      if(isSignup){
        sendRequest("signup").then(()=>dispatch(login)).then(data=>console.log(data));
      }
      else{
        sendRequest().then(()=>dispatch(login)).then(data=>console.log(data));
      }
      
    }
    const [isSignup,setIsSignup]= useState(false);
    return (
        <form onSubmit={handleSubmit}>
            <Box  maxWidth={400}
            display="flex" flexDirection={"column"}  alignItems='center' 
            justifyContent={"center"} boxShadow='10px 10px 20px #ccc'
            padding={3} margin='auto' marginTop={5}
            borderRadius={5}>
                <Typography variant='h2' padding={3} textAlign='center'> {isSignup ? "Signup": "Login"} </Typography>
                 {isSignup && <TextField name='name' onChange={handleChange} value={inputs.name} placeholder='Name' margin='normal' />}
                 <TextField name='email' onChange={handleChange} value={inputs.email} type={'email'} placeholder='Email'margin='normal'/>
                 <TextField  name='password' onChange={handleChange} value={inputs.password} type={'password'} placeholder='Password' margin='normal'/>
                 <Button type='submit'
                 variant='contained'
                 sx={{borderRadius:3, marginTop:3}} color='warning'>
                    Submit</Button>
                 <Button onClick={()=>setIsSignup(!isSignup)} sx={{borderRadius:3, marginTop:3}}>
                    Change To {isSignup ? "Login" : "Signup"} </Button>
               
            </Box>
        </form>
    )
}

export default Auth;
