import { combineReducers } from "redux";

import LoginReducer from "./Login.reducer";
import UsersReducer from "./User.reducer";
const reducer = combineReducers({
  LoginReducer,
  UsersReducer,
});

export default reducer;
