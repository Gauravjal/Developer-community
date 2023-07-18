import axios from "axios";
import { getCurrentUser } from "./getCurrentUser";
import { setGlobalAlert } from "./alert";
// const API = axios.create({ BaseUrl: "https://localhost:5000/users" });

export const signUp = (AuthData, history) => async (dispatch) => {
  try {
    dispatch(setGlobalAlert("Loding...."));
    const { data } = await axios.post(
      "https://stackoverflow-clone-mfrc.onrender.com/users/signUp",
      AuthData
    );

    dispatch({ type: "AUTH", data });
    // console.log(JSON.parse(localStorage.getItem("user")).res);
    dispatch(getCurrentUser(JSON.parse(localStorage.getItem("user")).res));
    history("/");
    dispatch(setGlobalAlert("Welcome to Stackoverflow community"));
    setTimeout(() => {
      dispatch(setGlobalAlert(""));
    }, 5000);
  } catch (err) {
    dispatch(setGlobalAlert(err.response.data.messsage));
    setTimeout(() => {
      dispatch(setGlobalAlert(""));
    }, 5000);
    console.log(err.response.data.messsage);
  }
};

export const login = (AuthData, history) => async (dispatch) => {
  try {
    dispatch(setGlobalAlert("Loding...."));
    const { data } = await axios.post(
      "https://stackoverflow-clone-mfrc.onrender.com/users/login",
      AuthData
    );
    dispatch({ type: "AUTH", data });
    dispatch(getCurrentUser(JSON.parse(localStorage.getItem("user")).res));
    history("/");
    dispatch(setGlobalAlert("Welcome back"));
    setTimeout(() => {
      dispatch(setGlobalAlert(""));
    }, 5000);
  } catch (err) {
    dispatch(setGlobalAlert(err.response.data.message));
    setTimeout(() => {
      dispatch(setGlobalAlert(""));
    }, 5000);
    console.log(err);
  }
};

export const logout = (navigate) => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
  dispatch(getCurrentUser(null));
  navigate("/");
};
