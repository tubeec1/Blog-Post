const express = require("express");
const router = express.Router();

const {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const authMiddleware = require("../middleWare/authMiddleWare");
const {
  updateCategoryValidator,
  deleteCategoryValidator,
} = require("../vilidators/categoryValidation");
const { validationMiddleware } = require("../middleWare/validationMiddleWare");
const { createPostValidator } = require("../vilidators/postValidator");

router.post(
  "/create",
  authMiddleware,
  createPostValidator,
  validationMiddleware,
  createCategory,
);
router.get("/read", getAllCategories);
router.put(
  "/update/:categoryId",
  authMiddleware,
  updateCategoryValidator,
  validationMiddleware,
  updateCategory,
);
router.delete(
  "/delete/:categoryId",
  authMiddleware,
  deleteCategoryValidator,
  validationMiddleware,
  deleteCategory,
);

module.exports = router;
