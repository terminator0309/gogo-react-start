import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";
import { baseUrl } from "./TempServerUrl/baseUrl";

export default function Login({ setHeader, regSuccess, setUserDetails }) {
  const [regUsers, setRegUsers] = useState({});
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
    /*
    const credentials = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
*/
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
    /*
    const credentials = {
      email: e.target.email.value,
      //password: e.target.password.value,
    };

    for (var i = 0; i < regUsers.length; i++) {
      if (
        regUsers[i].email === credentials.email
        //regUsers[i].password === credentials.password
      ) {
        console.log("Found a match");
        setValidUser(true);
        setUserDetails({
          firstname: regUsers[i].firstname,
          lastname: regUsers[i].lastname,
          email: regUsers[i].email,
        });
        break;
      }
    }*/
  }
  /*
  useEffect(() => {
    return fetch(baseUrl + "login")
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
      .then((users) => setRegUsers(users))
      .catch((error) => console.log(error));
  }, []);
*/
  return (
    <div>
      <div className="container">
        {validUser && <Redirect push to="/profile" />}
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
