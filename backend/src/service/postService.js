const postModel = require("../model/postModel");

const createPost = async (
  userId,
  categoryId,
  title,
  slug,
  content,
  image,
  thumbnail,
) => {
  let response = await postModel.createPost(
    userId,
    categoryId,
    title,
    slug,
    content,
    image,
    thumbnail,
  );

  return {
    status: true,
    message: "Post created successfully",
    data: response,
  };
};

const getAllPosts = async (page, limit, order) => {
  if (!page && !limit) {
    let response = await postModel.getAllPosts(order);
    return {
      status: true,
      message: "successfully Reading",
      data: response,
    };
  } else if (page && limit) {
    let offset = (page - 1) * limit;
    let response = await postModel.getPostsByPageAndLimit(
      page,
      limit,
      offset,
      order,
    );
    return {
      status: true,
      message: "successfully Reading",
      data: response,
    };
  }
};

const getPostById = async (id) => {
  let response = await postModel.getPostById(id);
  return {
    status: true,
    data: response,
  };
};
const updatePost = async (
  userId,
  categoryId,
  postId,
  title,
  slug,
  content,
  image,
  thumbnail,
) => {
  let response = await postModel.updatePost(
    userId,
    categoryId,
    postId,
    title,
    slug,
    content,
    image,
    thumbnail,
  );
  if (response < 1) {
    throw new Error("Post not found or no changes made", 404);
  }
  return {
    status: true,
    message: "successfully updated",
  };
};
const deletePost = async (postId) => {
  let response = await postModel.deletePost(postId);
  if (response < 1) {
    throw new AppError("Post not found", 404);
  }
  return {
    status: true,
    message: "successfully deleted",
  };
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
