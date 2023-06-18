const Users = (state = null, action) => {
  switch (action.type) {
    case "GET_CURRENT_USER":
      return action.payload;
    case "UPDATE_CURRENT_USER":
      return action.payload;
    case "FETCH_ALL_USERS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default Users;
