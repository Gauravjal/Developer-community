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
  avatar: {
    type: String,
    default:
      "https://t3.ftcdn.net/jpg/05/17/79/88/240_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg",
  },
  postedQuestions: [{ date: Date, questionId: mongoose.Schema.Types.ObjectId }],
  notifications: [
    {
      date: { type: Date },
      val: { type: String },
      name: { type: String },
      avatar: { type: String },
    },
  ],
});

export default mongoose.model("User", userSchema);
