import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { doGetUserInfo } from "../actions/Login.action";

class TopbarComponent extends Component {
  componentWillMount() {
    let { getUserInfo } = this.props;
    getUserInfo();
  }
  render() {
    let { userInfo } = this.props.LoginReducer;

    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* Sidebar Toggle (Topbar) */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars" />
        </button>

        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block" />
          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-3 d-none d-lg-inline text-gray-600 small">
                Welcome {userInfo.name}
              </span>
              <div
                className="dropdown-item cursor-pointer"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/login";
                }}
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </div>
            </a>
            {/* Dropdown - User Information */}
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: () => {
      dispatch(doGetUserInfo());
    },
  };
};

const Topbar = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopbarComponent)
);

export default Topbar;
