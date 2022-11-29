import React from 'react';
import "./developers.css";
import second from './3rdgrade.jpg';
import David from './David.jpg';
import fourth from './3rdgrade.jpg';


const Team = () => {
    return (
      <div>
        <h1 className="menuheader">Development Team</h1>
        <h1 className="Geno">Geno Zepeda</h1>
        <h1 className="David">David Mesa</h1>
        <h1 className="Udai">Udai Singh</h1>
        <div className="layoutdev">
        <img id = "dev" src={second} alt={"Geno "}/>
          <img id="dev"  src={David}  alt={"David"}/>
        <img  id="dev" src={fourth} alt={"Udai"} />
        </div>
      </div>

      );
    };
export default Team;
