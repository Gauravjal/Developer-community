import axios from "axios";
export const fetchAllUsers = () => async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://stackoverflow-clone-mfrc.onrender.com/users"
      );
  
      dispatch({ type: "FETCH_ALL_USERS", payload: data });
    } catch (err) {
      console.log(err);
    }
  };
  