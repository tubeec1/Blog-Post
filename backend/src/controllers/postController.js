const asyncHandler = require("../utilits/AsynHandler");
const postService = require("../service/postService");
const AppError = require("../utilits/AppError");
 
const createPost = asyncHandler(async (req, res) => {
console.log("body:" ,req.body)
console.log("file:" ,req.files)

 let { title ,slug , content} = req.body;
const image = req.files.image
  ? `postImages/postImage/${req.files.image[0].filename}`
  : null;

const thumbnail = req.files.thumbnail
  ? `postImages/postThumbnail/${req.files.thumbnail[0].filename}`
  : null;
  let user_id = req.user.id;

  let response = await postService.createPost(
    title,
     slug,
    content,
    image,
    thumbnail
  );
  return res.json(response)
})


const getAllPosts = asyncHandler(async (req, res) => {
  let response = await postService.getAllPosts();

 return res.json(response);
});


const getPostById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const response = await postService.getPostById(id);

 return res.json(response)



});
const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, slug, content } = req.body;

  const post = await postService.getPostById(id);

  if (!post) {
   
    throw new AppError("Post not found" ,404);
  }

  const image = req.files?.image
    ? `postImages/postImage/${req.files.image[0].filename}`
    : post.image;

  const thumbnail = req.files?.thumbnail
    ? `postImages/postThumbnail/${req.files.thumbnail[0].filename}`
    : post.thumbnail;

  let  response = await postService.updatePost(
    id,
    title,
    slug,
    content,
    image,
    thumbnail
  );

   return res.json(response);
});
const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

   let response =await postService.deletePost(id);

 return res.json(response)
});
module.exports = {
  createPost ,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost

}
