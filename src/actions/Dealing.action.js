import { onGetDealingInfo, onGetBanks } from "../services/dealingManager";
import Swal from "sweetalert2";

export const getBanks = () => {
  return (dispatch) => {
    dispatch(request());
    onGetBanks().then(
      (res) => {
        if (res.data.returnCode === 0) {
          dispatch(failure(res.data.message));
        } else {
          let banks = res.data.data;
          let options = ["All partner banks"];
          banks.forEach((value) => {
            options.push(value.name);
          });
          dispatch(success(banks, options));
        }
      },
      (error) => {
        dispatch(failure("Can not connect to server"));
      }
    );
  };

  function request() {
    return {
      type: "GET_BANKS_REQUEST",
    };
  }
  function success(banks, options) {
    return {
      type: "GET_BANKS_SUCCESS",
      banks,
      options,
    };
  }
  function failure(message) {
    Swal.fire("Load banks failed", message, "error");
    return {
      type: "GET_BANKS_FAILED",
    };
  }
};

export const getDealingInfo = (time, from, to, name) => {
  return (dispatch) => {
    dispatch(request());
    onGetDealingInfo(time, from, to, name).then(
      (res) => {
        if (res.data.returnCode === 0) {
          dispatch(failure(res.data.message));
        } else {
          let dealings = res.data.data;
          let total = 0;
          dealings.forEach((value) => {
            total += value.money;
          });
          dispatch(success(dealings, total));
          console.log(res.data.data);
        }
      },
      (error) => {
        dispatch(failure("Can not connect to server"));
      }
    );
  };

  function request() {
    return {
      type: "GET_DEALINGS_REQUEST",
    };
  }
  function success(dealings, total) {
    return {
      type: "GET_DEALINGS_SUCCESS",
      dealings,
      total,
    };
  }
  function failure(message) {
    Swal.fire("Load dealings failed", message, "error");
    return {
      type: "GET_DEALINGS_FAILED",
    };
  }
};

export const selectBank = (bank) => {
  return {
    type: "SELECT_BANK",
    selectedBank: bank,
  };
};

export const selectFrom = (from) => {
  return {
    type: "SELECT_FROM",
    from,
  };
};

export const selectTo = (to) => {
  return {
    type: "SELECT_TO",
    to,
  };
};

export const selectTime = (time) => {
  return {
    type: "SELECT_TIME",
    time,
  };
};
