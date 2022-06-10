import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AddBlog from "./components/AddBlog";
import BlogDetails from "./components/BlogDetails";
import Blogs from "./components/Blogs";
import Header from './components/Header';
import Auth from "./components/Login/Auth";
import UserBlogs from "./components/UserBlogs";

function App() {

  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    
  <>
    <header>
    <Header/>
    </header>
    <main>
    <Routes>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/myBlogs' element={<UserBlogs/>}/>
      <Route path='/myBlogs/:id' element={<BlogDetails/>}/>
      <Route path='/blogs/add' element={<AddBlog/>}/>
    </Routes>
    </main>
  </>
  
  );
}

export default App;
