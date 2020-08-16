import React from "react";
import "./App.css";

import { PrivateRoute, LoginRoute } from "./components/Routes";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import MainDashboard from "./components/MainDashboard";
import UserList from "./components/UserList";
import Dealing from "./components/Dealing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <LoginRoute path="/login" exact component={Login}></LoginRoute>
          <PrivateRoute
            path="/dashboard"
            exact
            component={MainDashboard}
          ></PrivateRoute>
          <PrivateRoute path="/users" exact component={UserList}></PrivateRoute>
          <PrivateRoute
            path="/dealings"
            exact
            component={Dealing}
          ></PrivateRoute>

          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
