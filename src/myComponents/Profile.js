import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export default function Profile({ setHeader, userDetails }) {
  setHeader("Profile");

  const SuccessAlert = () => {
    return <div className="alert alert-success">You have been logged in.</div>;
  };

  const BadAlert = () => {
    return (
      <div className="alert alert-danger">
        Login to see you profile. To LOGIN{" "}
        <Link to="/login" style={{ textDecoration: "underline" }}>
          click here
        </Link>
      </div>
    );
  };

  return (
    <div className="container">
      {userDetails.firstname !== "" ? (
        <>
          <SuccessAlert />
          <Card>
            <center>
              <img
                src={require("../assets/images/profileImage.png")}
                width="100px"
                height="100px"
                alt="profile"
              />
            </center>

            <CardBody>
              <center>
                <h1>{userDetails.firstname}</h1> <h1>{userDetails.lastname}</h1>
                <h2>Email: {userDetails.email}</h2>
              </center>
            </CardBody>
          </Card>
        </>
      ) : (
        <BadAlert />
      )}
    </div>
  );
}
