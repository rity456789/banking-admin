import React, { Component } from "react";
import { connect } from "react-redux";

class DashboardComponent extends Component {
  render() {
    return <div>Dashboard work !!!</div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);

export default Dashboard;
