const currentUser = (state = null, action) => {
    switch (action.type) {
      case "GET_CURRENT_USER":
        return action.payload;
      case "UPDATE_CURRENT_USER":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default currentUser;
  