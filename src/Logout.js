import React from 'react';
import { Form, Button, Row } from "react-bootstrap";
import './register.css';
import axios from "axios";
import {useState, useEffect, useRef} from 'react';





export default function Logout(){

    const email = window.localStorage.getItem('Email');
    const [usid, setUsid] = useState(0);


    useEffect(() => {
        axios.get(`http://localhost:5000/register/${email}`)
        .then((response) => {
            setUsid(response.data._id);
        });

    }, []);

    const putUsloggedout = () => {

    }

    return (
        <div className= "logs">
            <h1 id = "message"> Currently logged in as </h1>
            <h1 id = "email"> {email} </h1>
            <Button id="logButton" onClick={e =>
                {        axios.put(`http://localhost:5000/register/update/${usid}`, {
            isLoggedIn: false,
        });
            window.location.reload(false);
            window.location.href = "/home"}
            }> Logout</Button>
     </div>
    );
};
