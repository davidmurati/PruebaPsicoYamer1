import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
     
      <ul>
        <li><a href="/" exact>Inicio</a></li>
        <li><a href="/Test1">Test1</a></li>
        <li><a href="/Test2">Test2</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;