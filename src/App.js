import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginContainer from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={LoginContainer}></Route>
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
