const asyncHandler = require("../utilits/AsynHandler");
const CategoryService = require("../service/categryService");
const AppError = require("../utilits/AppError");

const createCategory = asyncHandler(async (req, res) => {
  const { name, slug } = req.body;
  let { id, role } = req.user;

  if (role !== "admin") {
    throw new AppError("Only admin can create category", 403);
  }

  const response = await CategoryService.createCategory(name, slug, id);

  return res.json(response);
});

const getAllCategories = asyncHandler(async (req, res) => {
  const response = await CategoryService.getAllCategories();

  res.json({
    status: true,
    data: response,
  });
});
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, slug } = req.body;
  let response = await CategoryService.updateCategory(id, name, slug);

  return res.json(response);
});

const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  let response = await CategoryService.deleteCategory(id);

  return res.json(response);
});

module.exports = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
