import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";

import { baseUrl } from "./TempServerUrl/baseUrl";

export default function Register({ setHeader, regSuccess, setRegSuccess }) {
  setHeader("Register");
  const [showAlert, setShowAlert] = useState(false);

  const Alert = () => {
    return (
      <div className="alert alert-danger">
        Email ID used is already registered.
      </div>
    );
  };

  function handleSubmit(e) {
    // alert(e.target.email.value);
    e.preventDefault();

    //Registering User if Valid(using email ID as key)
    return fetch(baseUrl + "register", {
      method: "POST",
      body: JSON.stringify({
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
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
      .then((response) => {
        console.log("POSTED : " + response);
        setRegSuccess(true);
        setShowAlert(false);
      })
      .catch((error) => {
        console.log("post Feedback : " + error.message);
        setShowAlert(true);
      });
  }
  return (
    <div className="container">
      {regSuccess && <Redirect push to="/login" />}
      {showAlert && <Alert />}
      <Card className="p-5 m-0">
        {/* Registration Form*/}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="firstname">First name : </Label>
            <Input name="firstname" id="firstname" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastname">Last name : </Label>
            <Input name="lastname" id="lastname" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email: </Label>
            <Input type="email" name="email" id="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password : </Label>
            <Input type="password" name="password" id="password" required />
          </FormGroup>
          <FormGroup>
            <Button type="submit">Register</Button>
          </FormGroup>
        </Form>
        <center className="mt-2">
          Already have an Account? <Link to="login">Click here</Link>
        </center>
      </Card>
    </div>
  );
}
