import axios from "axios";
export const postQuestion = (questionData, history) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/questions/question",
      questionData
    );
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllQuestions());
    history("/");
  } catch (err) {
    console.log(err);
  }
};

export const fetchAllQuestions = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "http://localhost:5000/questions/fetchAllQuestions"
    );

    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const postAnswer = (answerData) => async (dispatch) => {
  const { id, answerBody, userAnswered, userId } = answerData;
  try {
    const { data } = await axios.patch(
      `http://localhost:5000/answers/answer/${id}`,
      { id, answerBody, userAnswered, userId }
    );
    dispatch({ type: "POST_ANSWER", payload: data });
    dispatch(fetchAllQuestions());
  } catch (err) {
    console.log(err);
  }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/questions/question/${id}`);
    dispatch({ type: "FETCH_ALL_QUESTIONS" });
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const deleteAnswer = (id, answerId) => async (dispatch) => {
  try {
    await axios.patch(`http://localhost:5000/answers/answer/delete/${id}`, {
      answerId,
    });
    dispatch({ type: "DELETE_ANSWER" });
    dispatch(fetchAllQuestions());
  } catch (err) {
    console.log(err);
  }
};

export const voteQuestion = (id, value, userId) => async (dispatch) => {
  try {
    await axios.patch(`http://localhost:5000/questions/question/vote/${id}`, {
      value,
      userId,
    });
    dispatch(fetchAllQuestions());
  } catch (err) {
    console.log(err);
  }
};
