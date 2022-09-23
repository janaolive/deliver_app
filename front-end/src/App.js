import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/login/LoginForm';
import RegisterForm from './pages/registro/RegisterForm';

function App() {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <main className="main">
        <Routes>
          <Route exact path="/login" element={ <LoginForm /> } />
          <Route path="/register" element={ <RegisterForm /> } />
          <Route path="/seller/orders" element={ <RegisterForm /> } />
          <Route path="/customer/products" element={ <RegisterForm /> } />
          <Route path="/admin/manages" element={ <RegisterForm /> } />
          <Route exact path="/" element={ <Navigate to="/login" /> } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
