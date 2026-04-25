const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const authMiddleware = require("../middleWare/authMiddleWare");
const upload = require("../utilits/multer");
const {
  updatePostValidator,
  deletePostValidator,
  createPostValidator,
} = require("../vilidators/postValidator");
const { validationMiddleware } = require("../middleWare/validationMiddleWare");

router.post(
  "/create",
  authMiddleware,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  createPostValidator,
  validationMiddleware,
  postController.createPost,
);
router.get("/read", postController.getAllPosts);
router.get("/readPost/:postId", postController.getPostById);
router.put(
  "/update/:postId",
  authMiddleware,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  updatePostValidator,
  validationMiddleware,
  postController.updatePost,
);
router.delete(
  "/delete/:postId",
  deletePostValidator,
  validationMiddleware,
  authMiddleware,
  postController.deletePost,
);

router.get("/stats", postController.getStats);
router.get("/postsCount", postController.getPostsCountController);
module.exports = router;
