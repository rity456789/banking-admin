import { login, getUserInfo } from "../services/auth";
import Swal from "sweetalert2";

export const DoLogIn = (user) => {
  return (dispatch) => {
    dispatch(request(user));
    login(user).then(
      (res) => {
        console.log(res.data);
        if (res.data.returnCode === 0) {
          dispatch(failure(res.data.message));
        } else {
          dispatch(success(res.data.message));
          localStorage.setItem("ACCESS_TOKEN_KEY", res.data.data.accessToken);
          localStorage.setItem("REFRESH_TOKEN_KEY", res.data.data.refreshToken);
          dispatch(checkRoleOnly());
        }
      },
      (error) => {
        dispatch(failure("Can not connect to server"));
      }
    );
  };

  function request(user) {
    return {
      type: "LOG_IN_REQUEST",
      user,
    };
  }
  function success(message) {
    return {
      type: "LOG_IN_SUCCESS",
      message,
    };
  }
  function failure(message) {
    Swal.fire("Login failed", message, "error");
    return {
      type: "LOG_IN_FAILURE",
      message,
    };
  }
};

const checkRoleOnly = () => {
  return (dispatch) => {
    getUserInfo().then(
      (res) => {
        if (res.data.returnCode === 1) {
          let userInfo = res.data.data[0];
          console.log(userInfo);
          if (userInfo.role === "3") {
            window.location.href = "/dashboard";
          } else {
            localStorage.clear();
            Swal.fire(
              "Login failed",
              "Your permission can't login this page",
              "error"
            );
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

export const doGetUserInfo = () => {
  return (dispatch) => {
    getUserInfo().then(
      (res) => {
        if (res.data.returnCode === 1) {
          let userInfo = res.data.data[0];
          dispatch(success(userInfo));
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  function success(userInfo) {
    return {
      type: "GET_USER_INFO_SUCCESS",
      userInfo: userInfo,
    };
  }
};
