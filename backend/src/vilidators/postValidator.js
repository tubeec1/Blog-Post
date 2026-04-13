let { body, param } = require("express-validator");

const updatePostValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("slug").notEmpty().withMessage("Slug is required"),
  body("content").notEmpty().withMessage("Content is required"),
  body("categoryId").notEmpty().withMessage("Category ID is required"),
  param(String("postId")).notEmpty().withMessage("Post ID is required"),
];
const createPostValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("slug").notEmpty().withMessage("Slug is required"),
  body("content").notEmpty().withMessage("Content is required"),
  body("categoryId").notEmpty().withMessage("Category ID is required"),
];

const deletePostValidator = [
  param(String("postId")).notEmpty().withMessage("Post ID is required"),
];

module.exports = {
  updatePostValidator,
  createPostValidator,
  deletePostValidator,
};
