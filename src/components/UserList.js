import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onGetUserList,
  selectRole,
  onChangeUserInfo,
  onDeleteUser,
} from "../actions/User.action";
import Dropdown from "react-dropdown";
import UserRow from "./UserRow";

class UserListComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { selectedRole } = this.props.UsersReducer;
    this.getUserDate(selectedRole);
  }

  getUserDate(selectedRole) {
    let { getUserList } = this.props;

    if (selectedRole === "Customer") {
      getUserList("1");
    } else if (selectedRole === "Employee") {
      getUserList("2");
    } else if (selectedRole === "Admin") {
      getUserList("3");
    }
  }

  changeUserInfo(user) {
    let username = user.username;
    let info = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      identity_number: user.identity_number,
    };
    let { changeUserInfo } = this.props;
    changeUserInfo(username, info);
  }

  deleteUser(id) {
    let { deleteUser } = this.props;
    let { selectedRole } = this.props.UsersReducer;
    deleteUser(id, selectedRole);
  }

  generateContent() {
    let { userList } = this.props.UsersReducer;
    let content = [];
    userList.forEach((value) => {
      content.push(
        <UserRow
          key={value.id}
          value={value}
          save={(user) => this.changeUserInfo(user)}
          delete={(id) => this.deleteUser(id)}
        ></UserRow>
      );
    });
    return content;
  }

  handleRoleChange(value) {
    let { changeRole } = this.props;
    let selectedRole = value.value;
    changeRole(selectedRole);
    this.getUserDate(selectedRole);
  }

  render() {
    let { selectedRole } = this.props.UsersReducer;
    return (
      <div className="container-fluid">
        {/* Page Heading */}
        <h1 className="h3 mb-2 text-gray-800">Users table</h1>
        <p className="mb-4">Users list of people who use INTERNET BANKING</p>
        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Users</h6>
          </div>
          <div className="card-body">
            <div className="row my-1">
              <div className="col-10"></div>
              <div className="col-2">
                <div className="input-group mb-3">
                  <Dropdown
                    options={["Customer", "Employee", "Admin"]}
                    onChange={(value) => this.handleRoleChange(value)}
                    value={selectedRole}
                    placeholder="Select a role"
                  />
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table
                className="col-12 table"
                id="dataTable"
                width="100%"
                cellSpacing={0}
              >
                <thead className="thead-dark">
                  <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Identity number</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.generateContent()}</tbody>
              </table>
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
    getUserList: (role) => {
      dispatch(onGetUserList(role));
    },
    changeRole: (role) => {
      dispatch(selectRole(role));
    },
    changeUserInfo: (username, info) => {
      dispatch(onChangeUserInfo(username, info));
    },
    deleteUser: (id, role) => {
      dispatch(onDeleteUser(id, role));
    },
  };
};

const UserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListComponent);

export default UserList;
