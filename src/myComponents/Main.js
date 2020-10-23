import React, { useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Topnav from "../containers/navs/Topnav";

const ViewWelcome = React.lazy(() => import("./Welcome"));
const ViewRegister = React.lazy(() => import("./Register"));
const ViewLogin = React.lazy(() => import("./Login"));

export default function Main() {
  const [regSuccess, setRegSuccess] = useState(false);
  const [header, setHeader] = useState("Welcome");
  return (
    <div>
      <Topnav header={header} />
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <ViewWelcome setHeader={setHeader} />
            </Route>
            <Route path="/register" exact>
              <ViewRegister
                setHeader={setHeader}
                regSuccess={regSuccess}
                setRegSuccess={setRegSuccess}
              />
            </Route>

            <Route path="/login" exact>
              <ViewLogin
                setHeader={setHeader}
                regSuccess={regSuccess}
                setRegSuccess={setRegSuccess}
              />
            </Route>
            <Redirect to="/error" />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}
