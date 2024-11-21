// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import About from './components/About';
import Contact from './components/Contact';
import MenuPage from './components/MenuPage';
import MenuFilter from './components/MenuFilter';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu/:id" element={<MenuFilter />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
