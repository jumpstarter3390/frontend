import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import {useState, useEffect, useRef} from 'react';
import axios from "axios";

const Header = () => {

    const [usemail, setUsemail] = useState("");
    const [usglevel, setUsglevel] = useState("");
    const [usid, setUsid] = useState(0);
    const [usscore, setUsscore] = useState(0);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const email = window.localStorage.getItem('Email');





    useEffect(() => {
    axios.get(`http://localhost:5000/register/${email}`)
      .then((response) => {
        console.log(response.data.email);
        setUsemail(response.data.email);
        setUsscore(response.data.score);
        setUsglevel(response.data.glevel);
        setUsid(response.data._id);
        setIsLoggedin(response.data.isLoggedIn);
      });
    }, []);



  if (!isLoggedin)
  {
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
                <li><Link to="/Login" className="text-link">Login</Link></li>
                </ul>
          </div>

        
      </div>

    );
  }
  else
  {
        return(
      <div className="navbar">
      
          <div className="flex-1">
            <h4 className="h4">JumpStarter</h4>
            </div>

          <div className="bar">
                <ul className= "menu">
                <li><Link to="/" className="text-link">Home</Link></li>
                <li><Link to="/register" className="text-link">EditAccount </Link></li>
                <li><Link to="/development" className="text-link">DevelopmentTeam</Link></li>
                <li><Link to="/Logout" className="text-link">Logout</Link></li>
                </ul>
          </div>

        
      </div>

    );
  }
};
export default Header;
