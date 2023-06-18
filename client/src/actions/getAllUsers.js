import axios from "axios";
export const fetchAllUsers = () => async (dispatch) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/users"
      );
  
      dispatch({ type: "FETCH_ALL_USERS", payload: data });
    } catch (err) {
      console.log(err);
    }
  };
  