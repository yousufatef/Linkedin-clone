import { combineReducers } from "redux";
import userReducer from "./userResucer";
import articlesReducer from "./articlesReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articlesState: articlesReducer,
});

export default rootReducer;
