import axios from 'axios'
export const getCurrentUser = (data) => {
  return {
    type: "GET_CURRENT_USER",
    payload: data,
  };
};


export const updateCurrentUser = (userData)=>async (dispatch) => {
    try{
      const {data}=await axios.patch("http://localhost:5000/users/",userData);
      dispatch(getCurrentUser(data));
      dispatch({type:"UPDATE_CURRENT_USER",payload:data});
    }
    catch(err){
      console.log(err);
    }
};