import "./Navbar.css"
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav className="Navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/register" className="navbar-link">
            Register
          </Link>
        </li>
      </ul>
    </nav>
    )
}

export default Navbar;