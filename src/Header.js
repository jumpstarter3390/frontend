import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return(
    <div className="navbar">
        <div className="flex-1">
          <h4 className="h4">JumpStarter</h4>
          </div>

        <div className="bar">
              <ul className= "menu">
              <li><Link to="/" className="text-link">Home</Link></li>
              <li><Link to="/register" className="text-link">Register</Link></li>
              <li><Link to="/development" className="text-link">DevelopmentTeam</Link></li>
              </ul>
        </div>


    </div>
    
  );
};
export default Header;
