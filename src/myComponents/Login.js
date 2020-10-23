import React from "react";
import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";

export default function Login({ setHeader, regSuccess }) {
  setHeader("Login");
  const Alert = () => {
    return (
      <div className="alert alert-success">
        You have been Successfully registered. Login to continue.
      </div>
    );
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div className="container">
        {regSuccess && <Alert />}
        <Card className="p-5 m-0">
          {/* Registration Form*/}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email: </Label>
              <Input type="email" name="email" id="email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password : </Label>
              <Input type="password" name="password" id="password" required />
            </FormGroup>
            <FormGroup>
              <Button type="submit">Login</Button>
            </FormGroup>
          </Form>
        </Card>
      </div>
    </div>
  );
}
