import axios from "../ultis/axios";

function getUserList(role) {
  return axios.get("/api/users/" + role);
}

function changeUserInfo(username, info) {
  return axios.put("/api/users/" + username, {
    ...info,
  });
}

function deleteUser(id) {
  return axios.delete("/api/users/" + id);
}

export { getUserList, changeUserInfo, deleteUser };
