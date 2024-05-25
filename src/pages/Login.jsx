import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import {login} from "../api/authApi";
import {useNavigate} from "react-router-dom";

const Login = ({loginState}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
  
    const handleLoginClick = async () => {
        const response = await login({username, password});
        if(response.success) {
            loginState.setLoggedIn(true);
            //Temporary hard-coded string. need to find a long-term solution. Make sure it is in sync across the project.
            localStorage.setItem("IsLoggedIn", "true");
            navigate('/home');
        }
    };

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleLoginClick}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
