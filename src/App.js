import React from "react";
import "./App.css";

import { PrivateRoute, LoginRoute } from "./components/Routes";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import MainDashboard from "./components/MainDashboard";
import UserList from "./components/UserList";

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
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
