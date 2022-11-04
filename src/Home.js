import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import Image from './4th1.jpg';


const Home = () => {
    return (
      <div>
        <h1 className="text-5xl text-center">Homepage</h1>

        <div className="layout">
          <Link to="/second" className="SecondGrade"><img src={Image} /> </Link>
          <Link to="/third" className="ThirdGrade"><img src={Image} /> </Link>
          <Link to="/fourth" className="FourthGrade"><img src={Image} /> </Link>
          <Link to="/fifth" className="FifthGrade"><img src={Image} /> </Link>
        </div>
      </div>

      );
    };
export default Home;
