import React from "react";
import { Route, Redirect } from "react-router-dom";
import Slidebar from "./Slidebar";
import TopBar from "./Topbar";
import Footer from "./Footer";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        let user = localStorage.getItem("ACCESS_TOKEN_KEY");
        if (user) {
          return (
            <div id="page-top">
              <div id="wrapper">
                <Slidebar></Slidebar>
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                  <TopBar></TopBar>
                  <div id="content">
                    <Component {...props}></Component>
                  </div>
                </div>
                {/* End of Content Wrapper */}
              </div>
            </div>
          );
        } else {
          localStorage.removeItem("ACCESS_TOKEN_KEY");
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            ></Redirect>
          );
        }
      }}
    ></Route>
  );
};

export const LoginRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          // kiểm tra xem đã có thông tin người dùng trong localStorage chưa
          localStorage.getItem("ACCESS_TOKEN_KEY") ? (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: {
                  from: props.location,
                },
              }}
            ></Redirect>
          ) : (
            <Component {...props}></Component>
          )
        );
      }}
    ></Route>
  );
};
