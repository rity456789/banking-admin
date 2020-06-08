import Axios from "axios";
import { MyStore } from "../";
import { history } from "./history";

let axios = Axios.create({
  baseURL: "http://localhost:8000/",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  //get token
  let token = localStorage.getItem("token");
  if (token) token = token.slice(1, -1);
  config.headers.Authorization = token ? `Bearer ${token}` : "";
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

      localStorage.setItem("user", null);
      localStorage.setItem("token", null);

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
