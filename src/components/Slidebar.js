import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { doGetUserInfo } from "../actions/Login.action";

class SlidebarComponent extends Component {
  componentWillMount() {
    let { getUserInfo } = this.props;
    getUserInfo();
  }
  render() {
    return (
      <div>
        {/* Sidebar */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* Sidebar - Brand */}
          <NavLink
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="/dashboard"
          >
            <div className="sidebar-brand-text mx-3">Banking</div>
          </NavLink>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item">
            <NavLink className="nav-link row" to="/dashboard">
              <i className="fas fa-fw fa-tachometer-alt mr-2 col-2" />
              <span className="font-weight-700 col">Dashboard</span>
            </NavLink>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          <div className="sidebar-heading">USER MANAGEMENT</div>
          <li className="nav-item">
            <NavLink className="nav-link py-1 row" to="/users">
              <i className="fa fa-users mr-2 col-2"></i>
              <span className="font-weight-700 col">Users</span>
            </NavLink>
          </li>

          <hr className="sidebar-divider" />
          <div className="sidebar-heading">DEALING MANAGEMENT</div>
          <li className="nav-item">
            <NavLink className="nav-link py-1 row" to="/dealing ">
              <i className="fas fa-list mr-2 col-2 text-center"></i>
              <span className="font-weight-700 col">Dealings</span>
            </NavLink>
          </li>
        </ul>
        {/* End of Sidebar */}
      </div>
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

const Slidebar = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SlidebarComponent)
);

export default Slidebar;
