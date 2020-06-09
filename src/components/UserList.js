import React, { Component } from "react";

export default class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        {/* Page Heading */}
        <h1 className="h3 mb-2 text-gray-800">Users table</h1>
        <p className="mb-4">Users list of people who use UBER TUTOR</p>
        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Users</h6>
          </div>
          <div className="card-body">
            <div className="row my-1">
              <div className="col-9">
                <button type="button" className="btn btn-success">
                  <i className="fa fa-plus"></i> | Add new
                </button>
              </div>
              <div className="col-3 text-right">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search ..."
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
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
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
