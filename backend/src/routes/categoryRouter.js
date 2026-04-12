const express = require("express");
const router = express.Router();

const {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const authMiddleware = require("../middleWare/authMiddleWare");

router.post("/create", authMiddleware, createCategory);
router.get("/read", getAllCategories);
router.put("/update/:categoryId", authMiddleware, updateCategory);
router.delete("/delete/:categoryId", authMiddleware, deleteCategory);

module.exports = router;
