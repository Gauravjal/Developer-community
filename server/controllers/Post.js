import mongoose from "mongoose";
import Post from "../models/Post.js";
import User from "../models/User.js";
import multer from "multer";
import path from "path";
import cloudinary from "cloudinary";
import fileupload from "express-fileupload";
cloudinary.config({
  cloud_name: "desodh4jk",
  api_key: "869481522154284",
  api_secret: "k-0UalSHVgH3Wa2aMp7Ppq-OwuU",
});
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
  if (
    file.mimetype.startsWith("image/") ||
    file.mimetype.startsWith("video/")
  ) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file format. Only images and videos are allowed."),
      false
    );
  }
};
const upload = multer({ storage, fileFilter });
let filles = [];
export const uploadFiles = async (req, res) => {
  filles=[];
  // console.log("files", req.files.files[0]);
  try {
    if (!req.files.files[0]) {
      const result = await cloudinary.uploader.upload(
        req.files.files.tempFilePath,
        {
          public_id: `${Date.now()}`,
          resource_type: "auto",
        }
      );
      console.log(result);
      filles.push(result.url);
    } else
      for (let i = 0; i < req.files.files.length; i++) {
        const result = await cloudinary.uploader.upload(
          req.files.files[i].tempFilePath,
          {
            public_id: `${Date.now()}`,
            resource_type: "auto",
          }
        );
        console.log(result);
        filles.push(result.url);
      }

    return res.status(200).json("Files uploaded successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
// upload.array("files")(req, res, (err) => {
//   if (err) {
//     console.error("Error uploading files:", err);
//     res.status(500).json({ error: "Failed to upload files" });
//   } else {
//     const files = req.files.map((file) => file.filename);

//     res.json({ files });
//   }
// });
// };

export const createPost = async (req, res) => {
  console.log(filles);
  let postData = req.body;
  postData.files=filles;
  const post = new Post({ ...postData });
  try {
    const savedPost = await post.save();
    res.status(200).json("Posted successfully");
  } catch (err) {
    console.log(err);
    res.status(409).json("could not create a Post :(");
  }
};

export const fetchPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch {
    res.status(404).json("Unable to get posts");
  }
};

export const postComment = async (req, res) => {
  const { id: _id } = req.params;
  const { commentBody, userCommented, userId } = req.body;
  console.log(req.body);
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: "No post with this id" });
    }
    const post = await Post.findById(_id);
    console.log();
    post.comments.push({
      commentBody,
      userCommented,
      commentedOn: new Date(),
      userId,
    });
    post.save();
    let temp = await mongoose.model("User").findById(userId);
    let user = await mongoose.model("User").findById(post.userId);
    user.notifications.push({
      date: Date.now(),
      val: "Comment",
      name: temp.name,
      avatar: temp.avatar,
    });
    user.save();
    return res.status(200).json(post);
  } catch {
    return res.status(404).json("Unable to post comment");
  }
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;
  const { userId } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: "No Post with this id" });
    }
    const post = await Post.findById(_id);
    console.log(post);
    if (post.likes.length > 0) {
      var Index = post.likes.findIndex((id) => id === String(userId));

      if (Index !== -1) {
        post.likes = post.likes.filter((id) => id !== String(userId));
      } else {
        post.likes.push(String(userId));
      }
    } else {
      post.likes.push(String(userId));
    }
    post.save();
    console.log(post.userId);
    let temp = await mongoose.model("User").findById(userId);
    let user = await mongoose.model("User").findById(post.userId);
    user.notifications.push({
      date: Date.now(),
      val: "likePost",
      name: temp.name,
      avatar: temp.avatar,
    });
    user.save();
    return res.status(200).json(post);
  } catch (err) {
    console.log(err);
    return res.status(404).json("unable to like a post");
  }
};

export const likeComment = async (req, res) => {
  const { id: _id } = req.params;
  const { userId, commentId } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: "No Post with this id" });
    }
    const post = await Post.findById(_id);
    console.log(post);
    for (let i = 0; i < post.comments.length; i++) {
      if (post.comments[i]._id.toString() === commentId) {
        var Index = post.comments[i].likes.findIndex(
          (id) => id === String(userId)
        );
        if (Index !== -1) {
          post.comments[i].likes = post.comments[i].likes.filter(
            (id) => id !== String(userId)
          );
        } else {
          post.comments[i].likes.push(String(userId));
          let temp = await mongoose.model("User").findById(userId);
          let user = await mongoose
            .model("User")
            .findById(post.comments[i].userId);
          user.notifications.push({
            date: Date.now(),
            val: "likeComment",
            name: temp.name,
            avatar: temp.avatar,
          });
          user.save();
        }
      }
    }
    post.save();

    return res.status(200).json(post);
  } catch (err) {
    console.log(err);
    return res.status(404).json("unable to like a post");
  }
};
