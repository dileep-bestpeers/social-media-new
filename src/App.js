import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
import Comments from './components/Comments';
import Navigation from './components/Navbar';
import AddPost from './pages/AddPost';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserHomePage from './pages/UserHomePage';

const App = () => {
  const state = useSelector(state => state)
  // console.log(state);
  
    return (
      <BrowserRouter >
      <Navigation />
         <Routes>
           <Route exact path='/' element={<HomePage />}></Route>
           <Route exact path='/login' element={<Login />}></Route>
           <Route exact path='/signup' element={<SignUp />}></Route>
           <Route exact path='/user_home' element={<UserHomePage />}></Route>
           <Route exact path='/add_post' element={<AddPost />}></Route>
           <Route exact path='/comments/:id' element={<Comments />}></Route>
         </Routes>
      </BrowserRouter>
    );

}

export default App;
