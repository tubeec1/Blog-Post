const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const authMiddleware = require("../middleWare/authMiddleWare");
const upload = require("../utilits/multer");

router.post(
  "/create",
  authMiddleware,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  postController.createPost,
);
router.get("/readPosts", postController.getAllPosts);
router.get("/readPost/:postId", postController.getPostById);
router.put(
  "/update/:id",
  authMiddleware,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  postController.updatePost,
);
router.delete("/delete/:postId", postController.deletePost);
module.exports = router;
