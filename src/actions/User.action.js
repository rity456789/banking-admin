import { getUserList, changeUserInfo, deleteUser } from "../services/userManager";
import Swal from "sweetalert2";

export const onGetUserList = (role) => {
  return (dispatch) => {
    dispatch(request());
    getUserList(role).then(
      (res) => {
        if (res.data.returnCode === 1) {
          dispatch(success(res.data.data));
        }
        else {
          dispatch(failure(res.data.message));
        }
      },
      (error) => {
        dispatch(failure("Can not connect to server"));
      }
    );
  };
  function request() {
    return {
      type: "LOAD_USERS_REQUEST",
    };
  }
  function success(data) {
    return {
      type: "LOAD_USERS_SUCCESS",
      data,
    };
  }
  function failure(message) {
    Swal.fire("Load user list failed", message, "error")
    return {
      type: "LOAD_USERS_FAILURE",
    };
  }
};


export const onChangeUserInfo = (username, info) => {
  return (dispatch) => {
    dispatch(request());
    changeUserInfo(username, info).then(
      (res) => {
        if (res.data.returnCode === 1) {
          dispatch(success());
        }
        else {
          dispatch(failure(res.data.message));
        }
      },
      (error) => {
        dispatch(failure("Can not connect to server"));
      }
    );
  };
  function request() {
    return {
      type: "CHANGE_USER_INFO_REQUEST",
    };
  }
  function success() {
    return {
      type: "CHANGE_USER_INFO_SUCCESS",
    };
  }
  function failure(message) {
    Swal.fire("Load user list failed", message, "error")
    return {
      type: "CHANGE_USER_INFO_FAILURE",
    };
  }
};

export const selectRole = (role) => {
  return {
    type: "SELECTED_ROLE_CHANGED",
    role: role,
  };
};