import axios from "axios";
export const createPost = (postData, history) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/community/post",
      postData
    );
    //dispatch({ type: "CREATE_POST", payload: data });
    dispatch({
      type: "CREATE_POST",
      payload: data,
    });
    dispatch(fetchPosts());
    history("/community");
  } catch (err) {
    console.log(err);
  }
};

export const fetchPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5000/community/");

    dispatch({
      type: "FETCH_POSTS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const postComment = (commentData) => async (dispatch) => {
  const { id, commentBody, userCommented, userId } = commentData;
  try {
    const { data } = await axios.patch(
      `http://localhost:5000/community/post/${id}`,
      { id, commentBody, userCommented, userId }
    );
    dispatch({ type: "POST_COMMENT", payload: data });
    dispatch(fetchPosts());
  } catch (err) {
    console.log(err);
  }
};

export const likePost = (id, userId) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:5000/community/post/like/${id}`,
      {
        userId,
      }
    );
    dispatch({ type: "LIKE_POST", payload: data });
    dispatch(fetchPosts());
    //dispatch(fetchAllQuestions());
  } catch (err) {
    console.log(err);
  }
};

export const likeComment = (id, userId, commentId) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:5000/community/comment/like/${id}`,
      {
        userId,
        commentId,
      }
    );
    dispatch({ type: "LIKE_COMMENT", payload: data });
    dispatch(fetchPosts());
    //dispatch(fetchAllQuestions());
  } catch (err) {
    console.log(err);
  }
};
