const express = require("express");
const router = express.Router();
const postFunc = require("../controllers/posts");
// http://localhost:5000/posts/

router.get("/", postFunc.getPost);
router.post("/", postFunc.createPost);
router.delete("/:id", postFunc.deletePost);
router.patch("/:id", postFunc.updatePost);
router.patch("/:id/likePost", postFunc.likePost);
module.exports = router;
