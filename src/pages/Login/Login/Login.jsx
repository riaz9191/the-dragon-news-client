import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AUthProvider";

const Login = () => {
  const location = useLocation();
  console.log("login location", location);
  const from = location.state?.from?.pathname || "/category/0";
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((res) => {
        // Signed in
        const user = res.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container className="mx-auto w-25">
      <h3 className="mt-3 text-center mb-3">Please Login</h3>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Dont’t Have An Account ? <Link to="/register"> Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
