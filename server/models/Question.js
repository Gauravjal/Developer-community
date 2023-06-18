import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  questionTitle: { type: String, required: "Question title is required" },
  questionBody: { type: String, required: "Question body is required" },
  questionTags: { type: [String], required: "Question tags is required" },
  noOfAnswers: { type: Number, default: 0 },
  upvotes: { type: [String], default: [] },
  downvotes: { type: [String], default: [] },
  userPosted: { type: String, required: "Question must have author" },
  userId: { type: String },
  askedOn: { type: Date, default: Date.now },
  answer: [
    {
      answerBody: { type: String },
      userAnswered: { type: String },
      userId: { type: String },
      answeredOn: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model("Question", questionSchema);
