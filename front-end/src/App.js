import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './componentess/LoginForm';
import RegisterForm from './componentess/RegisterForm';

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
