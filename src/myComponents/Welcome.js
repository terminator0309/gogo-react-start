import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function Welcome({ setHeader }) {
  setHeader("Welcome");
  return (
    <div className="">
      <div className="position-relative d-flex justify-content-center align-items-center flex-column">
        <h2 className="display-3">Lets get started</h2>
        <div className="flex-row">
          <span className="m-2">
            <Link to="register">
              <Button>Register</Button>
            </Link>
          </span>
          <span className="m-2">
            <Link to="login">
              <Button style={{ background: "grey", border: "black" }}>
                Login
              </Button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
