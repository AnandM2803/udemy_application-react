import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import CategoriesList from './CategoriesList';
import './NavBar.css';
import List from './List';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <span className='hamburger' onClick={toggleMenu}>
          <GiHamburgerMenu />
        </span>
        {isMenuOpen && <div className='list'><List /></div>}

        <div className='udemylogo'><img src='./logo-udemy.svg' alt="Udemy Logo" /></div>
        <div className='nav-links'>
          <div className="categories-container">
            <a href="#" className='categories'>Categories</a>
            <div className='categories-list'><CategoriesList /></div>
          </div>
          <div className="search-container">
            <IoSearchSharp className="icons1" />
            <input type='text' placeholder='Search for anything' />
          </div>
          <div><a href="#" className='plan'>Plans & Pricing</a></div>
          <div><a href="#" className='udemyBusiness'>Udemy Business</a></div>
          <div><a href="#" className='techOn'>Teach on Udemy</a></div>
        </div>
        <div className='icons'>
          <IoMdCart />
        </div>
        <div className='login'><a href="#" >Login</a></div>
        <div className='signup'><a href="#">Signup</a></div>
        <div className='icons1'><MdLanguage /></div>
      </nav>
    </div>
  );
}

export default NavBar;
