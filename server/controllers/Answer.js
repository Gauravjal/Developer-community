import mongoose from "mongoose";
import Question from "../models/Question.js";

export const postAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { noOfAnswers, answerBody, userAnswered, userId } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: "No question with this id" });
    }
    const question = await Question.findById(_id);

    question.answer.push({
      answerBody,
      userAnswered,
      answeredOn: new Date(),
      userId,
    });
    question.noOfAnswers = question.answer.length;
    question.save();
    return res.status(200).json(question);
  } catch {
    return res.status(404).json("Unable to post answer");
  }
};

export const deleteAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { answerId } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: "No question with this id" });
    }
    const question = await Question.findById(_id);

    question.answer = question.answer.filter((obj) => obj.id !== answerId);
    question.noOfAnswers = question.answer.length;
    question.save();
    return res.status(200).json(question);
  } catch {
    return res.status(404).json("Unable to delete answer");
  }
};
