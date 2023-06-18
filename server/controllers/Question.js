import mongoose from "mongoose";
import Question from "../models/Question.js";
export const postQuestion = async (req, res) => {
  const questionData = req.body;
  const question = new Question({ ...questionData });
  try {
    const savedQuestion = await question.save();
    res.status(200).json("Question posted successfully");
  } catch (err) {
    console.log(err);
    res.status(409).json("could not post a qustion :(");
  }
};

export const fetchAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch {
    res.status(404).json("Unable to get questions");
  }
};

export const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    await Question.findByIdAndRemove(id);
    res.status(200).json("Successfully deleted a question");
  } catch {
    res.status(404).json("Unable to delete a question");
  }
};

export const voteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  const { value, userId } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: "No question with this id" });
    }
    const question = await Question.findById(_id);

    if (value === "upVote") {
      var downvoteIndex = question.downvotes.findIndex(
        (id) => id === String(userId)
      );
      
      if (downvoteIndex !== -1){
        question.downvotes = question.downvotes.filter(
          (id) => id !== String(userId)
        );
      }
      else{
      var upvoteIndex = question.upvotes.findIndex(
        (id) => id === String(userId)
      );
      if (upvoteIndex === -1) question.upvotes.push(String(userId));
      }
    } else {
      
      var upvoteIndex = question.upvotes.findIndex(
        (id) => id === String(userId)
      );
      if (upvoteIndex !== -1){
        question.upvotes = question.upvotes.filter(
          (id) => id !== String(userId)
        );
      }
      else{
      var downvoteIndex = question.downvotes.findIndex(
        (id) => id === String(userId)
      );
      if (downvoteIndex === -1) question.downvotes.push(String(userId));
      }
    }
    question.save();
    return res.status(200).json(question);
  } catch (err) {
    console.log(err);
    return res.status(404).json("unable to vote a question");
  }
};
