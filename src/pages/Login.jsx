import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('username');
    const [password, setPassword] = useState('password');
  
    const handleLoginClick = () => {
      onLogin(username, password);
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
