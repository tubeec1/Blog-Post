const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const authMiddleware = require("../middleWare/authMiddleWare"); 
const upload = require("../utilits/multer");

router.post(
  "/create",
  authMiddleware,
  upload.single("image"),
  postController.createPost
);

module.exports = router;;