import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Facilities from './pages/facilities/facilities';
import Rooms from './pages/rooms/rooms';
import Contact from './pages/contact-us/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/facilities' element={<Facilities/>}/>
      <Route path='/rooms' element={<Rooms/>} />
      <Route path='contact-us' element={<Contact/>} />
    </Routes>
  </BrowserRouter>
);

