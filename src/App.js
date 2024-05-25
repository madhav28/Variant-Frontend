import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from "./pages/Signup";
import Home from './pages/Home';
import Products from './pages/Products';

function App() {

  const [isLoggedIn, setLoggedIn] = useState((localStorage.getItem("IsLoggedIn") === "true"));
  const loginState = {isLoggedIn, setLoggedIn};

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup loginState={loginState}/>} />
            <Route path='/login' element={<Login loginState={loginState}/>} />
            <Route path='/home' element={<Home loginState={loginState}/>}/>
            <Route path='/home/products' element={<Products loginState={loginState}/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
