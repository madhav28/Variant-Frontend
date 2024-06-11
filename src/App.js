import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from "./pages/Signup";
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Customers from './pages/Customers';
import Suppliers from './pages/Suppliers';
import Vendors from './pages/Vendors';
import Associates from './pages/Associates';
import Locations from './pages/Locations';
import Employees from './pages/Employees';
import Resources from './pages/Resources';
import Consignment from './pages/Consignment';
import Accounts from './pages/Accounts';
import Tax_Codes from './pages/Tax_Codes';
import Tax_Authorities from './pages/Tax_Authorities';

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
            <Route path='/home/services' element={<Services loginState={loginState}/>}/>
            <Route path='/home/packages' element={<Packages loginState={loginState}/>}/>
            <Route path='/home/customers' element={<Customers loginState={loginState}/>}/>
            <Route path='/home/suppliers' element={<Suppliers loginState={loginState}/>}/>
            <Route path='/home/vendors' element={<Vendors loginState={loginState}/>}/>
            <Route path='/home/associates' element={<Associates loginState={loginState}/>}/>
            <Route path='/home/locations' element={<Locations loginState={loginState}/>}/>
            <Route path='/home/employees' element={<Employees loginState={loginState}/>}/>
            <Route path='/home/resources' element={<Resources loginState={loginState}/>}/>
            <Route path='/home/consignment' element={<Consignment loginState={loginState}/>}/>
            <Route path='/home/chart_of_accounts' element={<Accounts loginState={loginState}/>}/>
            <Route path='/home/tax_codes' element={<Tax_Codes loginState={loginState}/>}/>
            <Route path='/home/tax_authorities' element={<Tax_Authorities loginState={loginState}/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
