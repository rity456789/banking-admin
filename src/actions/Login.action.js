import { login } from "../services/auth";
import { history } from "../ultis/history";

export const DoLogIn = (user) => {
  return (dispatch) => {
    //dispatch(request(user));
    history.push("/dashboard");
    localStorage.setItem("user", JSON.stringify({ token: "asd123" }));
    // login(user).then(
    //   (res) => {
    //     if (res.info.code === 0) {
    //       dispatch(failure(res.info.message));
    //     } else if (res.info.code === 1) {
    //       dispatch(failure(res.info.message));
    //     } else {
    //       dispatch(success(res.info.message));
    //       history.push("/dashboard");
    //     }
    //   },
    //   (error) => {
    //     dispatch(failure("Can not connect to server"));
    //   }
    // );
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
    return {
      type: "LOG_IN_FAILURE",
      message,
    };
  }
};
