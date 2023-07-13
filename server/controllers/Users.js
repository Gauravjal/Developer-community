import mongoose from "mongoose";
import User from "../models/User.js";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file format. Only images and videos are allowed."),
      false
    );
  }
};

const upload = multer({ storage, fileFilter });

export const updateAvatar = async (req, res) => {
  upload.single("file")(req, res, async (err) => {
    if (err) {
      console.error("Error uploading file:", err);
      res.status(500).json({ error: "Failed to upload file" });
    } else {
      try {
        const fileName = req.file.filename;
        const { id: _id } = req.params;

        let user = await mongoose.model("User").findById(_id);
        console.log(user);
        user.avatar = fileName;
        user.save();
        console.log("File uploaded successfully");
        res.json(user);
      } catch (err) {
        res.status(400).json("Error");
      }
    }
  });
};

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

export const followUser = async (req, res) => {
  var { id: _id } = req.params;
  var { userId: _userId } = req.body;
  console.log(_id);
  console.log(_userId);
  try {
    if (!mongoose.Types.ObjectId.isValid(_userId)) {
      return res.status(404).json({ message: "No user with this id" });
    }
    var user1 = await mongoose.model("User").findById(_userId);
    var Index1 = user1.following.findIndex((item) => item === String(_id));
    if (Index1 === -1) {
      user1.following.push(_id);
    } else {
      user1.following = user1.following.filter((id) => id !== String(_id));
    }

    user1.save();

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: "No user with this id" });
    }
    var user = await mongoose.model("User").findById(_id);
    var Index = user.followers.findIndex((item) => item === String(_userId));
    console.log(Index);
    if (Index === -1) {
      user.followers.push(_userId);
      user.notifications.push({
        val: "following",
        name: user1.name,
        avatar: user1.avatar,
      });
    } else {
      user.followers = user.followers.filter((item) => item !== _userId);
      console.log("Unfollowed");
    }
    user.save();

    return res.status(200).json(user);
  } catch {
    return res.status(404).json("Unable to get users");
  }
};
