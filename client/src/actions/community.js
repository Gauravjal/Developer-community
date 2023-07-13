import axios from "axios";
import { fetchAllUsers } from "./getAllUsers";
import {getCurrentUser} from "./getCurrentUser";
export const createPost = (postData, history) => async (dispatch) => {
  try {
    console.log(postData);
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


// Action creator for creating a post
export const uploadFiles = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    const response = await axios.post("http://localhost:5000/community/post/upload", formData);
    console.log(response.data.files);
    return response.data.files;
    //dispatch({ type: UPLOAD_FILES_SUCCESS, payload: response.data });
    // Perform any additional actions after successful file upload
  } catch (error) {
    return "error";
    //dispatch({ type: UPLOAD_FILES_FAILURE, payload: error.response.data.error });
    // Perform any error handling or display error message to the user
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

export const followUser = (id, userId) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:5000/community/follow/${id}`,
      {
        userId,
      }
    );
    // dispatch({ type: "LIKE_COMMENT", payload: data });
    dispatch(fetchAllUsers());
    //dispatch(fetchAllQuestions());
  } catch (err) {
    console.log(err);
  }
};