import React from 'react';
import { Form, Button, Row } from "react-bootstrap";
import './register.css';
import axios from "axios";





export default function Register(){

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [register, setRegister] = React.useState(false);

    const handleSubmit = (e) => {

      const configuration = {
      method: "post",
      url: "http://localhost:5000/register",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
        .then((result) => {
           setRegister(true);
        })
        .catch((error) => {
            error = new Error();
        })

          {/* display success message */}

    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    }


    return (
        <div className="center" >
      <Row className="head">
            <h2>Jumpstarter</h2>
        </Row>
        <Row className="mb-3">

            <Form onSubmit={(e)=>handleSubmit(e)}>
                {/* email */}
                <Form.Group controlId="formBasicEmail" className="form-horizontal">
                  <Form.Label >Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" className="w-80" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword" className="form-horizontal">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" className="w-80"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicButton" className="form-horizontal">
                {/* submit button */}
                <Button variant="primary" type="submit"
                        onClick={(e)=> handleSubmit(e)}>
                  Submit
                </Button>
                    {register ? (
             <p className="text-success">You Are Registered Successfully</p>
              ) : (
            <p className="text-danger">You Are Not Registered</p>
             )}
                </Form.Group>
            </Form>
         </Row>
         </div>
    );
};
