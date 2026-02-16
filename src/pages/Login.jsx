import { useRef, useContext, useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLcSuel-pnuHhMMR2i5kuQC8IlJODbnt0",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Authentication failed!");
      }

      authCtx.login(data.idToken);
      navigate("/store");

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h3 className="text-center mb-4">Login</h3>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required ref={emailRef} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required ref={passwordRef} />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
