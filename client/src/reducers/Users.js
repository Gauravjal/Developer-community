const Users = (state = null, action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default Users;
