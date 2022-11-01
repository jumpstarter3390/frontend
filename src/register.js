import React from 'react';
import { Form, Button, Row } from "react-bootstrap";
import './register.css';

const Register = () => {
    return (
        <div className="center" >
      <Row className="head">
            <h2>Jumpstarter</h2>
        </Row>
        <Row className="mb-3">

            <Form >
                {/* email */}
                <Form.Group controlId="formBasicEmail" className="form-horizontal">
                  <Form.Label >Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" className="w-80" />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword" className="form-horizontal">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" className="w-80"/>
                </Form.Group>
                <Form.Group controlId="formBasicButton" className="form-horizontal">
                {/* submit button */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                </Form.Group>
            </Form>
         </Row>
         </div>
    );
};
export default Register;
