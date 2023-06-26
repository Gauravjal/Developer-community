import express from "express";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: String },
  tags: [String],
  location: { type: String },
  subscription:{type:String,default:"Free"},
  joinedOn: { type: Date, default: Date.now },
});
export default mongoose.model("User", userSchema);
