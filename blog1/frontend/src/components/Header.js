import React, { useState } from 'react'
import{AppBar, Button, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
const Header = () => {
// const{isLogedin}= useSelector((state)=>state.auth);
   const[value,setValue]= useState();
    return (
        <AppBar 
        position='sticky'
        sx={{background:"linear-gradient(90deg, rgba(30,0,36,1) 0%, rgba(76,56,241,1) 35%, rgba(211,0,255,1) 100%);"}}>
          <Toolbar>
            <Typography variant='h4'>  BlogsApp </Typography>
            <Box display='flex' marginLeft='auto' marginRight='auto'>
                <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={Link} to='/blogs' label='All Blogs'/>
                <Tab LinkComponent={Link} to='/myBlogs' label='My Blogs'/>
                </Tabs>
            </Box>
            <Box display="flex" marginLeft="auto">
      <>  <Button LinkComponent={Link} to='/auth'  variant='contained' sx={{margin:1,borderRadius:10}} color='warning'>Login</Button>  
             <Button  LinkComponent={Link} to='/auth'  variant='contained' sx={{margin:1,borderRadius:10}} color='warning'>Sigup</Button></>  
           <Button  LinkComponent={Link} to='/auth'  variant='contained' sx={{margin:1,borderRadius:10}} color='warning'>Logout</Button>
            </Box>
            </Toolbar>  
        </AppBar>
    )
};

export default Header;
