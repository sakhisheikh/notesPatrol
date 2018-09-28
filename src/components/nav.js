import React from 'react';
import { Link } from 'react-router-dom'
//import './nav.css'
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <strong>Scotch Auth</strong>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <Link to="/profile" className="navbar-item">
            Profile
          </Link>
          <div className="navbar-item join">
            Join
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;