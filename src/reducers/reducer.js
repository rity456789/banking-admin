import { combineReducers } from "redux";

import LoginReducer from "./Login.reducer";
import DashboardReducer from "./Dashboard.reducer";

const reducer = combineReducers({
  LoginReducer,
  DashboardReducer,
});

export default reducer;
