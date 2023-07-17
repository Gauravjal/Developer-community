import axios from "axios";
import { setGlobalAlert } from "./alert";
export const getCurrentUser = (data) => {
  return {
    type: "GET_CURRENT_USER",
    payload: data,
  };
};

export const updateCurrentUser = (userData) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      "https://stackoverflow-clone-mfrc.onrender.com/users/",
      userData
    );
    dispatch(getCurrentUser(data));
    dispatch(setGlobalAlert("Profile updated successfully"));
    setTimeout(() => {
      dispatch(setGlobalAlert(""));
    }, 5000); 
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updateAvatar = (formData,id) => async (dispatch) => {
  try {
    alert(id);
    console.log("famdata",formData);
    const { data } = await axios.post(
      `https://stackoverflow-clone-mfrc.onrender.com/users/avatar/${id}`,
      formData
    );
    dispatch(getCurrentUser(data));
    dispatch(setGlobalAlert("Avatar updated successfully"));
    setTimeout(() => {
      dispatch(setGlobalAlert(""));
    }, 5000); 
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
  } catch (err) {
    console.log(err);
  }
};
