import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

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
          </Routes>
        </BrowserRouter>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
