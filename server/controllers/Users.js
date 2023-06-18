import mongoose from "mongoose";
import User from "../models/User.js";
export const fetchUsers = async (req, res) => {
  try {
    const users = await mongoose.model("User").find();
    return res.status(200).json(users);
  } catch {
    return res.status(404).json("Unable to get users");
  }
};

export const editProfile = async (req, res) => {
  const { _id, name, about, location, tags } = req.body;
    console.log(_id);
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({ message: "No user with this id" });
      }
    const user = await mongoose.model("User").findById(_id);
    user.name = name;
    user.about = about;
    user.location = location;
    user.tags = tags;
    user.save();
    return res.status(200).json(user);
  } catch {
    return res.status(404).json("Unable to get users");
  }
};
