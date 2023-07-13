import { combineReducers } from "redux";
import auth from "./auth";
import Users from "./Users";
import question from "./question";
import post from "./post";
import currentUser from "./currentUser";
export default combineReducers({
  auth,
  Users,
  question,
  post,
  currentUser
});
