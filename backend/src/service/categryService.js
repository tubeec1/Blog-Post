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

  updateCategory: async (categoryId, name, slug) => {
    let response = CategoryModel.update(categoryId, name, slug);

    return {
      status: true,
      message: "Category updated successfully",
    };
  },

  deleteCategory: async (categoryId) => {
    let response = await CategoryModel.delete(categoryId);

    return {
      status: true,
      message: "Category deleted successfully",
    };
  },
  getCategoriesCount: async () => {
    let response = await CategoryModel.countCategories();
    return {
      status: "true",
      message: "succsefull categories count",
      response: response,
    };
  },
};

module.exports = CategoryService;
