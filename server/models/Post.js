import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  postBody: { type: String, required: "post body is required" },
  likes: { type: [String], default: [] },
  userPosted: { type: String, required: "post must have author" },
  userId: { type: String },
  postedOn: { type: Date, default: Date.now },
  comments: [
    {
      commentBody: { type: String },
      userCommented: { type: String },
      userId: { type: String },
      commentedOn: { type: Date, default: Date.now },
      likes: { type: [String], default: [] },
    },
  ],
});

export default mongoose.model("Post", postSchema);
