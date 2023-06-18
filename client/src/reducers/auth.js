const authReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("user", JSON.stringify(action?.data));
      return { ...state, data: action?.data };
    case "LOG_OUT":
      localStorage.clear();
      return {...state,data:null};
    default:
      return null;
  }
};

export default authReducer;
