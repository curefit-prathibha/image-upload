// Header.js
import React from 'react';
import './Header.css'; // Make sure this path is correct
import logo from './curefit.jpeg'; // Make sure this path is correct

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header-logo" />
    </header>
  );
};

export default Header;
