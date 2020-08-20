import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getBanks,
  getDealingInfo,
  selectBank,
  selectFrom,
  selectTo,
  selectTime,
} from "../actions/Dealing.action";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { prettierDate, prettierNumber } from "../ultis/helperFunction";

class DealingComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let { onGetBanks, onGetDealingInfo } = this.props;
    onGetBanks();
    let { selectedBank, time, from, to } = this.props.DealingReducer;
    if (selectedBank === "All partner banks") selectedBank = "";
    let realEndDay = new Date(to);
    realEndDay.setDate(to.getDate() + 1);
    onGetDealingInfo(time, from.getDate(), realEndDay.getDate(), selectedBank);
  }

  generateContent() {
    let { dealings } = this.props.DealingReducer;
    let content = [];
    dealings.forEach((value, index) => {
      content.push(
        <tr key={index}>
          <td>{value.sender}</td>
          <td>{value.receiver}</td>
          <td>{value.name}</td>
          <td>{prettierDate(value.time)}</td>
          {value.money > 0 ? (
            <td className="text-success">
              {prettierNumber(value.money) + " VNĐ"}
            </td>
          ) : (
            <td className="text-danger">
              {prettierNumber(-value.money) + " VNĐ"}
            </td>
          )}
        </tr>
      );
    });
    return content;
  }

  mappingBank(selectedBank) {
    let { banks } = this.props.DealingReducer;
    let rs = "";
    banks.forEach((bank) => {
      if (selectedBank === bank.name) rs = bank.bankcode;
    });
    return rs;
  }

  handleBankChanged(value) {
    let { onSelectBank, onGetDealingInfo } = this.props;
    let selectedBank = value.value;
    onSelectBank(selectedBank);
    if (selectedBank === "All partner banks") selectedBank = "";
    let { time, from, to } = this.props.DealingReducer;
    // change bank name to bank code and call api
    selectedBank = this.mappingBank(selectedBank);
    let realEndDay = new Date(to);
    realEndDay.setDate(to.getDate() + 1);
    onGetDealingInfo(time, from.getDate(), realEndDay.getDate(), selectedBank);
  }

  handleFromDateChanged(from) {
    let { onSelectFrom, onGetDealingInfo } = this.props;
    onSelectFrom(from);
    let { time, selectedBank, to } = this.props.DealingReducer;
    if (selectedBank === "All partner banks") selectedBank = "";
    // change bank name to bank code and call api
    selectedBank = this.mappingBank(selectedBank);
    let realEndDay = new Date(to);
    realEndDay.setDate(to.getDate() + 1);
    onGetDealingInfo(time, from.getDate(), realEndDay.getDate(), selectedBank);
  }
  handleToDateChanged(to) {
    let { onSelectTo, onGetDealingInfo } = this.props;
    onSelectTo(to);
    let { time, from, selectedBank } = this.props.DealingReducer;
    if (selectedBank === "All partner banks") selectedBank = "";
    // change bank name to bank code and call api
    selectedBank = this.mappingBank(selectedBank);
    let realEndDay = new Date(to);
    realEndDay.setDate(to.getDate() + 1);
    onGetDealingInfo(time, from.getDate(), realEndDay.getDate(), selectedBank);
  }

  render() {
    let {
      options,
      from,
      to,
      isLoadingBanks,
      isLoadingDealings,
      total,
      selectedBank,
    } = this.props.DealingReducer;
    return (
      <div className="container-fluid">
        {/* Page Heading */}
        <h1 className="h3 mb-2 text-gray-800">Dealings table</h1>
        <p className="mb-4">List of trade in this month</p>
        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Dealings</h6>
          </div>
          <div className="card-body">
            <div className="row my-1">
              <div className="col-6">
                <div className="dropdown">
                  {isLoadingBanks ? (
                    <div className="loading" key={1}>
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <Dropdown
                      options={options}
                      onChange={(value) => this.handleBankChanged(value)}
                      value={selectedBank}
                      placeholder="Select bank"
                    />
                  )}
                </div>
              </div>
              <div className="col-2"></div>
              <div className="col-4">
                <div style={{ marginBottom: "10px" }}>
                  Start date:{" "}
                  <DatePicker
                    selected={from}
                    dateFormat="dd/MM/yyyy"
                    selectsStart
                    startDate={from}
                    endDate={to}
                    // minDate={
                    //   new Date(
                    //     new Date().getFullYear(),
                    //     new Date().getMonth(),
                    //     1
                    //   )
                    // }
                    // maxDate={
                    //   new Date(
                    //     new Date().getFullYear(),
                    //     new Date().getMonth() + 1,
                    //     0
                    //   )
                    // }
                    onChange={(date) => this.handleFromDateChanged(date)}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  End date:{" "}
                  <DatePicker
                    selected={to}
                    dateFormat="dd/MM/yyyy"
                    selectsEnd
                    startDate={from}
                    endDate={to}
                    // minDate={
                    //   new Date(
                    //     new Date().getFullYear(),
                    //     new Date().getMonth(),
                    //     1
                    //   )
                    // }
                    // maxDate={
                    //   new Date(
                    //     new Date().getFullYear(),
                    //     new Date().getMonth() + 1,
                    //     0
                    //   )
                    // }
                    onChange={(date) => this.handleToDateChanged(date)}
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
                    <th>Sender</th>
                    <th>Receiver</th>
                    <th>Bank</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                </thead>
                {isLoadingDealings ? (
                  <div className="loading" key={1}>
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <tbody>{this.generateContent()}</tbody>
                )}
                {isLoadingDealings ? (
                  <div></div>
                ) : (
                  <tfoot>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>Total Trade</th>
                      <th>{prettierNumber(total) + " VNĐ"}</th>
                      <th></th>
                    </tr>
                  </tfoot>
                )}
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
    onGetBanks: () => {
      dispatch(getBanks());
    },
    onGetDealingInfo: (time, from, to, name) => {
      dispatch(getDealingInfo(time, from, to, name));
    },
    onSelectBank: (bank) => {
      dispatch(selectBank(bank));
    },
    onSelectFrom: (from) => {
      dispatch(selectFrom(from));
    },
    onSelectTo: (to) => {
      dispatch(selectTo(to));
    },
    onSelectTime: (time) => {
      dispatch(selectTime(time));
    },
  };
};

const Dealing = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DealingComponent)
);

export default Dealing;
