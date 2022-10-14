import React from 'react';
import './App.css';
import Navbar from './components/navbar/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Shopingcart from './pages/Shopingcart';
import Hero from './components/HeroSection/Hero'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Store' element={<Store />} />
          <Route path='/Shopingcart' element={<Shopingcart />} />
        </Routes>
    </Router>
   <Hero />
  </>
  );
}
//<Route path='/' exact element={Home} />
//<Route index element={<Home />} />
export default App;
