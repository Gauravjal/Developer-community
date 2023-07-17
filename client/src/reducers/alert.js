const alert = (state = null, action) => {
    switch (action.type) {
      case "SET_GLOBAL_ALERT":
        return { ...state, data: action.payload };




      default:
        return state;
    }
  };
  
  export default alert;
  