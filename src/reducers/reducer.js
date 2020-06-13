import { combineReducers } from "redux";

import LoginReducer from "./Login.reducer";
import DashboardReducer from "./Dashboard.reducer";
import UsersReducer from "./User.reducer";
const reducer = combineReducers({
  LoginReducer,
  DashboardReducer,
  UsersReducer,
});

export default reducer;
