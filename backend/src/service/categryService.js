const CategoryModel = require("../model/categoryModel");

const CategoryService = {
  createCategory: async (name, slug, id) => {
    let response = await CategoryModel.create(name, slug, id);

    return {
      status: true,
      message: "Category created successfully",
    };
  },

  getAllCategories: async () => {
    return await CategoryModel.findAll();
  },

  updateCategory: async (id, name, slug) => {
    let response = CategoryModel.update(id, name, slug);

    return {
      status: true,
      message: "Category updated successfully",
    };
  },

  deleteCategory: async (id) => {
    let response = await CategoryModel.delete(id);

    return {
      status: true,
      message: "Category deleted successfully",
    };
  },
};

module.exports = CategoryService;
