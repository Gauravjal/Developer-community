import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: String },
  tags: [String],
  location: { type: String },
  subscription: { type: String, default: "Free" },
  joinedOn: { type: Date, default: Date.now },
  followers: [{ type: String, default: [] }],
  following: [{ type: String, default: [] }],
  avatar: { type: String, default: "files-1688895982592-193750304.png" },
  postedQuestions: [{ date: Date, questionId: mongoose.Schema.Types.ObjectId }],
  notifications: [
    {
      date: { type: Date },
      val: { type: String },
      name: { type: String },
      avatar:{type:String},
    },
  ],
});

export default mongoose.model("User", userSchema);
