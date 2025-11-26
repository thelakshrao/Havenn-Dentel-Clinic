import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import MainAbout from './components/MainAbout';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<MainAbout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
