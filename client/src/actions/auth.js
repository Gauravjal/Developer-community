import axios from "axios";
import { getCurrentUser } from "./getCurrentUser";
// const API = axios.create({ BaseUrl: "https://localhost:5000/users" });

export const signUp = (AuthData, history) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://stackoverflow-clone-mfrc.onrender.com/users/signUp",
      AuthData
    );

    dispatch({ type: "AUTH", data });
    // console.log(JSON.parse(localStorage.getItem("user")).res);
    dispatch(getCurrentUser(JSON.parse(localStorage.getItem("user")).res));
    history("/");
  } catch (err) {
    console.log(err);
  }
};

export const login = (AuthData, history) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://stackoverflow-clone-mfrc.onrender.com/users/login",
      AuthData
    );
    dispatch({ type: "AUTH", data });
    dispatch(getCurrentUser(JSON.parse(localStorage.getItem("user")).res));
    history("/");
  } catch (err) {
    console.log(err);
  }
};

export const logout = (navigate) => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
  dispatch(getCurrentUser(null));
  navigate("/");
};
