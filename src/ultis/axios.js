import Axios from "axios";
import { MyStore } from "../";
import { history } from "./history";

let axios = Axios.create({
  baseURL: "https://bankdbb.herokuapp.com/",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  //get token
  let token = localStorage.getItem("ACCESS_TOKEN_KEY");
  config.headers.authorization = token ? `Bearer ${token}` : "";
  config.headers.x_accessToken = token ? token : "";
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      console.log(error.response);
      // alert(error.response);
      alert("Đăng nhập đi ba");

      localStorage.setItem("ACCESS_TOKEN_KEY", null);
      localStorage.setItem("REFRESH_TOKEN_KEY", null);

      // history.push("/login");
      window.location.href = "./login";
      MyStore.dispatch({
        type: "USER_LOG_OUT",
      });
    }
    return Promise.reject(error);
  }
);

export default axios;
