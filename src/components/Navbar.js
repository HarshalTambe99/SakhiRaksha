// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Women Safety</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/emergency">Emergency Contacts</Link>
        <Link to="/tips">Safety Tips</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
    </nav>
  );
};

export default Navbar;
