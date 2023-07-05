const post = (state = null, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return { ...state };
    case "LIKE_POST":
      return {...state};
    case "LIKE_COMMENT":
      return {...state};
    case "FETCH_POSTS":
      return { ...state, data: action.payload };
    case "POST_COMMENT":
      return { ...state };
    case "DELETE_POST":
      return { ...state };
    case "DELETE_COMMENT":
      return { ...state };
    default:
      return state;
  }
};

export default post;
