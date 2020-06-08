import axios from "../ultis/axios";

function login(user) {
  return axios.post("/login", {
    ...user,
  });
}

export { login };
