import React, { useState } from 'react';
import './styles/nav.css';
import { Link } from 'react-router-dom';
import { SlBasket } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";

const Nav = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };
  return (
    <header>
      <div className="logo">
        <img src="./images/header-icon.png" alt="Логотип сайта" />
      </div>
      <div className="icons-menu">
        <Link to="/cart"> 
          <SlBasket className="cart-icon" />
        </Link>
        <Link to="/login">
          <AiOutlineUser className="user-icon" />
        </Link>
      </div>
      <div className="contact-bar">
        <p>CALL US: 123-456-7890 7 DAYS A WEEK FROM 9:00 AM TO 7:00 PM</p>
      </div>
      <div className="menu-container">
        <nav className={`main-menu ${isBurgerMenuOpen ? 'active' : ''}`}>
          <ul className={`nav-links ${isBurgerMenuOpen ? 'active' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </nav>
        <div className="burger-menu" onClick={toggleBurgerMenu}>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
