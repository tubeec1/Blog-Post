const asyncHandler = require("../utilits/AsynHandler");
const postService = require("../service/postService");
const AppError = require("../utilits/AppError");

const createPost = asyncHandler(async (req, res) => {
  let { title, slug, content, categoryId } = req.body;
  const image = req.files.image
    ? `postImages/postImage/${req.files.image[0].filename}`
    : null;

  const thumbnail = req.files.thumbnail
    ? `postImages/postThumbnail/${req.files.thumbnail[0].filename}`
    : null;
  let { id, role } = req.user;
  let userId = id;

  if (role != "admin") {
    throw new AppError("Only adminscan create posts", 403);
  }

  let response = await postService.createPost(
    userId,
    categoryId,
    title,
    slug,
    content,
    image,
    thumbnail,
  );
  return res.json(response);
});

const getAllPosts = asyncHandler(async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 3;
  let offset = (page - 1) * limit;
  let response = await postService.getAllPosts(page, limit, offset);

  return res.json(response);
});

const getPostById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const response = await postService.getPostById(id);

  return res.json(response);
});
const updatePost = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  console.log("post id", postId);
  const { title, slug, content, categoryId } = req.body;
  console.log("req body", req.body);
  let { id, role } = req.user;
  let userId = id;
  console.log("user id", userId);
  console.log("req files", req.files);

  if (role != "admin") {
    throw new AppError("Only admin can update posts", 403);
  }

  const image = req.files?.image
    ? `postImages/postImage/${req.files.image[0].filename}`
    : post.image;

  const thumbnail = req.files?.thumbnail
    ? `postImages/postThumbnail/${req.files.thumbnail[0].filename}`
    : post.thumbnail;

  let response = await postService.updatePost(
    userId,
    categoryId,
    postId,
    title,
    slug,
    content,
    image,
    thumbnail,
  );

  return res.json(response);
});
const deletePost = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  console.log("post id", postId);
  let { id, role } = req.user;

  if (role != "admin") {
    throw new AppError("Only admin can delete posts", 403);
  }
  let response = await postService.deletePost(postId);

  return res.json(response);
});
module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
