import React, { Component } from "react";
import Swal from "sweetalert2";

export default class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      user: this.props.value,
    };
  }
  editUser(id) {
    console.log("Edit user: ", id);
    this.setState({ isEditing: true });
  }

  saveUser(id) {
    console.log("Save user: ", id);
    Swal.fire({
      title: "Warning!!!",
      text: "Are you sure to update this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!!",
    }).then((result) => {
      if (result.value) {
        this.setState({ isEditing: false });
        this.props.save(this.state.user);
      }
    });
  }

  cancelEditUser(id) {
    console.log("cancel edit user: ", id);
    let { value } = this.props;
    this.setState({ isEditing: false, user: value });
  }

  deleteUser(id) {
    console.log("Delete user: ", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        this.props.delete(id);
      }
    });
  }

  render() {
    let content = "";
    let { isEditing, user } = this.state;
    isEditing
      ? (content = (
          <tr>
            <td>{user.id}</td>
            <td>
              {/* <input
                type="text"
                defaultValue={user.username}
                id="username_input"
                onChange={() => {
                  let value = document.getElementById("username_input").value;
                  let { user } = this.state;
                  user = {
                    ...user,
                    username: value,
                  };
                  this.setState({ user: user });
                }}
              /> */}
              {user.username}
            </td>
            <td>
              <input
                type="text"
                defaultValue={user.name}
                id="name_input"
                onChange={() => {
                  let value = document.getElementById("name_input").value;
                  let { user } = this.state;
                  user = {
                    ...user,
                    name: value,
                  };
                  this.setState({ user: user });
                }}
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={user.email}
                id="email_input"
                onChange={() => {
                  let value = document.getElementById("email_input").value;
                  let { user } = this.state;
                  user = {
                    ...user,
                    email: value,
                  };
                  this.setState({ user: user });
                }}
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={user.phone}
                id="phone_input"
                onChange={() => {
                  let value = document.getElementById("phone_input").value;
                  let { user } = this.state;
                  user = {
                    ...user,
                    phone: value,
                  };
                  this.setState({ user: user });
                }}
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={user.identity_number}
                id="identity_number_input"
                onChange={() => {
                  let value = document.getElementById("identity_number_input")
                    .value;
                  let { user } = this.state;
                  user = {
                    ...user,
                    identity_number: value,
                  };
                  this.setState({ user: user });
                }}
              />
            </td>
            <td
              className="cursor-pointer"
              onClick={() => this.saveUser(user.id)}
            >
              <i className="fa fa-save"></i>
            </td>
            <td
              className="cursor-pointer"
              onClick={() => this.cancelEditUser(user.id)}
            >
              <i className="fa fa-times"></i>
            </td>
          </tr>
        ))
      : (content = (
          <tr key={user}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.identity_number}</td>
            <td
              className="cursor-pointer"
              onClick={() => this.editUser(user.id)}
            >
              <i className="fa fa-edit"></i>
            </td>
            <td
              className="cursor-pointer"
              onClick={() => this.deleteUser(user.id)}
            >
              <i className="fa fa-trash"></i>
            </td>
          </tr>
        ));
    return content;
  }
}
