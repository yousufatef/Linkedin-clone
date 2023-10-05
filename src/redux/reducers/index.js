import { combineReducers } from "redux";
import userReducer from "./userResucer";

const rootReducer = combineReducers({
  userState: userReducer,
});

export default rootReducer;
