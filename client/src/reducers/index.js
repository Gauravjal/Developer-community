import { combineReducers } from "redux";
import auth from "./auth";
import Users from "./Users";
import question from "./question"
export default combineReducers({
  auth,
  Users,
  question
});
