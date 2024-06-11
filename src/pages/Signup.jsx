import React, {useState} from "react";
import { Form, Button, Container } from 'react-bootstrap';
import {signup} from "../api/authApi";
import {useNavigate} from "react-router-dom";

const Signup = ({loginState}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigate = useNavigate();

    const handleSignupClick = async () => {
        const response = await signup({username, password, firstName, lastName});
        if(response.success) {
            navigate('/login');
        }
    }

    return (
        <Container className="mt-5">
            <h2>Signup</h2>
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
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

                <Button variant="primary" type="button" onClick={handleSignupClick}>
                    Signup
                </Button>
            </Form>
        </Container>
    );
};

export default Signup;
