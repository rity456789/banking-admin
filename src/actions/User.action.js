import { loadUserData } from "../services/userManager";
import { history } from "../ultis/history";

export const loadData = (queryOption) => {
  return (dispatch) => {
    //dispatch(request(queryOption));
    /*
        us.loadUserData(user)
            .then(
                (res) => {
                    dispatch(success(res));
                },
                (error) => {
                    dispatch(failure('Can not connect to server'));
                }
            );
            */
    let res = loadUserData(queryOption);
    console.log(res);
    dispatch(success(res));
  };

  function request(user) {
    return {
      type: "LOAD_USERS_REQUEST",
      user,
    };
  }
  function success(data) {
    return {
      type: "LOAD_USERS_SUCCESS",
      data,
    };
  }
  function failure(message) {
    return {
      type: "LOAD_USERS_FAILURE",
      message,
    };
  }
};
