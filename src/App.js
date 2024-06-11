import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username && password) {
      setLoggedIn(true);
    }
  };

  const handleLogut = () => {
    setLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <BrowserRouter>
          <NavbarComponent onLogout={handleLogut} />
          <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/home/products' element={<Products />}/>
            <Route path='/home/services' element={<Services />}/>
            <Route path='/home/packages' element={<Packages />}/>
            <Route path='/home/customers' element={<Customers />}/>
            <Route path='/home/suppliers' element={<Suppliers />}/>
            <Route path='/home/vendors' element={<Vendors />}/>
            <Route path='/home/associates' element={<Associates />}/>
            <Route path='/home/locations' element={<Locations />}/>
            <Route path='/home/employees' element={<Employees />}/>
            <Route path='/home/resources' element={<Resources />}/>
            <Route path='/home/consignment' element={<Consignment />}/>
            <Route path='/home/chart_of_accounts' element={<Accounts />}/>
            <Route path='/home/tax_codes' element={<Tax_Codes />}/>
            <Route path='/home/tax_authorities' element={<Tax_Authorities />}/>
          </Routes>
        </BrowserRouter>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
