import React from 'react';
import "./developers.css";
import Geno from './Geno.jpg';
import David from './David.jpg';
import Udai from './Udai.jpg';


const Team = () => {
    return (
      <div>
        <h1 className="menuheader">Development Team</h1>
        <h1 className="Geno">Geno Zepeda</h1>
        <h1 className="David">David Mesa</h1>
        <h1 className="Udai">Udai Singh</h1>
        <div className="layoutdev">
        <img id = "dev" src={Geno} alt={"Geno "}/>
          <img id="dev"  src={David}  alt={"David"}/>
        <img  id="dev" src={Udai} alt={"Udai"} />
        </div>
      </div>

      );
    };
export default Team;
