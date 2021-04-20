const mongoose = require("mongoose");

// Here we create all callback Handelers for our routes
const PostMessage = require("../models/postMessage");

const getPost = async (req, res) => {
  // res.send("get post");
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.send(404).json(error);
  }
};

const createPost = (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({ ...post });
  try {
    newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json(error);
  }
};

//DELETE
const deletePost = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with id");
  await PostMessage.findByIdAndRemove(id);
  console.log("Delete");
  res.json("Post deleted successfuly!");
};

// UPDATE
const updatePost = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with id");
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { ...post, id },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};

//LIKE Button
const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with id");
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatedPost);
};

module.exports.getPost = getPost;
module.exports.createPost = createPost;
module.exports.deletePost = deletePost;
module.exports.updatePost = updatePost;
module.exports.likePost = likePost;
