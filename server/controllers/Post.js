import mongoose from "mongoose";
import Post from "../models/Post.js";
export const createPost = async (req, res) => {
  const postData = req.body;
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
    return res.status(200).json(post);
  } catch (err) {
    console.log(err);
    return res.status(404).json("unable to like a post");
  }
};


export const likeComment = async (req, res) => {
    const { id: _id } = req.params;
    const { userId,commentId } = req.body;
    try {
      if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({ message: "No Post with this id" });
      }
      const post = await Post.findById(_id);
      console.log(post);
      for(let i=0;i<post.comments.length;i++){
        if(post.comments[i]._id.toString()===commentId){
        var Index = post.comments[i].likes.findIndex((id) => id === String(userId));
        if (Index !== -1) {
          post.comments[i].likes = post.comments[i].likes.filter((id) => id !== String(userId));
        } else {
          post.comments[i].likes.push(String(userId));
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