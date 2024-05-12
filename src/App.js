import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inventory from './pages/Inventory';
import Product from './pages/Product';
import ListItems from './pages/ListItems';

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
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/product' element={<Product />} />
            <Route path='/listitems' element={<ListItems />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
