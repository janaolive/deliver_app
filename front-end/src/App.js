import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/login/LoginForm';
import RegisterForm from './pages/RegisterForm';

function App() {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <main className="main">
        <Routes>
          <Route path="/login" element={ <LoginForm /> } />
          <Route path="/register" element={ <RegisterForm /> } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
