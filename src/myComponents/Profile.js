import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

export default function Profile({ setHeader, userDetails }) {
  setHeader("Profile");

  return (
    <div className="container">
      <Card>
        <CardHeader>
          {userDetails ? (
            <h2 className="pt-4">You logged in successfully.</h2>
          ) : (
            <h2>Login to see you profile</h2>
          )}
        </CardHeader>
        <CardBody>
          <h1>Firstname: {userDetails.firstname}</h1>
          <br />
          <h1>Lastname: {userDetails.lastname}</h1>
          <h2>Email: {userDetails.email}</h2>
        </CardBody>
      </Card>
    </div>
  );
}
