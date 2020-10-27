import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";
import { baseUrl } from "./ServerUrl/baseUrl";

export default function Login({ setHeader, regSuccess, setUserDetails }) {
  const [validUser, setValidUser] = useState(false);

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

    return fetch(baseUrl + "login", {
      method: "POST",
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((user) => {
        setUserDetails(user);
        setValidUser(true);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <div className="container">
        {/* redirecting to profile page if valid */}
        {validUser && <Redirect push to="/profile" />}

        {/* if coming from register page */}
        {regSuccess && <Alert />}

        <Card className="p-5 m-0">
          {/* Login Form*/}
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
