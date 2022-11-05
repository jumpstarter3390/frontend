import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return(
    <div className="navbar">
        <div className="flex-1">
          <a href="#" className= "btn">Jumpstarter</a>
          </div>

        <div className="flex-none">
              <ul className= "menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/development">DevelopmentTeam</Link></li>
              </ul>
        </div>
    </div>
    
  );
};
export default Header;
