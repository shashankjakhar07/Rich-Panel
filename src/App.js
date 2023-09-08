import React from 'react'
import './App.css';
import Login from './components/jsx/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/jsx/Register';
import Welcome from './components/jsx/Welcome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
