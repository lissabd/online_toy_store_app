import React, {useState} from 'react';
import Nav from './nav';
import Footer from './footer';
import Home from './home';
import Shop from './shop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Cart from './cart';
import About from './about';
import Login from './Login';
import Registration from './Registration';
const App = () => {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
