let { body, param } = require("express-validator");
let createCategoryValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("slug").notEmpty().withMessage("Slug is required"),
];
let updateCategoryValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("slug").notEmpty().withMessage("Slug is required"),
  param("categoryId").notEmpty().withMessage("Category ID is required"),
];
let deleteCategoryValidator = [
  param("categoryId").notEmpty().withMessage("Category ID is required"),
];
module.exports = {
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
};
