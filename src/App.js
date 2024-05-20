import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inventory from './pages/Inventory';
import Product from './pages/Product';
import ListItems from './pages/ListItems';
import Signup from "./pages/Signup";
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const loginState = {isLoggedIn, setLoggedIn};

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/inventory' element={<Inventory loginState={loginState}/>} />
            <Route path='/product' element={<Product loginState={loginState}/>} />
            <Route path='/listitems' element={<ListItems loginState={loginState}/>} />
            <Route path='/signup' element={<Signup loginState={loginState}/>} />
            <Route path='/login' element={<Login loginState={loginState}/>} />
              <Route path='/home' element={<Home />}/>
              <Route path='/home/products' element={<Products />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
