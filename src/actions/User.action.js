import {
  getUserList,
  changeUserInfo,
  deleteUser,
} from "../services/userManager";
import Swal from "sweetalert2";

export const onGetUserList = (role) => {
  return (dispatch) => {
    dispatch(request());
    getUserList(role).then(
      (res) => {
        if (res.data.returnCode === 1) {
          dispatch(success(res.data.data));
        } else {
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
    Swal.fire("Load user list failed", message, "error");
    return {
      type: "LOAD_USERS_FAILURE",
    };
  }
};

export const onChangeUserInfo = (username, info) => {
  return (dispatch) => {
    changeUserInfo(username, info).then(
      (res) => {
        if (res.data.returnCode === 1) {
          Swal.fire("Updated!", "This user has been updated.", "success");
        } else {
          Swal.fire("Changed user info failed", res.data.message, "error");
        }
      },
      (error) => {
        Swal.fire(
          "Changed user info failed",
          "Can not connect to server",
          "error"
        );
      }
    );
  };
};

export const onDeleteUser = (id, role) => {
  return (dispatch) => {
    deleteUser(id).then(
      (res) => {
        if (res.data.returnCode === 1) {
          dispatch(onGetUserList(role));
          Swal.fire("Deleted!", "This user has been deleted.", "success");
        } else {
          Swal.fire("Load user list failed", res.data.message, "error");
        }
      },
      (error) => {
        Swal.fire(
          "Load user list failed",
          "Can not connect to server",
          "error"
        );
      }
    );
  };
};

export const selectRole = (role) => {
  return {
    type: "SELECTED_ROLE_CHANGED",
    role: role,
  };
};
