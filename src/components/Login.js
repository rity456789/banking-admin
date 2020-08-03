import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { DoLogIn } from "../actions/Login.action";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this); // handle submit
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: "",
      password: "",
    };
    user.username = this.refs.username.value;
    user.password = this.refs.password.value;
    console.log(user);
    let { onLogin } = this.props;
    onLogin(user);
  }

  render() {
    let { isLoading } = this.props.LoginReducer;
    return (
      <div>
        <div className="container">
          {/* Outer Row */}
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  {/* Nested Row within Card Body */}
                  <div className="row">
                    <div className="col">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">ADMIN LOGIN</h1>
                        </div>
                        <form className="user" onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-user"
                              id="username"
                              name="username"
                              placeholder="Username"
                              ref="username"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              name="password"
                              id="password"
                              placeholder="Password"
                              ref="password"
                            />
                          </div>
                          {isLoading ? (
                            <div class="d-flex justify-content-center">
                              <div
                                class="spinner-border text-primary"
                                role="status"
                              >
                                <span class="sr-only">Loading...</span>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                          <button
                            className="btn btn-primary btn-user btn-block mt-5 font-weight-bold font-20"
                            type="submit"
                          >
                            Login
                          </button>
                        </form>
                        <hr />
                        {/* <div className="text-center">
                          <NavLink className="small" to="/register">
                            Create an Account!
                          </NavLink>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => {
      dispatch(DoLogIn(user));
    },
  };
};

const Login = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
);

export default Login;
