import axios from "axios";
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
      `http://localhost:5000/users/avatar/${id}`,
      formData
    );
    dispatch(getCurrentUser(data));
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
  } catch (err) {
    console.log(err);
  }
};
