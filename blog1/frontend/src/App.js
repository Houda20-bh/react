import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import {useSelector} from'react-redux';
function App() {
const{isLogedin}= useSelector((state)=>state.auth);
console.log(isLogedin);
  return (
  <React.Fragment>
   <header>
  <Header/>
    </header> 
    <main>
      <Routes>
        <Route path="/auth" element={<Auth/> }/>
        <Route path="/blogs" element={<Blogs/> }/>
        <Route path="/myBlogs/add" element={<AddBlog /> }/>
        <Route path="/myBlogs" element={<UserBlogs /> }/>
        <Route path="/myBlogs/:id" element={<BlogDetail /> }/>
        

      </Routes>
    </main>
  </React.Fragment>
  );
}

export default App;
