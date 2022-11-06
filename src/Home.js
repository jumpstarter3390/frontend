import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import second from './2ndgrade.jpg';
import third from './3rdgrade.jpg';
import fourth from './4thgrade.jpg';
import fifth from './5thgrade.jpg';


const Home = () => {
    return (
      <div>
        <h1 className="text-5xl text-center">Choose a Grade Level!</h1>

        <div className="layout">
          <Link to="/second" className="SecondGrade"><img src={second} /> </Link>
          <Link to="/third" className="ThirdGrade"><img src={third} /> </Link>
          <Link to="/fourth" className="FourthGrade"><img src={fourth} /> </Link>
          <Link to="/fifth" className="FifthGrade"><img src={fifth} /> </Link>
        </div>
      </div>

      );
    };
export default Home;
