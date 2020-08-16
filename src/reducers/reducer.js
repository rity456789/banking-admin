import { combineReducers } from "redux";

import LoginReducer from "./Login.reducer";
import UsersReducer from "./User.reducer";
import DealingReducer from "./Dealing.reducer";
const reducer = combineReducers({
  LoginReducer,
  UsersReducer,
  DealingReducer,
});

export default reducer;
