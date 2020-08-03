import axios from "../ultis/axios";

function login(user) {
  return axios.post("/api/auth/login", {
    ...user,
  });
}

function getUserInfo() {
  return axios.post("/api/users/me");
}

export { login, getUserInfo };
