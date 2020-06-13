import React from "react";
import "./App.css";

import { PrivateRoute, LoginRoute } from "./components/Routes";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <LoginRoute path="/login" exact component={Login}></LoginRoute>
          <Route path="/dashboard" exact component={Dashboard}></Route>
          {/* <Redirect to="/login" /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
